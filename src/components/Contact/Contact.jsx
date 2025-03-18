import React from 'react'
import './Contact.css'
import Form from './Form/Form'
import { FaConnectdevelop } from 'react-icons/fa'
import { FaFacebookF, FaLinkedinIn,FaEnvelope, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='contact flex flex-col md:flex-row text-left md:mx-[4em] mx-[1em] items-center'  id="contact">
        <div className="contactContent text-left">
        <h5 className='md:text-[0.80em] font-[600] text-[1em] mb-[20px]'>GET IN TOUCH !</h5>
        <h1 className="md:text-[40px] text-[30px] leading-[38px] mb-[30px] md:leading-[48px]">Have an Awesome Projects Ideas? <span className="span">Let's Discuss</span>
        </h1>
            <p>Discuss a project or just want to say hi? Connect with me via email or through a phone call.</p>
            <ul className='text-left p-0 mt-10'>
              <li className='flex gap-5'><FaConnectdevelop className='connect' />2+ Years of Experience</li>
              <li className='flex gap-5'><FaConnectdevelop className='connect' />Profesional Web Developer</li>
              <li className='flex gap-5'><FaConnectdevelop className='connect' />Tech Saviour</li>
              <li className='flex gap-5'><FaConnectdevelop className='connect' />Software Engineer</li>
              <li className='flex gap-5'><FaConnectdevelop className='connect' />Problem Solver</li>
            </ul>
             <ul className='flex items-center mt-5'>
                      <Link to="https://twitter.com/JerryAtebe?t=a4UOyewZuoB-lehKkeu8kw&s=09">
                              <FaTwitter className='ms-4 span' />
                              </Link>
                            <Link><FaLinkedinIn  className='ms-4 span' /></Link>
                            <Link to="https://www.instagram.com/jerryjake33/">
                            <FaInstagram className='ms-4 span' />
                            </Link>
                            <Link to="https://wa.me/09161729605"><FaWhatsapp  className='ms-4 span' /></Link>
                            <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new">
                                <FaEnvelope  className='ms-4 span' />
                            </Link>
                            <Link to="https://www.facebook.com/profile.php?id=100089627465352"><FaFacebookF  className='ms-4 span' /></Link>
                            <Link to="https://github.com/Jerry2272?tab=repositories">
                            <FaGithub  className='ms-4 span' /> 
                            </Link>
                      </ul>
        </div>
            <Form />
    </div>
  )
}

export default Contact