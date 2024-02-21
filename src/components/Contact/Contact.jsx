import React from 'react'
import './Contact.css'
import Form from './Form/Form'
import { FaConnectdevelop } from 'react-icons/fa'

function Contact() {
  return (
    <div className='contact' id="contact">
        <div className="contactContent">
            <h1>Have an Awesome Projects Ideas? <span>Let's Discuss <FaConnectdevelop className='connect' /> </span></h1>
            <Form />
        </div>
    </div>
  )
}

export default Contact