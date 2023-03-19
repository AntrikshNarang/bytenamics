import React from 'react'
import './Features.css'
import gif4 from '../Images/features/g4.gif'
import gif3 from '../Images/features/g3.gif'

const Feature4=() =>{
  return (
    <div>
       <div className="container">
       
            <div className="column-33">
                <img src="https://media4.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif?cid=ecf05e473ni7jwriw42pgxyfk7a2od9zvgjwpgdhnqx06cct&rid=giphy.gif&ct=g" alt="" width="335" height="400"/>
            </div>
            <div className="column-66">
                <h1 className="head"><b>Judging and Scoring</b></h1>
                <p className="para"> Provide a platform for judges to evaluate and score hackathon projects, including
                    providing feedback to participants and selecting winners based on specific criteria.
                </p>
            </div>
        </div>
   
    </div>
  )
}
export default  Feature4;