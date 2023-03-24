import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[14px] text-primary outline-none ${styles} rounded-[10px]`} onClick={() => window.location = 'mailto:mwalkermain@gmail.com'}>Contact us today</button>
  )
}

export default Button