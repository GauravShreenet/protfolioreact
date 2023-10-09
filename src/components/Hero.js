import React from 'react'
import profilePic from "../assest/My project.png"

export const Hero = () => {
  return (
    <section id="home" className='container hero-section'>
        <div className="grid hero">
            <div className="left flex">
                <p>
                    Hi I'm  
                    <strong> Gaurav Shreenet</strong>
                </p>
                <h3>Software Engineer</h3>
                <p>I love coding and want make my skills even better.</p>

                <button>
                    <a href="">Download CV <i class="fa-solid fa-download"></i></a>
                </button>
            </div>

            <div className="right flex">
                <div className='image-resize'>
                    <img src={profilePic} alt="profile-pic" />
                </div> 
            </div>
        </div>
    </section>
  )
}