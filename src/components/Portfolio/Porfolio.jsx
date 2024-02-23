import React from 'react'
import './Portfolio.css'
import Iccef from '../../assets/Iccef_programme.png'
import Ecom from '../../assets/ecommerce.PNG'
import Search from '../../assets/search.PNG'
import Speech from '../../assets/speech.PNG'
import Top from '../../assets/top.png'
import Reis from '../../assets/reis.png'
import { Link } from 'react-router-dom'


function Porfolio() {
  return (
    <div className='portfolio' id="project">
        <div className="content">
            <h2>ShowCasing my Creative Journey <b>PORTFOLIO</b></h2>
            <div className="content">
                    <div className="item">
                    <div className="itemImg">
                    <img src={Ecom} alt=""  />
                    </div>
                      <div className="itemOverlay">
                        
                        <a href="https://jerry2272.github.io/jerryshoppingmoore" className="link">View Site</a>
                      <Link className="link" to="https://github.com/Jerry2272/reis-landing-page.ioo">
                        View Code
                      </Link>
                </div> 
                    <h4>Ecommerce Shopping Site</h4>
                    </div>
                    <div className="item">
                    <div className="itemImg">
                    <img src={Iccef} alt=""  />
                    </div>
                    <div className="itemOverlay">
                      <Link className="link" to="https://jerry2272.github.io/iccef_programme.github/">
                        View Site
                      </Link>
                      <Link className="link" to="https://jerry2272.github.io/iccef_programme.github/">
                        View Code
                      </Link>
                </div> 
                    <h4 className="text-white my-3">Iccef Programme</h4>
                    </div>
                    <div className="item">
                    <div className="itemImg">
                    <img src={Search} alt=""  />
                    </div>
                    <div className="itemOverlay">
                      <a href="https://jerry2272.github.io/search-images.api/"  className="link"> View Site</a>
                      <Link className="link" to="https://github.com/Jerry2272/www.top_temlate.github.ioo">
                        View Code
                      </Link>
                </div> 
                    <h4 className="text-white my-3">Search Image Website</h4>
                    </div>
                    <div className="item">
                    <div className="itemImg">
                    <img src={Speech} alt=""  />
                    </div>
                    <div className="itemOverlay">
                      <a href="https://jerry2272.github.io/speechConverter" className="link"> View Site</a>
                      <Link className="link" to="https://github.com/Jerry2272/www.top_temlate.github.ioo">
                        View Code
                      </Link>
                </div> 
                    <h4 className="text-white my-3">Tex Converter</h4>
                    </div>
                    <div className="item">
                    <div className="itemImg">
                    <img src={Top} alt=""  />
                    </div>
                    <div className="itemOverlay">
                      <a href=" https://jerry2272.github.io/www.top_temlate.github.io" className="link">View Site</a>
                      <Link className="link" to="https://github.com/Jerry2272/www.top_temlate.github.ioo">
                        View Code
                      </Link>
                </div> 
                    <h4 className="">Top Designing</h4>
                    </div>
                    <div className="item">
                    <div className="itemImg">
                    <img src={Reis} alt=""  />
                    </div>
                    <div className="itemOverlay">
                      <a href=" https://jerry2272.github.io/reis-landing-page.io/" className="link">View Site</a>
                      <Link className="link" to="https://github.com/Jerry2272/reis-landing-page.ioo">
                        View Code
                      </Link>
                </div> 
                    <h4 className="text-white my-3">Real Housing Estate</h4>
                    </div>
            </div>
            <Link to="https://github.com/Jerry2272?tab=repositories">Visit Github</Link>
        </div>
    </div>
  )
}

export default Porfolio