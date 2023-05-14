import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// interface PopupProps {
//   quizId: number
// }

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
    quizId: number

};

const rules = [
  "Each question has a time limit. Answer before time runs out!",
  "Questions have options. Select the right one!",
  "Get points for correct answers. Score high!",
];

function Popup({ isOpen, onClose, quizId}: PopupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInsideClick, setIsInsideClick] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setIsInsideClick(false);
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`popup-wrapper ${isOpen ? 'open' : ''}`}>
      <div className="popup" ref={ref}>
        <div  className="QuizRulesWrapper">
      <h2>Quiz Rules</h2>
       <div><ul>
       {rules.map((rule, index) => {
          return (
           
              <li key={index}>{rule}</li>
          
           );
        })}
       </ul></div>
      
      <div><Link to={`/quiz/${quizId}`} className="primary"> Start</Link></div>
     </div>
      </div>
    </div>
  );
}

export default Popup;


 // <div ref={divRef} className="QuizRulesWrapper">
    //   <h2>Quiz Rules</h2>
    //   <div><ul>
    //     {rules.map((rule, index) => {
    //       return (
           
    //           <li key={index}>{rule}</li>
          
    //       );
    //     })}
    //   </ul></div>
      
    //   <div><Link to={`/quiz/${quizId}`} className="primary"> Start</Link></div>
    // </div>