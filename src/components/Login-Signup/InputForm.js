import React from 'react'

export const InputForm = (props) => {
  return (
    <>
        {props.label && <label>{props.label}</label>}
        <input {...props}/>
    </>
  )
}