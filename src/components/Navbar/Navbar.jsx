import React, { useRef } from 'react';
import './Navbar.css';
import {HashLink as Link} from 'react-router-hash-link'
import { FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  const navRef = useRef(null);

  const toggleNav = () => {
    navRef.current.classList.toggle('navDisplay')
  }
  return (
    <header className="navbar">
      <div className="container">

        {/* <h4><i>JerryJakes</i></h4>  */}
        <nav ref={navRef}>
          <ul className="menu-hide">
            <li>
              <Link className="nav-link" to="#hero" exact>
               Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#about"> 
          About 
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#service"> 
                service
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#skill"> 
                Skills
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
          <button onClick={toggleNav} className='times'>
            <FaTimes />
          </button>
        </nav>
        <button  onClick={toggleNav} className='menu'>
        <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
