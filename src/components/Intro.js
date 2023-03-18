import React from 'react'
import './Intro.css'


const Intro = () => {
    return (
        <>
            <div className="hr-container ">

                <div className="intro-content">
                    <h1 className="intro-title">Join forces with fellow innovators, ignite your creativity, and code your way to a better future.</h1>
                </div>
                <div className="intro-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum reprehenderit doloribus
                        perferendis impedit! Quae quisquam non, sunt quia velit eos nesciunt doloremque sapiente error
                        in, aliquid voluptatem deleniti.</p>
                </div>
                <div className='button-box'>

                    <button type="button" className="btn">Login</button>
                    <button type="button" className="btn">Signup</button>

                </div>
                <div className='text2'>
                    <p>Bytenamics is made for organizing and executing hackathons linked to a corporate innovation
                        program.</p>
                </div>
                <div className="client_logos">
                    <img className="invert"
                        src="https://www.hackerrank.com/wp-content/uploads/2022/10/peloton_black.png" alt
                        ="" />
                    <img className="invert"
                        src="https://www.hackerrank.com/wp-content/uploads/2022/10/atlassian_black.png" alt
                        ="" />
                    <img className="invert"
                        src="https://www.hackerrank.com/wp-content/uploads/2022/10/bloomberg_black.png" alt
                        ="" />
                    <img className="invert" src="https://www.hackerrank.com/wp-content/uploads/2022/10/vmware_black.png"
                        alt="" />
                    <img className="invert" src="https://www.hackerrank.com/wp-content/uploads/2022/10/stripe_black.png"
                        alt="" />
                    <img className="invert"
                        src="https://www.hackerrank.com/wp-content/uploads/2022/10/goldmansachs_black.png" alt
                        ="" />
                    <img className="invert" src="https://www.hackerrank.com/wp-content/uploads/2022/10/adobe_black.png"
                        alt="" />
                    <img className="invert"
                        src="https://www.hackerrank.com/wp-content/uploads/2022/10/linkedin_black.png" alt
                        ="" />
                </div>
            </div>



        </>


    )
}
export default Intro;