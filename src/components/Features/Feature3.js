import React from 'react'
import './Features.css'
import gif3 from '../Images/features/g3.gif'
import gif4 from '../Images/features/g4.gif'

const Feature3=()=> {
  return (
    <div>
      <div className="container">
        
            <div className="column-66">
                <h1 className="head"><b>Participant Dashboard</b></h1>
                <p className="para">Provide a dashboard where participants can view their personal information, team
                    information, event details, and any important updates or announcements.
                </p>
            </div>
            <div className="column-33">
                <img src={gif4} alt="" width="335" height="421"/>
            </div>
        </div>
   
    </div>
  )
}
export default  Feature3;