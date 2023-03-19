import React, { useState } from 'react'
import './Intro.css'


const Intro = (props) => {

    
    

    
    console.log(props.src1)
    return (
        <>
            <div className="hr-container " style={{ backgroundImage: props.background }}>

                <div className="intro-content">
                    <h1 className="intro-title">{props.text1}</h1>
                </div>
                <div className="intro-text">
                    <p>{props.text2}</p>
                </div>
                {!props.hideButtons && <div className='button-box'>

                    <div><button type="button" className="btn">{props.btn1}</button></div>
                    <div> <button type="button" className="btn">{props.btn2}</button></div>

                </div>}
                <div className="client_logos">
                    <img className="invert"
                        src={props.src1} alt
                        ="" />
                    <img className="invert"
                        src={props.src2} alt
                        ="" />
                    <img className="invert"
                        src={props.src3} alt
                        ="" />
                    <img className="invert" src={props.src4}
                        alt="" />
                    <img className="invert" src={props.src5}
                        alt="" />
                    <img className="invert"
                        src={props.src6} alt
                        ="" />
                    <img className="invert" src={props.src7}
                        alt="" />
                    <img className="invert"
                        src={props.src8} alt
                        ="" />
                </div>



            </div>



        </>


    )
}
export default Intro;