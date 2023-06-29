import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <button
    type="button"
    style={{backgroundColor:bgColor,color,borderRadius}}
    className={`text-${size}`}>
      {text}
    </button>
  )
}

export default Button
