import React from 'react'
import './Features.css'
// import gif2 from '../Images/features/g2.gif'

const Feature2=() =>{
  return (
    <div>
      <div className="container">
        
            <div className="column-33">
                <img src="https://i.giphy.com/media/nGMnDqebzDcfm/giphy.webp" style={{filter:'invert(1)'}} alt="" width="335" height="451"/>
            </div>
            <div className="column-66">
                <h1 className="head"><b>Registration and Ticketing</b></h1>
                <p className="para">Allow participants to register for hackathons and purchase tickets, including selecting
                    the hackathon they want to attend, specifying their role (e.g. participant, mentor, judge), and
                    paying any associated fees.
                </p>
            </div>
        </div>
   
    </div>
  )
}
export default Feature2;