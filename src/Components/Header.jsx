import React from 'react'
import lawn from '../Media/Videos/AdobeStock_376825907_Video_HD_Preview (convert-video-online.com) (2).mp4'

const Header = () => {
    return (
        <div className="video-container">
            <video autoplay loop muted>
            <source src={lawn} type="video/mp4"/>
              Your browser does not support the video tag. 
            </video>
            <div className="overlay-desc">
                <h3 class="welcome-border">Welcome!</h3>
                <br/>
                <p className="overvidText">Proffesional lawn care by highly trained lawn care specialists who can help ypu achieve a lush green lawn that is naturally more resistant to weeds, disease, and insects.</p>
                <div className="overButtonVid">
                    <button id="buttonVid">Lawn Care</button>
                    <button id="buttonVid">Pest Control</button>
                    <button id="buttonVid">Tree & Shurb</button>
                </div>
            </div>
        </div>
    )
}

export default Header