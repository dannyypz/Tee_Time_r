import React from 'react'
import mower from '../Media/Images/daniel-watson-8vBpYpTGo90-unsplash.jpg'
// import {Card, Button, Row, Col} from "react-bootstrap"
import grass from '../Media/Images/kouji-tsuru-hkilGmT85ss-unsplash.jpg'
import banner from '../Media/Images/banner.png'

const Services = () => {
    return (

        <div className="servicesContainer">
            <img className="servicesImg" src={grass} alt=""/>
            <div className="servicesOver">
                <h4 className="servicesBorder">Our services</h4>
                <p className="servicesText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae totam quia, illo quidem perferendis commodi numquam ipsum reprehenderit dolore placeat natus eum obcaecati doloribus voluptatum est! Dolorum, neque dolor!</p>
                <div className="cardContainer">
                <div className="card">
                    <img className="serviceImg" src={mower} alt="Avatar" />
                    <div className="container">
                    <h4 className="serviceTitle"><b>Lawn Care</b></h4>
                    <p className="cardText">Lorem ipsum dolor</p>
                <button className="serviceButton">Schedule Service</button>
            </div>
            </div>
            <div className="card">
                    <img className="serviceImg" src={mower} alt="Avatar" />
                    <div className="container">
                    <h4 className="serviceTitle"><b>Pest Control</b></h4>
                <p className="cardText">Lorem ipsum dolor</p>
                <button className="serviceButton">Schedule Service</button>
            </div>
            </div>
            <div className="card">
                    <img className="serviceImg" src={mower} alt="Avatar" />
                    <div className="container">
                    <h4 className="serviceTitle"><b>Tree & Shurb</b></h4>
                    <p className="cardText">Lorem ipsum dolor</p>
                <button className="serviceButton">Schedule Service</button>
            </div>
            </div>
            </div>
            </div>
            </div>
           
    )
        
    }

export default Services
