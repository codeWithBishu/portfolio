import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
       <div className="content" id='home'>

        <h4>Hey!, my name is</h4>
        <h1>Bishuddhananda <span>Panda</span></h1>
        <h3>I'm a <span>MERN</span> stack Devloper trainee !</h3>
        <div className="newslater">
          <form>
            <input type="email" name="email id="mail placeholder='Enter you mail' />
            <input type="submit" name='submit' value="Lets Start" />
          </form>
        </div>
       </div>
    </>
  )
}

export default Home
