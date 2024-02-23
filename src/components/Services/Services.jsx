import React from 'react'
import { FaCode, FaCodepen } from 'react-icons/fa'
import './Services.css'

function Services() {
  return (
    <div className='service' id='service'>
    <div className="serviceText">
        <h1>What I  <span> Offer</span></h1>
        <div className="serviceContainer">
            <div className="serviceContent">
                <FaCodepen />
             <h4>Web Development</h4>
             <p>
                I have extensive knowledge in web developing and fundamentals, such as color theory and typeface with the ability to include responsive designs. I am also familiar with Bootstrap|tailwind and other tech skills
                </p>
            </div>
            <div className="serviceContent">
                <FaCodepen />
             <h4>SEO Optimization
</h4>
             <p>
             Optimize website speed and efficiency, ensuring swift loading times and seamless user navigation.
                </p>
            </div>
            <div className="serviceContent">
                <FaCodepen />
             <h4>Web Hosting</h4>
             <p>
             Simplify your web presence by hosting your site on reliable servers. We handle the technicalities, ensuring your website is accessible and secure 24/7.
                </p>
            </div>
            <div className="serviceContent">
                <FaCodepen />
             <h4>Website Maintenance</h4>
             <p>
             Keep your site secure and up-to-date with regular maintenance, security checks, content management, and feature enhancements.
                </p>
            </div>
            <div className="serviceContent">
                <FaCode />
             <h4>Online Teaching</h4>
             <p>
                I have extensive knowledge in web developing and fundamentals, such as color theory and typeface with the ability to include responsive designs. I am also familiar with Bootstrap|tailwind and other tech skills
                </p>
            </div>
            <div className="serviceContent">
                <FaCodepen />
             <h4>Web Development</h4>
             <p>
                I have extensive knowledge in web developing and fundamentals, such as color theory and typeface with the ability to include responsive designs. I am also familiar with Bootstrap|tailwind and other tech skills
                </p>
            </div>
        </div>
    </div>
        
    </div>
  )
}

export default Services