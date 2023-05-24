import React from 'react'

const Button = ({ styles }) => {
  const openGmail = () => {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtsNQgqTvmHHsWHBnKJCxrpwwbzzpcJWlNQDQFfnGdCZGXkcgqnZXRgxGNCgnqLsSNFMVL', '_blank');
  };
  
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[14px] text-primary outline-none ${styles} rounded-[10px]`} 
    onClick={openGmail}>Contact us today</button>
  )
}

export default Button