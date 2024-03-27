import React, {useState} from 'react';
import { Box, HStack, VStack, Text, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb, RadioGroup, Radio, NumberInput,
    NumberInputField, NumberInputStepper, NumberIncrementStepper, 
    NumberDecrementStepper

} from '@chakra-ui/react';

function TaketheQuiz(props) {
    const [colorValue, setColorValue] = useState(50);
    const [drynessValue, setDrynessValue] = useState(50);
    const [valueSet1, setValueSet1] = useState('');
  const [valueSet2, setValueSet2] = useState('');



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
      </Box>

      </VStack>
      <VStack>
      <Box w="500px" h="230px" bg="#F5F5F5" borderRadius="lg">
        <Text ml={5} fontSize="4xl">Looking for...</Text>
    </Box>
        <Box w="500px" h="240px" bg="#F5F5F5" borderRadius="lg" mt={3}>
        <Text ml={5} fontSize="4xl">Our Pick</Text>
        </Box>

      </VStack>
        </HStack>
        </div>
    );
}

export default TaketheQuiz;