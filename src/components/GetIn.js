import React from 'react'

export const GetIn = () => {
  return (
    <section className="getin container" id="contact">
            <h2 className="title"><span>Get In Touch</span></h2>
            <div className="skills-getin container flex">
                <div className="icon-skill flex">
                    <div className="icon-container flex">
                        <a href="#"><i className="fa-brands fa-linkedin" style={{color: "#216fd5"}}></i></a>
                    </div>
                </div>
    
                <div className="icon-skill  flex">
                    <div className="icon-container flex">
                        <a href="#"><i className="fa-brands fa-discord" style={{color: "#aca3ff"}}></i></a>
                    </div>
                </div>
    
                <div className="icon-skill  flex">
                    <div className="icon-container flex">
                        <a href="#"><i className="fa-brands fa-square-facebook" style={{color: "#216fd5"}}></i></a>
                    </div>
                </div>
    
                <div className="icon-skill  flex">
                    <div className="icon-container flex">
                        <a href="#"><i className="fa-brands fa-square-github github"></i></a>
                    </div>
                </div>
            </div>
            <h2 className="title"><span>OR</span></h2>
            <div className="button-container flex">
                <a href="mailto:gthakuri656@gmail.com" className="flex">
                    gthakuri656@gmail.com
                    <i className="fa-brands fa-telegram"></i>
                </a>
            </div>
            
        </section>
  )
}
