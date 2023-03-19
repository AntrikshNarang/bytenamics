import React from 'react'
import './Reviews.css'
import img1 from '../Images/reviewImages/ayush_garg.jpeg'
import img2 from '../Images/reviewImages/sabhi.jpeg'
import img3 from '../Images/reviewImages/ksithij.jpeg'
import img4 from '../Images/reviewImages/arush.jpeg'

const Reveiws = () => {
    return (
        <div className='testimonial-container'>
            <div className='testimonial-heading'><h1 className="head"><b>Our Hearty Customers</b></h1></div>

            <div className="reviews">
                <div className="card" style={{ width: '22%' }}>
                    <img src={img1} className="card-img-top" alt="..." width="335" height="471" />
                    <div className="card-body">
                        <p className="card-text">"The hackathon website was fantastic! The layout was clean and easy to navigate,
                            and the information provided was comprehensive and helpful. The registration process was smooth, and
                            the updates leading up to the event were timely and informative. Overall, a great experience!"</p>
                    </div>
                </div>
                <div className="card" style={{ width: '22%' }}>
                    <img src= {img2} className="card-img-top" alt="..." width="335" height="471" />
                    <div className="card-body">
                        <p className="card-text">"I loved the hackathon website! It had a great design and was very user-friendly.
                            The resources and tools provided were incredibly helpful, and the FAQ section was well-written and
                            informative. I particularly liked the ability to connect with other participants and mentors through
                            the website. Highly recommended!"</p>
                    </div>
                </div>
                <div className="card" style={{ width: '22%' }}>
                    <img src={img3} className="card-img-top" alt="..." width="335" height="471" />
                    <div className="card-body">
                        <p className="card-text">"The hackathon website was a bit confusing to navigate at first, but once I got the
                            hang of it, I found it to be a great resource. The event schedule was well-organized, and the
                            updates leading up to the event were informative. However, I did find some of the content to be a
                            bit redundant. Overall, a good experience."</p>
                    </div>
                </div>
                <div className="card" style={{ width: '22%' }}>
                    <img src={img4} className="card-img-top" alt="..." width="335" height="471" />
                    <div className="card-body">
                        <p className="card-text">"I had a great time participating in the hackathon, and the website played a big
                            part in that. The layout was easy to navigate, and the information provided was comprehensive and
                            helpful. The submission process was smooth, and the judges' feedback was valuable. I would
                            definitely participate again!"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reveiws;