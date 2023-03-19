import React from 'react'
import './Features.css'
import gif4 from '../Images/features/g4.gif'

const Feature4=() =>{
  return (
    <div>
       <div class="container">
       
            <div class="column-33">
                <img src={gif4} alt="" width="335" height="471"/>
            </div>
            <div class="column-66">
                <h1 class="head"><b>Judging and Scoring</b></h1>
                <p class="para"> Provide a platform for judges to evaluate and score hackathon projects, including
                    providing feedback to participants and selecting winners based on specific criteria.
                </p>
            </div>
        </div>
   
    </div>
  )
}
export default  Feature4;