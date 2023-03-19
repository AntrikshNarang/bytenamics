import React from 'react'
import './About.css';
import jas from '../Images/reviewImages/jaskaran.jpeg'
import aryan from '../Images/reviewImages/aryan.jpeg'
import antriksh from '../Images/reviewImages/antriksh.jpg'

const About = () => {
    return (
        <div>
            <div className="about-section">
                <h1>About Us</h1>
                <p> Bytenamics, a hackathon website dedicated to providing an immersive and collaborative platform for
                    innovative minds to ideate, build and showcase their ideas. Our aim is to foster a culture of creativity and
                    learning through various challenges and events that bring together like-minded individuals from around the
                    world.</p>
            </div>

            <div className="row">
                <h1 className="tm">Our Team</h1>
                <div className="column">
                    <div className="acard">
                        <img className='img1' src={jas}
                            alt="" />
                        <div className="cont">
                            <h2>Jaskaran Singh</h2>
                            <p className="title">Web Developer</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ea eligendi.</p>
                            <p>@example.com</p>
                            <p><a href="https://www.facebook.com" target="_blank" className="fa1 fa1-facebook fa fa-facebook"></a> | <a href="https://www.instagram.com" target="_blank" className="fa1 fa1-instagram fa fa-instagram"></a> | <a href="https://www.twitter.com" target="_blank" className="fa1 fa1-twitter fa fa-twitter"></a> </p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="acard">
                        <img className='img1' src={antriksh}
                            alt="" />
                        <div className="cont">
                            <h2>Antriksh Narang</h2>
                            <p className="title">Web Developer</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ea eligendi.</p>
                            <p>@example.com</p>
                            <p><a href="https://www.facebook.com" target="_blank" className="fa1 fa1-facebook fa fa-facebook"></a> | <a href="https://www.instagram.com" target="_blank" className="fa1 fa1-instagram fa fa-instagram"></a> | <a href="https://www.twitter.com" target="_blank" className="fa1 fa1-twitter fa fa-twitter"></a> </p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="acard">
                        <img className='img1' src={aryan}
                            alt="" />
                        <div className="cont">
                            <h2>Aryan Mandla</h2>
                            <p className="title">Web Developer</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ea eligendi.</p>
                            <p>@example.com</p>
                            <p><a href="https://www.facebook.com" target="_blank" className="fa1 fa1-facebook fa fa-facebook"></a> | <a href="https://www.instagram.com" target="_blank" className="fa1 fa1-instagram fa fa-instagram"></a> | <a href="https://www.twitter.com" target="_blank" className="fa1 fa1-twitter fa fa-twitter"></a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;