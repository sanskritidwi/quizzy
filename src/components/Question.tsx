import React, { useEffect, useState } from "react";

interface QuestionProps {
  data: {
    question: string;
    choices: string[];
    correctAnswer: string[];
  };
  setScoreChi: Function;
}

function Question({ data, setScoreChi }: QuestionProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);



  function arraysEqual(arr1: string[], arr2: string[]): Number {
    if (arr1.length !== arr2.length) {
      return 0;
    }
    const sortedArr1 = arr1.sort();
    const sortedArr2 = arr2.sort();
    for (let i = 0; i < sortedArr1.length; i++) {
      if (sortedArr1[i] !== sortedArr2[i]) {
        return 0;
      }
    }
    return 1;
  }
  
  const handleAnswerSelect = (choice: string) => {
    let updatedAnswers = [...selectedAnswers];
    if (updatedAnswers.includes(choice)) {
      const answerIndexIndex = updatedAnswers.indexOf(choice);
      updatedAnswers.splice(answerIndexIndex, 1);
    } else {
      updatedAnswers.push(choice);
    }
    setSelectedAnswers(updatedAnswers);
   let score = arraysEqual(updatedAnswers, data.correctAnswer);
   setScoreChi(score);
  };

  let i =64;

  return (
    <div className="QuestionWrapper">
      <h4 className="question">{data.question}</h4>
      <div className="choices">{data.choices.map((choice, index) => {
        ++i;
        return (
          <>
            <label htmlFor={`ans-${index}`} key={index}>
              <div className="row"><div className={`option`}>{String.fromCharCode(i)}</div>
             <p>{choice}</p> </div>
              <input
                type="checkbox"
                id={`ans-${index}`}
                onChange={(e) => handleAnswerSelect(choice)}
              />
            </label>
          </>
        );
      })}</div>
      
    </div>
  );
}

export default Question;
