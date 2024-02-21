import React from 'react'
import './Skills.css'
import { FaBootstrap, FaCodiepie, FaCss3, FaFigma, FaGit, FaGithub, FaHtml5, FaJsSquare, FaPhp, FaReact, FaTools, FaWordpress } from 'react-icons/fa'

function Skills() {
  return (
    <div className='skills' id='skill'>
        <h1>Technical ToolBar<FaTools /></h1>
        <div className="skillsTools">
            <div className="skillBox">
                <FaHtml5 className="fa" />
            </div>
            <div className="skillBox">
                <FaCss3 className="fa" />
            </div>
            <div className="skillBox">
                <FaJsSquare className="fa" />
            </div>
            <div className="skillBox">
                <FaBootstrap className="fa" />
            </div>
            <div className="skillBox">
                <FaGithub className="fa" />
            </div>
            <div className="skillBox">
                <FaReact className="fa" />
            </div>
            <div className="skillBox">
                <FaPhp className="fa" />
                <h5>PHP</h5>
            </div>
            <div className="skillBox">
                <FaGit className="fa" />
                    <h5>Git</h5>
            </div>
            <div className="skillBox">
                <h4>TailWind</h4>
            </div>
            <div className="skillBox">
                <FaFigma className="fa" />
                <h5>Figma</h5>
            </div>
            <div className="skillBox">
                <FaWordpress className="fa" />
            </div>
            <div className="skillBox">
                <FaCodiepie className="fa" />
            </div>
        </div>
    </div>
  )
}

export default Skills