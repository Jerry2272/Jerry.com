import React from 'react'
import './AboutMe.css'
import { FaFacebookF, FaGithub, FaHandPointRight, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'
// import myImg from '../../assets/jerry4.jpg'

function AboutMe() {
  return (
    <div className='aboutMe' id="about">
        <div className="aboutContent">
                <h1>About Me</h1>
           <div className="text">
           <p>
                A dedicated | committed | passionate | web developer | eager to learning| based in Nigeria with over 2 years of experience in web development and  in solving both technical and relative problem. I specialize in helping clients and individuals create and maintain websites 
            </p>
            <p>
         I transform ideas into user-friendly and dynamic web solutions. If you're seeking a passionate and skilled developer to enhance your online presence, I'm here to help.
            </p>
           </div>
           <div className="icon">
            <FaHandPointRight className='handPoint' />
          <ul>
           <a href='/'><FaGithub /></ a>
            <a href='/'><FaLinkedinIn /></a>
            <a href='/'><FaFacebookF /></a>
            <a href='/'><FaTwitter /></a>
            <a href='/'><FaInstagram /></a>
            <a href='/'><FaWhatsapp /></a>
          </ul>
           </div>
        </div>
    </div>
  )
}

export default AboutMe