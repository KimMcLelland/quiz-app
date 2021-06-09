import './main.css';
import {Link} from 'react-router-dom';
import { GiBrain } from 'react-icons/gi';


function navbar() {
  return (
   <nav>
       <h3><GiBrain size="90px" /></h3>
       <ul className="nav-links">
           <Link to="/Home">Home</Link>
           <Link to="/Login">Login</Link>
           <Link to="/Quiz">Quiz</Link>
           <Link to="/Leaderboard">Leaderboard</Link>
       </ul>
   </nav>
  );
}

export default navbar;
