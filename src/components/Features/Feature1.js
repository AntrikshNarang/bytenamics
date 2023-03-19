import React from 'react'
import './Features.css'
// import gif1 from '../Images/features/giphy.gif'


const Feature1 = () => {
    return (

        <div className="container">
           
                <div className="column-66">
                    <h1 className="head"><b>Event Creation</b></h1>

                    <p className="para">Allow organizers to create new hackathons, including setting dates, times, locations,
                        and themes.</p>
                </div>
                <div className="column-33">
                    <img classNameName='intro-image' src="https://cdn.theatlantic.com/thumbor/MQAkFotR_r32f5EE9ldCFQwKdiY=/0x0:960x540/720x405/media/img/mt/2023/01/robo_quizzes_final/original.gif"  alt="" width="300" height="300" />
                </div>
           
        </div>

    )
}
export default Feature1;
