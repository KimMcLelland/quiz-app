import './main.css';
import React, { useState } from 'react';

function Quiz() {

  const [questionNumber, setQuestionNumber] = useState (2)

  const moneyLadder = [
    {id: 15, amount:"£1 MILLION!"},
    {id: 14, amount:"£500,000"},
    {id: 13, amount:"£250,000"},
    {id: 12, amount:"£125,000"},
    {id: 11, amount:"£64,000"},
    {id: 10, amount:"£32,000"},
    {id: 9, amount:"£16,000"},
    {id: 8, amount:"£8,000"},
    {id: 7, amount:"£4,000"},
    {id: 6, amount:"£2,000"},
    {id: 5, amount:"£1,000"},
    {id: 4, amount:"£500"},
    {id: 3, amount:"£400"},
    {id: 2, amount:"£200"},
    {id: 1, amount:"£100"},
     ]
  return (
    <div className ="app">
    <div className="main">
      <div className="top">
        <div clasName="questions">This is a question, please choose from one of the possible answers</div>
      </div>

      <div className="bottom">
        <div clasName="answers">Answer 1</div>
        <div clasName="answers">Answer 2</div>
        <div clasName="answers">Answer 3</div>
        <div clasName="answers">Answer 4</div>
      </div>


    </div>
    <div className="ladder">
      <ul className="moneyList">
      {moneyLadder.map((m) => (
      <li className={questionNumber === m.id ? "moneyItem active" : "moneyItem"}>
        <span className="questionNumber">{m.id}</span>
        <span className="questionAmount">{m.amount}</span>
      </li>
      ))}
       </ul>
    </div>
    </div>
  );
}

export default Quiz;
