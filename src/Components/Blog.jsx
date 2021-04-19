import React from 'react'
import commit from '../Media/Images/petalz_r-EIfyHg1L1Ao-unsplash.jpg'
import { Button } from 'react-bootstrap'

const Blog = () => {
    return (
   <>
        <div className="commitContainer">

            <img className="commitImg" src={commit} alt=""/>
            <div className="commitOver">
            <h4 className="commitBorder">Our Commitment</h4>
            <p className="commitText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. A accusantium assumenda autem laudantium quae iste, tempore placeat cumque dicta et labore non repudiandae doloribus corrupti veniam, dignissimos, similique quia eligendi!</p>
            <p className="commitText">Lorem ipsum, dolor sit amet consectetur adipisicing elit.udiandae perferendis culpa assumenda totam alias dicta quaerat autem illo cupiditate illum mollitia enim sint quae tempora, sapiente nihil?</p>
            <button className="commitButton"> Schedule Service </button>
        </div>

        </div>
    </>
    )
}

export default Blog
