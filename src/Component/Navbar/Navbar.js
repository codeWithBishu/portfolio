import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <div className="hero" id='home'>
            <nav>
                <h2 class="logo">Portf<span>olio</span></h2>                 
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#skill">Skill</a></li>
                        <li><a href="#project">Projects</a></li>
                    </ul>
            </nav>
            </div>
        </>
    )
}

export default Navbar
