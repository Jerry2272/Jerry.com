import React from 'react'
import './Skills.css'
import { FaBootstrap, FaCss3, FaFigma, FaGit, FaGithub, FaHtml5, FaJsSquare, FaPhp, FaReact, FaTools, FaWordpress } from 'react-icons/fa'

function Skills() {
  return (
<div className="skills" id="skill">
  <h1 className="flex justify-center items-center gap-2 md:text-[40px] text-[30px] leading-[38px] mb-[30px]">
    <FaTools />
    Technical <span className="span">ToolBar</span>
  </h1>
  <div className="skillsTools grid grid-cols-3 p-5 lg:p-14 md:grid-cols-6 md:px-[2em]">
    <div className="skillBox" data-aos="fade-up">
      <FaHtml5 className="fa" style={{ marginBottom: '40px' }} />
      <h5>HTML 5</h5>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="100">
      <FaCss3 className="fa" style={{ marginBottom: '40px' }} />
      <h5>CSS</h5>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="200">
      <FaJsSquare className="fa" style={{ marginBottom: '40px' }} />
      <h5>JavaScript</h5>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="300">
      <FaBootstrap className="fa" style={{ marginBottom: '40px' }} />
      <h5>Bootstrap 5</h5>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="400">
      <FaGithub className="fa" style={{ marginBottom: '40px' }} />
      <h5>GitHub</h5>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="500">
      <FaReact className="fa" style={{ marginBottom: '40px' }} />
      <h5>React JS</h5>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="600">
      <FaPhp className="fa" style={{ marginBottom: '40px' }} />
      <h5>PHP</h5>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="700">
      <FaGit className="fa" style={{ marginBottom: '40px' }} />
      <h5>Git</h5>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="800">
      <h4>TailWind CSS</h4>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="900">
      <FaFigma className="fa" style={{ marginBottom: '40px' }} />
      <h5>Figma</h5>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="1000">
      <FaWordpress className="fa" style={{ marginBottom: '40px' }} />
      <h5>WordPress</h5>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="1100">
      <h4>Next Js</h4>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="1200">
      <h4>Firebase</h4>
    </div>
    <div className="skillBox" data-aos="fade-up" data-aos-delay="1300">
      <h4>SuperBase</h4>
    </div>
  </div>
</div>

  )
}

export default Skills