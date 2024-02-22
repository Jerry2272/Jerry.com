import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer className="footerContainer">
        <div className="footerContent">
            <h1>Let Get To Know Each Other</h1> 
            <h4>I am  always open to discuss your projects | Ideas by turning them into realities. Stay connected with Jerry Jakes through my social media handles!</h4>
            <div className="footerIcon">
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