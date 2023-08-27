import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
    <footer>
        <p>Connect Me</p>
        <div className="social">
            <a href="https://www.facebook.com" rel="noreferrer" target='_blank'><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com" rel="noreferrer" target='_blank'><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.github.com" rel="noreferrer" target='_blank'><i class="fa-brands fa-github"></i></a>
            <a href="https://www.discord.com" rel="noreferrer" target='_blank'><i class="fa-brands fa-discord"></i></a>
        </div>
        <p className='end'>Devloped by Bishuddhananda Panda | ❤</p>
    </footer>
    </>
  )
}

export default Footer
