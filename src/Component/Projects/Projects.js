import React from 'react'
import "./Projects.css"


const Projects = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="project" id='project'>
                <div className="title">
                    <h2>My Projects</h2>
                </div>
                <div className="boxx">
                    <div className="cardd">
                        <i class="fa-brands fa-node"></i>
                        <h5>Book Management</h5>
                        <div className="pra">
                            <p>using node, express, mongoDB,</p>
                            <p >
                                <a className='button' href="https://github.com" rel="noreferrer" target='_blank'>Details</a>
                            </p>
                        </div>
                    </div>
                    <div className="cardd">
                    <i class="fa-solid fa-code"></i>
                        <h5>Newspaper Reader</h5>
                        <div className="pra">
                            <p>using node, express, mongoDB,</p>
                            <p style={{ textAlign: 'center' }}>
                                <a className='button' href="https://github.com" rel="noreferrer" target='_blank'>Details</a>
                            </p>
                        </div>
                    </div>
                    <div className="cardd">
                    <i class="fa-brands fa-react"></i>
                        <h5>E-cart</h5>
                        <div className="pra">
                            <p>using node, express, mongoDB,</p>
                            <p style={{ textAlign: 'center' }}>
                                <a className='button' href="https://github.com" rel="noreferrer" target='_blank' >Details</a>
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Projects
