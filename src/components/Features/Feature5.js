import React from 'react'
import './Features.css'
import gif5 from '../Images/features/g5.gif'

const Feature5=()=> {
  return (
    <div>
      <div class="container">
       
            <div class="column-66">
                <h1 class="head"><b>Communication and Collaboration</b></h1>
                <p class="para"> Facilitate communication and collaboration between participants, teams, and organizers,
                    including providing messaging and chat features, forums for discussing specific topics, and the
                    ability to share resources and collaborate on projects.
                </p>
            </div>
            <div class="column-33">
                <img src={gif5} alt="" width="335" height="471"/>
            </div>
        </div>
    
    </div>
  )
}
export default  Feature5;