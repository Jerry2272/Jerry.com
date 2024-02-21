import React from 'react'
import './Portfolio.css'
import Iccef from '../../assets/Iccef_programme.png'


function Porfolio() {
  return (
    <div className='portfolio' id="project">
        <div className="content">
            <h2>ShowCasing my Creative Journey <b>PORTFOLIO</b></h2>
            <div className="content">
                    <div className="item">
                    <div className="itemImg">
                    <img src={Iccef} alt=""  />
                    </div>
                    <h4 class="text-white my-3">Iccef Programme</h4>
                    </div>
                    <div className="item">
                    <div className="itemImg">
                    <img src={Iccef} alt=""  />
                    </div>
                    <h4 class="text-white my-3">Iccef Programme</h4>
                    </div>
                    <div className="item">
                    <div className="itemImg">
                    <img src={Iccef} alt=""  />
                    </div>
                    <h4 class="text-white my-3">Iccef Programme</h4>
                    </div>
                    <div className="item">
                    <div className="itemImg">
                    <img src={Iccef} alt=""  />
                    </div>
                    <h4 class="text-white my-3">Iccef Programme</h4>
                    </div>
                    <div className="item">
                    <div className="itemImg">
                    <img src={Iccef} alt=""  />
                    </div>
                    <h4 class="text-white my-3">Iccef Programme</h4>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Porfolio