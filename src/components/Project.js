import React from 'react'
import firstProject from '../assest/project.PNG'
import secondProject from '../assest/Booking.PNG'
import thirdProject from '../assest/project 2.PNG'
import forthProject from '../assest/project.PNG'


export const Project = () => {
  return (
    <section className="project container" id="projects">
            <h2 className="title"><span>My Recent Work</span></h2>
            <div className="grid project-container">
                <div className="project-card">
                    <div className="top">
                        <img src={firstProject} alt="portfolio" />
                    </div>
                    <div className="bottom container">
                        <div>
                            <a href="https://github.com/GauravShreenet/portfolio"><i className="fa-brands fa-square-github"></i></a>
                            <a href="#"><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Personal portfolio web site</h3>
                        <p>April 2023</p>
                        
                        
                    </div>
                </div>

                <div className="project-card">
                    <div className="top">
                        <img src={secondProject} alt="portfolio" />
                    </div>
                    <div className="bottom container">
                        <div>
                            <a href="https://github.com/GauravShreenet/barberbooking"><i className="fa-brands fa-square-github"></i></a>
                            <a href="https://gauravshreenet.github.io/barberbooking/"><i className="fa-brands fa-chrome"></i></a>    
                        </div>
                        <h3>Personal portfolio web site</h3>
                        <p>April 2023</p>
                        
                        </div>
                </div>

                <div className="project-card">
                    <div className="top">
                        <img src={thirdProject} alt="portfolio" />
                    </div>
                    <div className="bottom container">
                        <div>
                            <a href="https://github.com/GauravShreenet/portfolio"><i className="fa-brands fa-square-github"></i></a>
                            <a href="#"><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Personal portfolio web site</h3>
                        <p>April 2023</p>
                        
                        
                    </div>
                </div>

                <div className="project-card">
                    <div className="top">
                        <img src={forthProject} alt="portfolio" />
                    </div>
                    <div className="bottom container">
                        <div>
                            <a href="https://github.com/GauravShreenet/portfolio"><i className="fa-brands fa-square-github"></i></a>
                            <a href="#"><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Personal portfolio web site</h3>
                        <p>April 2023</p>
                        
                        
                    </div>
                </div>
            </div>
        </section>
  )
}
