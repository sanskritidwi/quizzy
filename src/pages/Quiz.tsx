import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { quizes } from "../data";
import Question from "../components/Question";
import Result from "./Result";

function Quiz() {
  const { id } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log(quizes[Number(id)].questions.length >= currentQuestion)
    if (timeRemaining === 0 && quizes[Number(id)].questions.length-1 >= currentQuestion) {
     setCurrentQuestion((p)=>p+1);
     setTimeRemaining(60)
    }

  }, [timeRemaining]);

  const handleSubmit = () => {
    if (quizes[Number(id)].questions.length >= currentQuestion) {
      setCurrentQuestion((p) => p + 1);
      setTimeRemaining(60)
    } 
    console.log(score);
  };

  return (
    <div className="QuizWrapper">
      {quizes.map((quiz, index: Number) => {
        if (Number(id) === index) {
          if (quiz.questions.length === currentQuestion) {
            return <Result score={score} totalScore={quiz.totalQuestions} />;
          }
          return (
            <div key={id}>
              <h2>{quiz.topic} Quiz</h2>
              <div className="row">
              <div className="count"> {currentQuestion + 1} / {quiz.totalQuestions}</div>
                <div className="time">{timeRemaining} s</div>
              </div>
              {quiz.questions.map((question, index) => {
                if (currentQuestion === index) {
                  return (
                    <div key={index} className="questionWindow">
                      <Question
                        data={question}
                        setScoreChi={(score: number) =>
                          setScore((p) => p + score)
                        }
                      />
                      <button
                        className="primary"
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  );
                }
              })}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Quiz;
