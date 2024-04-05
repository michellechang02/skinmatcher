import React, {useState, useEffect} from 'react';
import { Box, HStack, VStack, Text, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb, RadioGroup, Radio, NumberInput,
    NumberInputField, NumberInputStepper, NumberIncrementStepper, 
    NumberDecrementStepper, Flex, Center, Button, Image

} from '@chakra-ui/react';

import data from '../data.json';



function TaketheQuiz(props) {
    const [colorValue, setColorValue] = useState(50);
    const [drynessValue, setDrynessValue] = useState(50);
    const [sunlightValue, setSunlightValue] = useState(50);
    const [valueSet1, setValueSet1] = useState('');
  const [valueSet2, setValueSet2] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const [recommended, setRecommended] = useState([]);

  function handleSubmit() {

    setSubmitted(true);
  }

  useEffect(() => {
    //TODO: Implement recommendation algorithm: Get ideal productNumber
    const productNumber = Math.floor(Math.random() * data.length);

    setRecommended(data[productNumber]);
  }, [submitted])



    return (
        <div>
            <Text ml={5} fontSize="5xl" mt={5}>Quiz</Text>
        <HStack spacing={4} ml={5} mr={5} mt={1}>
      <Box w="500px" h="auto" bg="#F5F5F5" borderRadius="lg" padding={5}>
        <VStack spacing={4}>
            <Box w="200px" h="100px" bg="tomato" borderRadius="lg">
                <Text color="white" p={4}>Find what you want</Text>
            </Box>
            <Box w="200px" h="100px" bg="skyblue" borderRadius="lg">
                <Text color="white" p={4}>Gift for Others</Text>
            </Box>
            <Box w="200px" h="100px" bg="green.200" borderRadius="lg">
                <Text color="white" p={4}>Your Daily Routine</Text>
            </Box>
            <Box w="200px" h="100px" bg="yellow.200" borderRadius="lg">
                <Text color="black" p={4}>Color Analysis</Text>
            </Box>
        </VStack>
      </Box>
      <VStack spacing={5}>
      <Box w="500px" h="270px" bg="#F5F5F5" borderRadius="lg">
        <Text ml={5} fontSize="4xl">Skin Type</Text>
            <Text ml={5} mb={2}>Color: {colorValue}</Text>
            <Slider
                aria-label="slider-ex-1"
                defaultValue={50}
                min={0}
                max={100}
                onChange={(val) => setColorValue(val)}
                ml={5}
                width="400px"
            >
            <SliderTrack>
            <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
            </Slider>
            <Text ml={5} mb={2}>Dryness: {drynessValue}</Text>
            <Slider
                aria-label="slider-ex-1"
                defaultValue={50}
                min={0}
                max={100}
                onChange={(val) => setColorValue(val)}
                ml={5}
                width="400px"
            >
            <SliderTrack>
            <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
            </Slider>
            <Text ml={5}>Main Concerns</Text>
            <HStack>
            <VStack>
            <RadioGroup onChange={setValueSet1} value={valueSet1} ml={5}>
                <Radio value="1" >Acne</Radio>
                <Radio value="2" ml={5} >Aging</Radio>
                <Radio value="3">Wrinkles</Radio>
                <Radio value="4" ml={5}>Redness</Radio>
            </RadioGroup>
            </VStack>

            <VStack>
            <RadioGroup onChange={setValueSet2} value={valueSet2} ml={5}>
                <Radio value="1">Pores</Radio>
                <Radio value="2"  ml={5}>Dark Spots</Radio>
                <Radio value="3">Dullness</Radio>
                <Radio value="4" ml={5}>Dryness</Radio>
            </RadioGroup>
            </VStack>
            </HStack>
            

      </Box>
      <Box w="500px" h="200px" bg="#F5F5F5" borderRadius="lg">
      <Text ml={5} fontSize="4xl">Demographics/Location</Text>
      <HStack>
      <Text ml={5}>Age</Text>
            <NumberInput size='md' maxW={24} defaultValue={15} min={10} ml={5}>
            <NumberInputField />
            <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
            </NumberInputStepper>
            </NumberInput>
        </HStack>
        <Text ml={5} mb={2}>Sunlight Received: {sunlightValue}</Text>
            <Slider
                aria-label="slider-ex-1"
                defaultValue={50}
                min={0}
                max={100}
                onChange={(val) => setSunlightValue(val)}
                ml={5}
                width="400px"
            >
            <SliderTrack>
            <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
            </Slider>
      </Box>

      </VStack>
      <VStack>
      <Box w="500px" h="150px" bg="#F5F5F5" borderRadius="lg">
        <Text ml={5} fontSize="4xl">Looking for...</Text>
        <HStack>
            <VStack>
            <RadioGroup onChange={setValueSet1} value={valueSet1} ml={5}>
                <Radio value="1" >Any</Radio>
                <Radio value="2" ml={5} >Cleanser</Radio>
                <Radio value="3">Oil</Radio>
                <Radio value="4" ml={5}>Makeup</Radio>
            </RadioGroup>
            </VStack>

            <VStack>
            <RadioGroup onChange={setValueSet2} value={valueSet2} ml={5}>
                <Radio value="1">Sunscreen</Radio>
                <Radio value="2"  ml={5}>Serum</Radio>
                <Radio value="3">Face Masks</Radio>
                <Radio value="4" ml={5}>Clay</Radio>
            </RadioGroup>
            </VStack>
            </HStack>
    </Box>
        <Box w="500px" h="320px" bg="#F5F5F5" borderRadius="lg" mt={3}>
        {submitted ? (
        <Flex align="center" height="100%">
            <HStack>
          <Box flex="1" height="100%">
          <Image mt={5} ml={5} src={recommended.url} alt='Dan Abramov' />
          </Box>
          <Box flex="1">
            <Text ml={10} fontSize="4xl" mt={{ base: 3, md: 0 }}>
              Our Pick
            </Text>
            <Text ml={10} mt={2}>
              {recommended.product}
            </Text>
            <Text ml={10} mt={2}>
             {recommended.description}
            </Text>
          </Box>
          </HStack>
        </Flex>
      ) : (
        <Center height="100%">
          <Button onClick={() => handleSubmit()}>Submit Form</Button>
        </Center>
      )}

        </Box>

      </VStack>
        </HStack>
        </div>
    );
}

export default TaketheQuiz;