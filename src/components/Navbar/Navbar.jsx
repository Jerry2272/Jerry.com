import React from 'react';
import './Navbar.css';
import {HashLink as Link} from 'react-router-hash-link'
import { FaHome,  FaTools } from 'react-icons/fa'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        {/* <h4><i>JerryJakes</i></h4> */} 
        <nav>
          <ul className="menu-hide">
            <li>
              <Link className="nav-link" to="/" exact>
               <FaHome />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#about"> 
          About me
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#service"> 
                service
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#skill"> 
                <FaTools />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#project"> 
                  Portfolio         
             </Link>
            </li>
            <li>
              <Link className="nav-link" to="#contact">
              Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
