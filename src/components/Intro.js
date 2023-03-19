import React, { useState } from 'react'
import './Intro.css'
import { Link } from 'react-router-dom';


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
                    {props.token?(<Link type="button" to='/events' className="btn btn-light">Events</Link>)
                    :(<><div><Link type="button" to='/login' className="btn btn-light">{props.btn1}</Link></div>
                    <div> <Link type="button" to='/signup' className="ms-2 btn btn-outline-light">{props.btn2}</Link></div></>)}

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