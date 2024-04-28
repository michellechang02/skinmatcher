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

const ColorAnalysis = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [slideDirection, setSlideDirection] = useState("left");
 
 
  const titleList = [
    "Access your color analysis",
    "Assess your skin's sebum production",
    "Assess your skin's underlying inflammation",
    "Lifestyle habits",
    "Suncare Habits",
    "Check all the following concerns that you would like to address",
    "Let's help you find the right sunscreen",
    "Help us color match your sunscreen",
  ];

  
  const questionList = [
    "[Question 1]",
    "Check the color that is closest to your natural hair color",
    "Check all the following that you have had in the last 4 weeks: (Multiple answers allowed)",
    "Check all that apply to you. (Multiple answers allowed)",
    "Check all that apply to you. (Multiple answers allowed)",
    "If you have any other issues you would like us to recommend products for, please select them here. You can scroll down and select 'None of the above' if nothing applies",
    "The most important step to prevent aging is wearing sunscreen on a daily basis and re-applying through the day, even when indoors.",
    "What tint of daily facial sunscreen do you prefer?",
  ];
  const answersList = [
    [
      "I can use any soap to wash my face without developing dryness.",
      "I do not apply any products to my facial skin after cleansing.",
      "I never or only occasionally apply a moisturizer.",
      "I apply a moisturizer to my face once a day.",
      "I apply a moisturizer to my face twice a day.",
    ],
    [
      "My facial skin is rough or dry.",
      "My facial skin is oily in some areas.",
      "My face is very oily.",
      "My face is uncomfortable if I do not use a moisturizer.",
      "I like the feel of heavy creams and/or oil on my skin.",
      "None of the above",
    ],
    [
      "Acne (pimples)",
      "Facial redness and/or flushing",
      "Stinging or burning",
      "A rash with itching, scaling and redness",
      "Irritation from shaving the face",
      "None of the above",
    ],
    [
      "I am exposed to second hand smoke on a weekly basis.",
      "I currently smoke cigarettes or cigars",
      "I often get less than 7 hours of sleep a night.",
      "I feel stress at least 2 hours a day.",
      "I eat sugary foods over 3 times a week.",
      "I exercise less than 3 hours a week.",
      "I do not eat fruit or vegetables every day.",
      "None of the above",
    ],
    [
      "I have been to a tanning bed more than 3 times in my life.",
      "I am exposed to the sun for over 3 hours a week.",
      "I spend over 3 hrs/wk near a window during daylight (including driving).",
      "My face has been sunburned and peeled more than twice in my life.",
      "I do not take daily antioxidant supplements like vitamin E and C.",
      "One of my parents has more wrinkles than others their age.",
      "I do not wear sunscreen every day",
      "I do not wear sunscreen during outdoor activities",
      "None of the above",
    ],
    [
      "Dandruff or itching/flaking scalp",
      "Dry skin",
      "Eczema",
      "Hair loss or thinning hair",
      "Psoriasis",
      "Shaving irritation",
      "Acne Scars",
      "Broken blood vessels on face or body",
      "Cellulite",
      "Loss of fullness",
      "Sagging skin",
      "Stretch marks",
      "Wrinkles",
      "None of the above",
    ],
    [
      "Chemical Block (Less White)",
      "Chemical Free Physical Block (Zinc Oxide, May Be White)",
      "No Preference",
    ],
    ["Tinted (Has Color)", "Untinted (White Or Clear)", "No Preference"],
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
    if (currentIndex === 8) {
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
            {currentIndex < 8 ? (
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
              <Box flex="1" height="100%">
                {recommended && (
                  <Image
                    mt={5}
                    ml={5}
                    src={recommended.url}
                    alt="Recommended Product"
                  />
                )}
              </Box>
            )}
          </VStack>
        </CheckboxGroup>
        {currentIndex < 8 && (
          <Button
            position="absolute"
            colorScheme="blackAlpha"
            onClick={handleContinue}
            borderRadius={"25px"}
            mt={"30px"}
          >
            {currentIndex < 7 ? "CONTINUE" : "SUBMIT"}
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

export default ColorAnalysis;
