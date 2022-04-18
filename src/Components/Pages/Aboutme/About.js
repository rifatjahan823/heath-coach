import React from 'react';
import image1 from '../../../Image/About-me/image-1.JPG'
import image2 from '../../../Image/About-me/image-2.png';
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div className='row align-items-center g-4'>
                <div className='col-md-8 col-sm-12'>
                    <div className='d-flex align-items-center'>
                    <h2 className='text-uppercase'>Hello</h2>
                    <div style={{width:"40%",height:"3px",backgroundColor:"black",marginLeft:"13px"}}></div>
                    </div>
                   <h1 className='text-uppercase fw-bold'>i am rifat jahan</h1>
                   <h5 className='text-uppercase mb-4'>fontend web developer</h5>
                   <button className='about-btn1 text-uppercase'>hire me</button>
                   <button className='about-btn2 text-uppercase'>get cv</button>
                </div>
                <div className='col-md-4 col-sm-12 '>
                <img className='float-end' style={{width:"100%"}} src={image1} alt="" />
                </div>
            </div>
            <div className='row align-items-center'>
                <div className='col-md-5 col-sm-12'>
                <img className='float-start' style={{width:"90%"}}  src={image2 } alt="" />
                </div>
                <div className='col-md-7 col-sm-12'>
                    <h2 className='text-uppercase fw-bold'>let's <br /> know about<br /> my goal</h2>
                    <p className='mt-4'>My goal is to be a sucessfull mern stack developer.To achive my goal everyday i'm doing so much hard work and always updatee myself with new technology.Its not only my career its my passion.</p>
                </div>
            </div>
        </div>
    );
};

export default About;