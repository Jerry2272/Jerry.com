import React from 'react'
import './AboutMe.css'
import { FaFacebookF, FaLinkedinIn,FaEnvelope, FaGithub, FaHandPointRight, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
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
          <Link to="https://twitter.com/JerryAtebe?t=a4UOyewZuoB-lehKkeu8kw&s=09">
                  <FaTwitter />
                  </Link>
                <Link><FaLinkedinIn /></Link>
                <Link to="https://www.instagram.com/jerryjake33/">
                <FaInstagram />
                </Link>
                <Link to="https://wa.me/09161729605"><FaWhatsapp /></Link>
                <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new">
                    <FaEnvelope />
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=100089627465352"><FaFacebookF /></Link>
                <Link to="https://github.com/Jerry2272?tab=repositories">
                <FaGithub /> 
                </Link>
          </ul>
           </div>
        </div>
    </div>
  )
}

export default AboutMe