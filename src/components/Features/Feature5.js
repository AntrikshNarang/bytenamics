import React from 'react'
import './Features.css'
import gif5 from '../Images/features/g5.gif'

const Feature5=()=> {
  return (
    <div>
      <div className="container">
       
            <div className="column-66">
                <h1 className="head"><b>Communication and Collaboration</b></h1>
                <p className="para"> Facilitate communication and collaboration between participants, teams, and organizers,
                    including providing messaging and chat features, forums for discussing specific topics, and the
                    ability to share resources and collaborate on projects.
                </p>
            </div>
            <div className="column-33">
                <img src="https://h9t4w9b8.rocketcdn.me/wp-content/uploads/2021/09/services_overview.gif"  style={{filter:'invert(1)'}} alt="" width="335" height="471"/>
            </div>
        </div>
    
    </div>
  )
}
export default  Feature5;