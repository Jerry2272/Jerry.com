import React from 'react';
import './Navbar.css';
import {HashLink as Link} from 'react-router-hash-link'
import { FaHome, FaPeopleCarry, FaProjectDiagram, FaServicestack, FaSkiing } from 'react-icons/fa';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <h4><i>JerryJakes</i></h4>
        <nav>
          <ul className="menu-hide">
            <li>
              <Link className="nav-link" to="/" exact>
               <FaHome />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#about"> 
                <FaPeopleCarry />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#service"> 
                <FaServicestack />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#skill"> 
                <FaSkiing />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#project"> 
               <FaProjectDiagram />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
