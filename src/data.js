export const quizes = [
  {
    topic: "Javascript",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["stringify()", "parse()", "convert()", "None of the above"],
        type: "MCQs",
        correctAnswer: ["stringify()"],
      },
      {
        question:
          "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "var and let", "None of the above"],
        type: "MCQs",
        correctAnswer: ["var", "let"],
      },
      {
        question:
          "Which of the following methods can be used to display data in some form using Javascript?",
        choices: [
          "document.write()",
          "console.log()",
          "window.alert",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: ["All of the above"],
      },
      {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        type: "MCQs",
        correctAnswer: ["const"],
      },
    ],
  },
  {
    topic: "Python",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: "What is the maximum length of a Python identifier?",
        choices: ["32", "16", "128)", "No fixed length"],
        type: "MCQs",
        correctAnswer: ["No fixed length"],
      },
      {
        question: "How is a code block indicated in Python?",
        choices: ["brackets", "Indentation", "key", "None of the above"],
        type: "MCQs",
        correctAnswer: ["Indentation"],
      },
      {
        question: "Which of the following concepts is not a part of Python?",
        choices: ["pointers", "loops", "dynamic typing", "All of the above"],
        type: "MCQs",
        correctAnswer: ["pointers"],
      },
      {
        question:
          "Which of the following types of loops are not supported in Python?",
        choices: ["for", "while", "do while", "None"],
        type: "MCQs",
        correctAnswer: ["do while"],
      },
    ],
  },
];
