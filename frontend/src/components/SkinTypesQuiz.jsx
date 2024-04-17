import React, { useState } from "react";
import {
  Box,
  Text,
  Checkbox,
  CheckboxGroup,
  Button,
  VStack,
} from "@chakra-ui/react";

const SkinTypeQuiz = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const titleList = [
    "Assess your skin moisturization needs",
    "Assess your skin's sebum production",
    "Do you want to lighten dark spots on your skin?",
    "Lifestyle habits",
    "Suncare Habits",
  ];
  const questionList = [
    "Please check all that are true about how often you must use a moisturizer for your skin to feel hydrated. (Multiple answers are preferred.)",
    "Please check all that are true about your facial skin. (Multiple answers are preferred.)",
    "Assess your skin's underlying inflammation",
    "Do you want skin lighteners in your skin care products to treat hyper pigmentation? (Choose one answer)",
    "Check all that apply to you. (Multiple answers allowed)",
    "Check all that apply to you. (Multiple answers allowed)",
  ];
  const answersList = [
    [
      "I can use any soap to wash my face without developing dryness.",
      "I do not apply any products to my facial skin after cleansing.",
      "I never or only occasionally apply a moisturizer.",
      "I apply a moisturizer to my face once a day.",
      "I apply a moisturizer to my face twice a day.",
      "Check all the following that you have had in the last 4 weeks: (Multiple answers allowed)",
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
      "My skin pigment is uneven AND I want to lighten darker areas on my face",
      "My skin pigment is even AND I have no dark spots or darker areas",
      "I have freckles or dark spots AND I do not want to remove",
    ],
    [
      "I have smoked over 50 cigarettes or cigars in my life.",
      " I am exposed to second hand smoke on a weekly basis.",
      "I currently smoke cigarettes or cigars",
      "I often get less than 7 hours of sleep a night.",
      "I feel stress at least 2 hours a day.",
      "I eat sugary foods over 3 times a week.",
      "I exercise less than 3 hours a week.",
      "I do not eat fruit or vegetables every day.",
      "None of the above",
    ],
  ];

  const [currentIndex, setIndex] = useState(0);

  const handleOptionChange = (option) => {
    const isSelected = selectedOptions.includes(option);
    setSelectedOptions(
      isSelected
        ? selectedOptions.filter((o) => o !== option)
        : [...selectedOptions, option]
    );
  };

  const handleContinue = () => {
    // Perform any necessary actions with the selected options
    console.log("Selected Options:", selectedOptions);
    setIndex(currentIndex + 1);
  };

  function displayQuestions(index) {
    const answers = answersList[index];
    return answers.map((answer, i) => {
      //Start i at 1
      return (
        <Button
          colorScheme={
            selectedOptions.includes("option" + i) ? "green" : "blue"
          }
          onClick={() => handleOptionChange("option" + i)}
          borderRadius="md"
          px={4}
          py={6}
          width="100%"
        >
          {answer}
        </Button>
      );
    });
  }

  return (
    <Box>
      <Text mb={4}>{titleList[currentIndex]}</Text>
      <Text mb={4}>{questionList[currentIndex]}</Text>
      <CheckboxGroup
        colorScheme="green"
        value={selectedOptions}
        onChange={(values) => setSelectedOptions(values)}
      >
        <VStack>{displayQuestions(currentIndex)}</VStack>
      </CheckboxGroup>
      <Button
        colorScheme="pink"
        onClick={handleContinue}
        borderRadius={"25px"}
        mt={"30px"}
      >
        CONTINUE
      </Button>
    </Box>
  );
};

export default SkinTypeQuiz;
