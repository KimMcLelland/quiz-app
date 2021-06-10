import './main.css';
import React, {useState} from 'react';


function Leaderboard() {
  const [winners, setWinners] =  useState(["Tom", "Cassie", "Richard", "Andrew", "Nicola", "Debbie", "Steve"]);

  const displayWinners = () => {
    let i;
    for (i in winners) {
      let listOfWinners = winners.map((winners) => (
        <li>{winners}</li>
      ));

      return <ol>{listOfWinners}</ol>;
    }
  }
  return (
    <div>
        <h1>Leaderboard Page</h1>
        <p>and the winners are...</p>
        {displayWinners()}
    </div>
  );
}

export default Leaderboard;
