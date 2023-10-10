import React from 'react'
import profilePic from "../assest/My project.png"

export const Hero = () => {
  return (
    <section class="container hero-section" id="home">
            <div class="grid hero">
                <div class="left flex">
                    <div>Hi i'm
                        <span class="name"> Gaurav Shreenet
                        </span>
                        <div class="tag">Soft. Engineer</div>
                        <p>I love coding and teach other what I learn.</p>

                        <div>
                            <a href="" download=""></a>
                            <button>Download CV <i class="fa-solid fa-download"></i></button>
                        </div>
                    </div>
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
