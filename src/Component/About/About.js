import React from 'react'
import "./About.css"
import profile from '../images/profilePhoto.png'

const About = () => {
    return (
        <>
           <section className="about" id='about'>
            <div className="main">
                <img src={profile} alt="profilephoto" />
                <div className="about-text">
                    <h2>About Me</h2>
                    <h5>I'm a <span>MERN</span> stack Devloper trainee</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur libero excepturi 
                        fuga illo. Ut voluptatum earum reiciendis atque fugit ipsa deserunt eveniet dolore nulla 
                        et doloremque iusto, hic veritatis optio consectetur est amet! Eligendi reprehenderit ab 
                        exercitationem accusamus dolore error.</p>
                    <button type='button'><a href="https://tinyurl.com/58rb82u8" rel="noreferrer" target='_blank'>Resume</a></button>
                </div>
            </div>
           </section>
        </>
    )
}

export default About
