import React from 'react'
import './Features.css'
import gif3 from '../Images/features/g3.gif'

const Feature3=()=> {
  return (
    <div>
      <div class="container">
        
            <div class="column-66">
                <h1 class="head"><b>Participant Dashboard</b></h1>
                <p class="para">Provide a dashboard where participants can view their personal information, team
                    information, event details, and any important updates or announcements.
                </p>
            </div>
            <div class="column-33">
                <img src={gif3} alt="" width="335" height="471"/>
            </div>
        </div>
   
    </div>
  )
}
export default  Feature3;