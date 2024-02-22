import React from 'react';
import './Navbar.css';
import {HashLink as Link} from 'react-router-hash-link'
import { FaHome } from 'react-icons/fa';

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
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="48"
  height="48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <line x1="12" y1="16" x2="12" y2="12" />
  <line x1="12" y1="8" x2="12" y2="8" />
</svg>

              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#service"> 
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="48"
  height="48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
  <line x1="6" y1="6" x2="18" y2="6" />
  <line x1="6" y1="12" x2="18" y2="12" />
  <line x1="6" y1="18" x2="18" y2="18" />
</svg>

              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#skill"> 
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="48"
  height="48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polygon points="12 2 2 7 12 12 22 7 12 2" />
  <polyline points="2 17 12 22 22 17" />
  <polyline points="2 12 12 17 22 12" />
</svg>

              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#project"> 
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="48"
  height="48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
  <line x1="7" y1="2" x2="7" y2="22" />
  <line x1="17" y1="2" x2="17" y2="22" />
  <line x1="2" y1="12" x2="22" y2="12" />
</svg>

              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#contact">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="48"
  height="48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
  <line x1="7" y1="2" x2="7" y2="22" />
  <line x1="17" y1="2" x2="17" y2="22" />
  <line x1="2" y1="12" x2="22" y2="12" />
</svg>

              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
