import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import star from "../assets/star-struck_1f929.gif"
import sad from "../assets/so-sad.gif"
import { Link } from 'react-router-dom'

interface ResultProps {
  score: number;
  totalScore:number,
}

function Result({ score , totalScore, }: ResultProps) {
  const { width, height } = useWindowSize();
  let percent = score / totalScore;
  return (
    <div className='ResultWrapper'>
          {percent>=0.5?  <img src={star} alt="noimg" width={"100px"}/>: <img src={sad} alt="noimg" width={"100px"} />}

       <h1>Result</h1>  <div className="score">{score} / {totalScore}</div>
      {percent>=0.5? <Confetti width={width} height={height} recycle={false} /> : <div>Your score is less than 50%</div>}
      <Link to="/" className='primary'>Take Another Quiz</Link>
     </div>
  )
}

export default Result