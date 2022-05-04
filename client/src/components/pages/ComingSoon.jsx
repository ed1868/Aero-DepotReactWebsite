import React from 'react'
import logo from '../../assets/images/AeroDepotT.png'
// import '../../assets/js/ComingSoon.js'
// import './assets/styles/comingSoon.scss'
// import './assets/styles/comingSoon.css'

export default function Home() {
  return (
    <div className="CommingSoon commingSoonContainer">
      <div className="jumbotron jumboHeight">
        <div className="container">
          {/* <h1 className='headerText'>Coming Soon!</h1> */}
          <h1 className='headerText' id="word">
            <span class="letter">C</span>
            <span class="letter">O</span>
            <span class="letter">M</span>
            <span class="letter">I</span>
            <span class="letter">N</span>
            <span class="letter">G</span>
            <span class="letter"> </span>
            <span class="letter">S</span>
            <span class="letter">O</span>
            <span class="letter">O</span>
            <span class="letter">N</span>

          </h1>
          <div className="aeroLogoContainer">
            <img src={logo} className='coverLogoBackgrounds'>
            </img>
          </div>
        </div>
      </div>

    </div>
  )
}
