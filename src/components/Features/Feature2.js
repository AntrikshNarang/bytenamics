import React from 'react'
import './Features.css'
import gif2 from '../Images/features/g2.gif'

const Feature2=() =>{
  return (
    <div>
      <div class="container">
        
            <div class="column-33">
                <img src={gif2} alt="" width="335" height="471"/>
            </div>
            <div class="column-66">
                <h1 class="head"><b>Registration and Ticketing</b></h1>
                <p class="para">Allow participants to register for hackathons and purchase tickets, including selecting
                    the hackathon they want to attend, specifying their role (e.g. participant, mentor, judge), and
                    paying any associated fees.
                </p>
            </div>
        </div>
   
    </div>
  )
}
export default Feature2;