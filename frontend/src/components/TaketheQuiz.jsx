import React, { useState, useEffect } from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  RadioGroup,
  Radio,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Center,
  Button,
  Select,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import data from "../data.json";
import SkinTypeQuiz from "./SkinTypesQuiz";
import DailyRoutine from "./DailyRoutine";
import ColorAnalysis from "./ColorAnalysis";

function TaketheQuiz(props) {
  const [selectedType, setSelectedType] = useState(null);
  const [sunlightValue, setSunlightValue] = useState(50);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [concerns, setConcerns] = useState("");
  const [lookingFor, setLookingFor] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [recommended, setRecommended] = useState([]);

  const [quiz, setQuiz] = useState(0);
  useEffect(() => {
    console.log(quiz);
  }, [quiz]);

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };
  function handleSubmit() {
    setSubmitted(true);
  }
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    //TODO: Implement recommendation algorithm: Get ideal productNumber
    const productNumber = Math.floor(Math.random() * data.length);

    console.log(selectedType);

    setRecommended(data[productNumber]);
  }, [submitted, selectedType]);

  return (
    <div>
      <Text ml={5} fontSize="5xl" mt={5}>
        Quiz
      </Text>
      <HStack spacing={4} ml={5} mr={5} mt={1}>
        <Box
          w="240px"
          h="auto"
          bg="#F5F5F5"
          borderRadius="lg"
          padding={5}
          style={{ zIndex: 1, flex: "none" }}
        >
          <VStack spacing={4}>
            <Button
              w="200px"
              h="100px"
              bg="grey"
              borderRadius="lg"
              onClick={() => setQuiz(0)}
            >
              <Text color="white">Find what you want</Text>
            </Button>
            <Button
              w="200px"
              h="100px"
              bg="grey"
              borderRadius="lg"
              onClick={() => setQuiz(1)}
            >
              <Text color="white">Skin Type Quiz</Text>
            </Button>
            <Button
              w="200px"
              h="100px"
              bg="grey"
              borderRadius="lg"
              onClick={() => setQuiz(2)}
            >
              <Text color="white">Your Daily Routine</Text>
            </Button>
            <Button
              w="200px"
              h="100px"
              bg="grey"
              borderRadius="lg"
              onClick={() => setQuiz(3)}
            >
              <Text color="white">Color Analysis</Text>
            </Button>
          </VStack>
        </Box>
        {quiz === 0 && (
          <>
            <VStack spacing={5}>
              <Box w="500px" h="270px" bg="#F5F5F5" borderRadius="lg">
                <Text ml={5} fontSize="4xl">
                  Skin Type
                </Text>
                <Select
                  ml={5}
                  mt={5}
                  w="90%"
                  value={selectedType}
                  onChange={handleSelectChange}
                  placeholder="Select Skin Type"
                >
                  <option value="balanced">Balanced</option>
                  <option value="dry">Dry</option>
                  <option value="oily">Oily</option>
                  <option value="combination">Combination</option>
                </Select>
                <Button
                  ml={3}
                  onClick={handleModalOpen}
                  color="blue.500"
                  textDecoration="underline"
                  _hover={{ color: "blue.600" }}
                  bg="transparent"
                  fontSize="sm"
                >
                  What's the difference?
                </Button>
                <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Explanation</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text ml={5} fontSize="md">
                        Balanced: Skin feels neither dry nor oily
                      </Text>
                      <Text ml={5} fontSize="md">
                        Dry: Skin feels tight and may become rough, flaky, or
                        scaly
                      </Text>
                      <Text ml={5} fontSize="md">
                        Oily: Skin appears shiny and feel greasy
                      </Text>
                      <Text ml={5} fontSize="md">
                        Combination: Skin feels oily in some areas - like the
                        forehead, nose, and chin - but dry in other areas
                      </Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme="blue" onClick={handleModalClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <Text ml={5} mt={25}>
                  Main Concerns
                </Text>
                <HStack>
                  <VStack>
                    <RadioGroup onChange={setConcerns} value={concerns} ml={5}>
                      <Radio value="1">Acne</Radio>
                      <Radio value="2" ml={5}>
                        Aging
                      </Radio>
                      <Radio value="3">Wrinkles</Radio>
                      <Radio value="4" ml={5}>
                        Redness
                      </Radio>
                    </RadioGroup>
                  </VStack>

                  <VStack>
                    <RadioGroup onChange={setConcerns} value={concerns} ml={5}>
                      <Radio value="5">Pores</Radio>
                      <Radio value="6" ml={5}>
                        Dark Spots
                      </Radio>
                      <Radio value="7">Dullness</Radio>
                      <Radio value="8" ml={5}>
                        Dryness
                      </Radio>
                    </RadioGroup>
                  </VStack>
                </HStack>
              </Box>
              <Box w="500px" h="200px" bg="#F5F5F5" borderRadius="lg">
                <Text ml={5} fontSize="4xl">
                  Demographics/Location
                </Text>
                <HStack>
                  <Text ml={5}>Age</Text>
                  <NumberInput
                    size="md"
                    maxW={24}
                    defaultValue={15}
                    min={10}
                    ml={5}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </HStack>
                <Text ml={5} mb={2}>
                  Sunlight Received: {sunlightValue}
                </Text>
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
                <Text ml={5} fontSize="4xl">
                  Looking for...
                </Text>
                <HStack>
                  <VStack>
                    <RadioGroup
                      onChange={setLookingFor}
                      value={lookingFor}
                      ml={5}
                    >
                      <Radio value="1">Any</Radio>
                      <Radio value="2" ml={5}>
                        Cleanser
                      </Radio>
                      <Radio value="3">Oil</Radio>
                      <Radio value="4" ml={5}>
                        Makeup
                      </Radio>
                    </RadioGroup>
                  </VStack>

                  <VStack>
                    <RadioGroup
                      onChange={setLookingFor}
                      value={lookingFor}
                      ml={5}
                    >
                      <Radio value="5">Sunscreen</Radio>
                      <Radio value="6" ml={5}>
                        Serum
                      </Radio>
                      <Radio value="7">Face Masks</Radio>
                      <Radio value="8" ml={5}>
                        Clay
                      </Radio>
                    </RadioGroup>
                  </VStack>
                </HStack>
              </Box>
              <Box w="500px" h="320px" bg="#F5F5F5" borderRadius="lg" mt={3}>
                {submitted ? (
                  <Flex align="center" height="100%">
                    <HStack>
                      <Box flex="1" height="100%">
                        <Image
                          mt={5}
                          ml={5}
                          src={recommended.url}
                          alt="Dan Abramov"
                        />
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
          </>
        )}
        {quiz === 1 && <SkinTypeQuiz />}
        {quiz === 2 && <DailyRoutine />}
        {quiz === 3 && <ColorAnalysis />}
      </HStack>
    </div>
  );
}

export default TaketheQuiz;
