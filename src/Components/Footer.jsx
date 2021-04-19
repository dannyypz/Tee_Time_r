import React from 'react'
import ground from '../Media/Images/footer_grass.png'
import mower from '../Media/Images/daniel-watson-8vBpYpTGo90-unsplash.jpg'
import logo from '../Media/Images/tee time and ttlc logo with alpaca.png'
import * as Icon from'react-bootstrap-icons'

const Footer = () => {
    return (
        <>
        <div>
            <div class="blogTtl">
                <h3 className="blog">BLOG</h3>
            </div>
            <div div className="blogContainer">
            <div className="blogCard">
                    <img className="blogImg" src={mower} alt="Avatar" />
                    <div className="container">
                    <h4 className="blogTitle"><b>What are moles?</b></h4>
                    <p className="blogText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, voluptatem, quaerat sequi possimus enim vero quod numquam minima voluptate necessitatibus recusandae illo tempore .</p>
                <div className="socialBlog">
                <button className="blogButton">Schedule Service</button>
                <Icon.ChatRightQuoteFill style={{color:"green"}}/>
                <Icon.HeartFill style={{color:"orange"}}/>
                </div>
            </div>
            </div>
            <div className="blogCard">
                    <img className="blogImg" src={mower} alt="Avatar" />
                    <div className="container">
                    <h4 className="blogTitle"><b>Why use plainfield fertilizer?</b></h4>
                <p className="blogText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo similique sint quis ipsam hic blanditiis nulla saepe tempore? Autem unde possimus </p>
                <div>
                <button className="blogButton">Schedule Service</button>
                <Icon.ChatRightQuoteFill style={{color:"green"}}/>
                <Icon.HeartFill style={{color:"orange"}}/>
                </div>
            </div>
            </div>
            <div className="blogCard">
                    <img className="blogImg" src={mower} alt="Avatar" />
                    <div className="container">
                    <h4 className="blogTitle"><b>What is Aeration?</b></h4>
                    <p className="blogText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veritatis quis nam vero culpa officiis fugiat iste illum repellat similique</p>
                <div>
                <button className="blogButton">Schedule Service</button>
                <Icon.ChatRightQuoteFill style={{color:"green"}}/>
                <Icon.HeartFill style={{color:"orange"}}/>
                </div>
            </div>
            </div>
            </div>
            <div className='faq'>
                <h2 className="faqTtl">FAQ</h2>
                <h5 className="faqText">Why do we have so many weeds? <Icon.ChevronDown style={{color:"orange"}} /></h5>
                <h5 className="faqText">What are the benefits of using organic?<Icon.ChevronDown style={{color:"orange"}}/></h5>
                <h5 className="faqText">when should lawns be aerated?<Icon.ChevronDown style={{color:"orange"}}/></h5>
                <h5 className="faqText">how do i know if i have grubs<Icon.ChevronDown style={{color:"orange"}}/></h5>
                <h5 className="faqText">how can i prevent lawn disease, such as fungus<Icon.ChevronDown style={{color:"orange"}}/></h5>
                <h5 className="faqText">whyis my lawn not geting better <br/> after applying disease control?<Icon.ChevronDown style={{color:"orange"}}/></h5>
                <h5 className="faqText">what is thatch<Icon.ChevronDown style={{color:"orange"}}/></h5>
            </div>
            <img className="footerImg" src={ground} alt=""/>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <img className="footerLogo" src={logo} alt=""/>
            <p className="logoText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, repudiandae ducimus? Corporis enim labore in ex exercitationem doloribus a earum facilis aliquam soluta, aut deserunt voluptatum provident! Repellendus, id saepe!</p>
            <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><Icon.Facebook style={{color:"orange"}}/></a></li>
              <li><a className="twitter" href="#"> <Icon.Twitter style={{color:"orange"}}/></a></li>
              <li><a className="instagram" href="#"> <Icon.Instagram style={{color:"orange"}}/></a></li>
            </ul>
          </div>
            </div>

          <div className="col-xs-6 col-md-3">
            <h6 style={{color:"green"}}>Categories</h6>
            <ul className="footer-links">
              <li><a href="#"><Icon.Geo style={{color:"orange"}}/>Plainfield, IL</a></li>
              <li><a href="#"><Icon.Geo style={{color:"orange"}}/>O'Fallon, IL/ StLouis, Mo</a></li>
              <li><a href="#"><Icon.Geo style={{color:"orange"}}/>Davenport, IA/ Quad Cities</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6 style={{color:"green"}}>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">Lawn Care</a></li>
              <li><a href="#">Core AEration & Overseeding</a></li>
              <li><a href="#">Pest Control</a></li>
              <li><a href="#">Tree & Shurb</a></li>
              <li><a href="#">Landscapping</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 20 All Rights Reserved by 
            </p>
          </div>
        </div>
      </div>
</footer> 
        </div>
        </>
    )
}

export default Footer
