import React from 'react'
import './Features.css'
import gif1 from '../Images/features/giphy.gif'


const Feature1 = () => {
    return (

        <div class="container">
           
                <div class="column-66">
                    <h1 class="head"><b>Event Creation</b></h1>

                    <p class="para">Allow organizers to create new hackathons, including setting dates, times, locations,
                        and themes.</p>
                </div>
                <div class="column-33">
                    <img src={gif1} alt="" width="335" height="471" />
                </div>
           
        </div>

    )
}
export default Feature1;
