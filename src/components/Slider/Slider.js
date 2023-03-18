import React, { useState } from 'react'

import './Slider.css'

const Slider = (props) => {

    const [isStyled1, setIsStyled1] = useState('true')
    const [isStyled2, setIsStyled2] = useState('')
    const circleColor1 = () => {
        setIsStyled1(true)
        setIsStyled2(false)

    }

    const circleColor2 = () => {
        setIsStyled2(true)
        setIsStyled1(false)

    }


    return (
        <div className='sliderContainer'>
            <button className='button' onClick={() => {
                circleColor1();
                props.onLeft();
            }}>
                <div className='left'></div></button>
            <div className={isStyled1 ? 'circled1' : 'circle1'}></div>
            <div className={isStyled2 ? 'circled2' : 'circle2'}></div>
            <button className='button' onClick={() => {
                circleColor2();
                props.onRight();
            }}>
                <div className='right'></div></button>

        </div>
    )
}
export default Slider;