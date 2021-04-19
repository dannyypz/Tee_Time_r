import React from 'react'
import {Button, Col, Row} from 'react-bootstrap'
import alpaca from '../Media/Images/ALPACA (1).png'
import BandA from '../Media/Images/BandA.png'
import * as Icon from'react-bootstrap-icons'


const Testimonials = () => {
    return (
        <>
                <div className="testContainer">
                    <Row>
                      
                 <Col sm='4' xs='6'>
                 <div>
                     <img className='alpaca' src={alpaca} alt=""/>
                 </div>
                 </Col>
                 <Col sm='3'xs='6'>
                    <div >
                <h4 className="testBorder" >Our Testimonials</h4>
                <h6 className="testUnder" >What our customers are saying!</h6>
                    <p className="testText" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum iste accusamus placeat fuga magni quibusdam, omnis et libero fugit non dolores consectetur maxime eveniet qui eligendi. Delectus, nulla quaerat!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus amet debitis eligendi, inventore harum ad natus odit porro placeat aut cupiditate ratione eos nisi obcaecati incidunt facilis, veniam quis.
                    </p>
                    </div>
                
                 <div className='testIcons'>
                 <Icon.StarFill style={{color:"#fb8500",fontSize:"30px", margin:".2rem"}} />
                 <Icon.StarFill style={{color:"#fb8500",fontSize:"30px", margin:".2rem"}} />
                 <Icon.StarFill style={{color:"#fb8500",fontSize:"30px", margin:".2rem"}} />
                 <Icon.StarFill style={{color:"#fb8500",fontSize:"30px", margin:".2rem"}} />
                 <Icon.StarFill style={{color:"#fb8500",fontSize:"30px", margin:".2rem"}} />
                 <br/>
                 
                 
                 
                <><Button style={{ width:"10rem", boxShadow: '0 0.25em 0.5em 0 rgb(0,0,0,0.25), 0 0.4em 1.25em 0 rgb(0,0,0,0.15)'}}variant="success">READ OUR REVIEWS</Button></>
                </div>
                </Col>
                
                 </Row>
                
                 <div >
                     <img className="lawnProof" src={BandA} alt=""/>
                 </div>
                 </div>
                 </>
    )
}

export default Testimonials
