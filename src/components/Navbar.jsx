import React from 'react';
import {
  Link
} from "react-router-dom";
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/questions" >QUESTIONS</Link>
        </li>
        <li>
          <Link to="/verbs" >VERBS</Link>
        </li>
        <li>
          <Link to="/students" >STUDENTS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
