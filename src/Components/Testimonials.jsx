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
                      
                 <Col sm='6'>
                 <div>
                     <img src={alpaca} alt=""/>
                 </div>
                 </Col>
                 <Col sm='6'>
                    <div >
                <h4 >Our services</h4>
                <h6 >What our customers are saying!</h6>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eaque. Ratione assumenda quam exercitationem impedit, sequi non ea hic optio eaque reprehenderit. Deserunt at repellat adipisci minima aut, officia fugiat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum iste accusamus placeat fuga magni quibusdam, omnis et libero fugit non dolores consectetur maxime eveniet qui eligendi. Delectus, nulla quaerat!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus amet debitis eligendi, inventore harum ad natus odit porro placeat aut cupiditate ratione eos nisi obcaecati incidunt facilis, veniam quis.
                    </p>
                    </div>
                
                 <div>
                 <Icon.StarFill style={{color:"#fb8500",fontSize:"30px", margin:".2rem"}} />
                 <Icon.StarFill style={{color:"#fb8500",fontSize:"30px", margin:".2rem"}} />
                 <Icon.StarFill style={{color:"#fb8500",fontSize:"30px", margin:".2rem"}} />
                 <Icon.StarFill style={{color:"#fb8500",fontSize:"30px", margin:".2rem"}} />
                 <Icon.StarFill style={{color:"#fb8500",fontSize:"30px", margin:".2rem"}} />
                 <br/>
                 
                 </div>
                 
                <><Button style={{marginBottom:'3rem'}}variant="success">READ OUR REVIEWS</Button></>
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
