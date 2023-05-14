import React, { useState } from "react";
import Popup from "../components/Popup";
import { quizes } from "../data";
import coin  from '../assets/coin.png';
import { Link } from "react-router-dom";



function Home() {
 
  const [quizId, setQuizId] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleShowPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  let quizName = "";
  const date = new Date();

  let current = date.getDay();

  const handleClick = (val: any) => {
    // setIsPopOpen(val);
    // console.log("is popup open", isPopOpen);
  };

  const renderQuizHead = () => {
    switch (current) {
      case 0:
        quizName = "Sunday's Super Quiz";
        break;
      case 1:
        quizName = "Monday's Mind Melt";
        break;
      case 2:
        quizName = "Teaser Tuesday";
        break;
      case 3:
        quizName = "Wise Up Wednesday Quiz";
        break;
      case 4:
        quizName = "Thinker's Thursday Quiz";
        break;
      case 5:
        quizName = " Friday Fiesta Quiz";
        break;
      case 6:
        quizName = " Saturday Showdown Quiz";
        break;
      default:
        quizName = "Quiz";
    }
    return (
      <>
        <h1>{quizName}</h1>
      </>
    );
  };

  return (
    <div className="HomeWrapper">
            <img src={coin} alt="noimg"/>

      {renderQuizHead()}
      <table>
      <tbody>
      {quizes.map((quiz, index) => {
        return (
         
          <tr key={index}>
            <td>{quiz.topic}</td>
            <td><button
              className="primary"
              onClick={() => {
                setIsPopupVisible(true);
                setQuizId(index);
              }}
            >
              Start Quiz
            </button></td>
          </tr>
        );
      })}</tbody></table>
       {isPopupVisible && (
        <Popup onClose={handleClosePopup} quizId={quizId} isOpen={false}/>
      )}
    </div>
  );
}

export default Home;
