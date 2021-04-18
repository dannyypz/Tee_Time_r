import React from 'react'
import mower from '../Media/Images/daniel-watson-8vBpYpTGo90-unsplash.jpg'
import {Card, Button} from "react-bootstrap"
import grass from '../Media/Images/kouji-tsuru-hkilGmT85ss-unsplash.jpg'
import banner from '../Media/Images/banner.png'

const Services = () => {
    return (
        <div className="servicesContainer">
            <img className="servicesImg" src={grass} alt=""/>
            <div className="servicesOver">
                <h4 className="servicesBorder">Our services</h4>
                <p className="servicesText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae totam quia, illo quidem perferendis commodi numquam ipsum reprehenderit dolore placeat natus eum obcaecati doloribus voluptatum est! Dolorum, neque dolor!</p>
            </div>
            <div className="serviceCards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={mower} />
                <Card.Body style={{ display:'flex', flexDirection:"column", alignItems:'center', justifyContent: 'center' }}>
                        <Card.Title style={{color:'#38b000'}}>Lawn Care</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button className="serviceButton">Schedule Service</Button>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={mower} />
                <Card.Body style={{ display:'flex', flexDirection:"column", alignItems:'center', justifyContent: 'center' }}>
                    <Card.Title style={{color:'#38b000'}}>Pest Control</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button className="serviceButton">Schedule Service</Button>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={mower} />
                <Card.Body style={{ display:'flex', flexDirection:"column", alignItems:'center', justifyContent: 'center', }}>
                    <Card.Title style={{color:'#38b000'}}>Tree & Shurb Services</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button className="serviceButton">Schedule Service</Button>
                </Card.Body>
            </Card>
            </div>
            <div className="serviceBanner" >
                <img style={{width:'100%'}} src={banner} alt=""/>    
            </div>  
        </div>
    )
}

export default Services
