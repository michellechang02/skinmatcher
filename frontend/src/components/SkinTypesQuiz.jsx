import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Checkbox,
  CheckboxGroup,
  Button,
  VStack,
  Slide,
  HStack,
  Image,
  Progress,
} from "@chakra-ui/react";
import "./quiz.css";
import data from "../data.json";

const SkinTypeQuiz = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [slideDirection, setSlideDirection] = useState("left");
  const titleList = [
    "What is your skin type?",
    "What is your skin type?",
    "What is your skin type?",
    "What is your skin type?",
    "What is your skin type?",
    "What is your skin type?",
    "What is your skin type?",
  ];
  const questionList = [
    "What does your skin typically look like at the end of the day",
    "If you wash your face and don't apply any products, how does your skin behave 30 minutes later?",
    "Dab a blotting paper or tissue on each part of your face, then hold it to the light. What do you see?",
    "What's generally your top skin concern?",
    "What do your current favorite skin care products do?",
    "Describe your pores.",
    "What do you look for in a face mask",
  ];
  const answersList = [
    [
      "Shimmery T-zone but matte cheeks",
      "Slick and shiny",
      "Tight or splotchy",
      "None of the above",
    ],
    [
      "It wants moisturizer asap.",
      "It's calm, smooth, and soft.",
      "Oily, dry, and generally uneven.",
      "It's already shiny.",
    ],
    [
      "Oily spots.",
      "Minor oil slicks from my nose and forehead.",
      "Nothing, but my skin is irritated from blotting",
      "None of the above",
    ],
    [
      "Dryness or irritation",
      "Blackheads or acne",
      "T-zone shine or unevenness",
      "Fine lines or wrinkles",
    ],
    [
      "Provide the right amount of plump and glow",
      "Balance my complexion",
      "Relieve tightness or irritation",
      "Clear and prevent breakouts",
    ],
    [
      "Visible, large, and sometimes clogged",
      "Depends on where they are on my face",
      "Small to medium-size",
      "They seem to change with the day",
    ],
    [
      "Charcoal or clay to absorb oil",
      "Enzymes or acid to resurface",
      "A leave-on sleep mask to deeply hydrate",
      "Whatever smells or looks great",
    ],
  ];

  const [currentIndex, setIndex] = useState(0);

  const [questionStates, setQuestionStates] = useState([
    "green",
    "unseen",
    "unseen",
    "unseen",
    "unseen",
    "unseen",
    "unseen",
  ]);

  const handleOptionChange = (option) => {
    const isSelected = selectedOptions.includes(option);
    setSelectedOptions(
      isSelected
        ? selectedOptions.filter((o) => o !== option)
        : [...selectedOptions, option]
    );
  };

  const handleContinue = () => {
    setSlideDirection("slide-out");
    setTimeout(() => {
      setSlideDirection("slide-in");
      setSelectedOptions([]);

      const updatedStates = [...questionStates];
      updatedStates[currentIndex + 1] = "green";
      for (let i = 0; i < currentIndex + 1; i++) {
        updatedStates[i] = "light-green";
      }
      setIndex(currentIndex + 1);

      setQuestionStates(updatedStates);
    }, 500);
  };
  const [slideProgress, setSlideProgress] = useState(0);

  useEffect(() => {
    const handleSlideProgress = () => {
      const slideInElement = document.querySelector(".slide-out");
      if (slideInElement) {
        const slideInRect = slideInElement.getBoundingClientRect();
        const slideInWidth = slideInRect.width;
        const windowWidth = window.innerWidth;
        const progress = (windowWidth - slideInWidth) / windowWidth;
        setSlideProgress(progress);
      }
    };

    window.addEventListener("resize", handleSlideProgress);
    handleSlideProgress();

    return () => {
      window.removeEventListener("resize", handleSlideProgress);
    };
  }, []);

  const buttonOpacity = slideDirection === "slide-out" ? 0 : 1;

  function displayQuestions(index) {
    console.log(index);
    const answers = answersList[index];

    // Calculate the number of answers per column based on the total number of answers

    const columns = Math.ceil(answers.length / 6);
    const answersPerColumn = Math.ceil(answers.length / columns);

    // Create an array of buttons for each column
    const buttons = answers.map((answer, i) => (
      <Button
        backgroundColor={
          selectedOptions.includes("option" + i) ? "beige" : "whitesmoke"
        }
        _hover={{
          backgroundColor: "beige",
          borderColor: "brown",
        }}
        onClick={() => handleOptionChange("option" + i)}
        borderRadius="md"
        borderColor={selectedOptions.includes("option" + i) ? "beige" : "grey"}
        borderWidth={1.5}
        px={4}
        py={6}
        width={answers.length > 6 ? "100%" : "700px"}
        style={{ opacity: buttonOpacity }}
      >
        <Text color="black">{answer}</Text>
      </Button>
    ));

    if (answers.length > 6) {
      return (
        <HStack spacing={3}>
          {Array(columns)
            .fill()
            .map((_, i) => (
              <VStack key={i}>
                {buttons.slice(
                  i * answersPerColumn,
                  (i + 1) * answersPerColumn
                )}
              </VStack>
            ))}
        </HStack>
      );
    }

    // Render buttons in a single column if there are 6 or fewer answers
    return <VStack spacing={4}>{buttons}</VStack>;
  }

  function getRec() {
    const productNumber = Math.floor(Math.random() * data.length);
    setRecommended(data[productNumber]);
    // return (
    //   <Box flex="1" height="100%">
    //     <Image mt={5} ml={5} src={recommended.url} alt="Dan Abramov" />
    //   </Box>
    // );
  }

  useEffect(() => {
    if (currentIndex === 6) {
      getRec();
    }
  }, [currentIndex]);

  //   function displayProgressCircles() {
  //     const circles = [];
  //     for (let i = 0; i < 6; i++) {
  //       circles.push(
  //         <Box
  //           key={i}
  //           w="50px" // Width of the circle
  //           h="50px" // Height of the circle
  //           borderRadius="50%" // Makes the box shape circular
  //           bg={
  //             i > currentIndex
  //               ? "gray"
  //               : i === currentIndex
  //               ? "green"
  //               : "light-green"
  //           } // Background color based on condition
  //         />
  //       );
  //     }
  //     return circles;
  //   }

  return (
    <HStack ml={5} mr={5} w="100%">
      <Box mt={-14} w="100%">
        <Text mb={4}>{titleList[currentIndex]}</Text>
        <Text mb={4}>{questionList[currentIndex]}</Text>
        <CheckboxGroup
          colorScheme="green"
          value={selectedOptions}
          onChange={(values) => setSelectedOptions(values)}
        >
          <VStack
            position="relative"
            className={slideDirection}
            style={{ zIndex: 0 }}
          >
            {" "}
            {currentIndex < 7 ? (
              <CheckboxGroup
                colorScheme="green"
                value={selectedOptions}
                onChange={(values) => setSelectedOptions(values)}
              >
                <VStack
                  position="relative"
                  className={slideDirection}
                  style={{ zIndex: 0 }}
                >
                  {displayQuestions(currentIndex)}
                </VStack>
              </CheckboxGroup>
            ) : (
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                overflow="hidden"
                width="800px"
                height="600px"
                borderRadius="10%"
                borderWidth="1px"
                borderColor="black"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mt={100}
              >
                <Text textAlign="left" ml="75px" mr={10} mt={6}>
                  Your skin type is: <strong>Combination</strong>
                </Text>
                <Text ml="125px">
                  • Skin feels oily in some areas - like the forehead, nose, and
                  chin - but dry in other areas
                </Text>
                <Text
                  fontWeight="bold"
                  textAlign="left"
                  ml="75px"
                  mr={10}
                  mt={4}
                >
                  Your recommended product:
                </Text>
                <Image
                  src={recommended.url}
                  ml="150px"
                  width="60%"
                  height="auto"
                />
              </Box>
            )}
          </VStack>
        </CheckboxGroup>
        {currentIndex < 7 && (
          <Button
            position="absolute"
            colorScheme="blackAlpha"
            onClick={handleContinue}
            borderRadius={"25px"}
            mt={"30px"}
          >
            {currentIndex < 6 ? "CONTINUE" : "SUBMIT"}
          </Button>
        )}
      </Box>
      <VStack ml={4} spacing={4} style={{ zIndex: 1 }}>
        {questionStates.map((state, index) => (
          <Box key={index} className={`circle ${state}`} />
        ))}
        /
      </VStack>
    </HStack>
  );
};

export default SkinTypeQuiz;
