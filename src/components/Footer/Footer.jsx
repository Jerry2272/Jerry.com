import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
   <footer className="footerContainer">
        <div className="footerContent">
            <h1>Let Get To Know Each Other</h1> 
            <h4>I am  always open to discuss your projects | Ideas by turning them into realities. Stay connected with Jerry Jakes through my social media handles!</h4>
            <div className="footerIcon">
                <a href="/"><FaTwitter /></a>
                <a href="/"><FaLinkedin /></a>
                <a href="/"><FaInstagram /></a>
                <a href="/"><FaWhatsapp /></a>
                <a href="/"><FaEnvelope /></a>
                <a href="/"><FaFacebook /></a>
                <a href="/"><FaGithub /></a>
            </div>
            <h5>Created by <b>Jerry Jakes</b> | 2024 | All Reserved!</h5>
         </div>     
         <div className="footerMap">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127223.16264394466!2d7.00479655!3d4.81741045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea39f2c48e3%3A0x53562bdd7d8832db!2sPort%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1708431447056!5m2!1sen!2sng" 
  allowFullScreen
   loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  title="Responsive Google map"
  ></iframe>
         </div>
   </footer>
  )
}

export default Footer