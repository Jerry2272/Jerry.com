import React from 'react'
import logo from '../../assets/jerry3.png'
import './Hero.css'

function Hero() {
  return (
    <div className='HeroSection' id='hero'>
        <div className="heroContentText">
            <h1 style={{textAlign: 'start'}}>I'm <span>Jerry Atebe</span></h1>
            <h4 style={{textAlign: 'start'}}>Web Developer | Tech Saviour | Codist | Computer Beast</h4>
            <div className="buttons">
                <button>DownLoad CV</button>
                <button className='hire'>Hire Me</button>
            </div>
        </div>
        <div className="heroImg">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Hero