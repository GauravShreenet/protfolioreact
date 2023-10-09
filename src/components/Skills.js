import React from 'react'

export const Skills = () => {
  return (
    <section className="skills container flex" id="skills">
            <div className="icon-skill flex">
                <div className="icon-container flex">
                    <i className="fa-brands fa-html5" style={{color: "#ff0000"}}></i>
                </div>
                <div>
                    <span>HTML</span>
                </div>
            </div>

            <div className="icon-skill  flex">
                <div className="icon-container flex">
                    <i className="fa-brands fa-css3-alt" style={{color: "#006eff"}}></i>
                </div>
                <div>
                    <span>CSS</span>
                </div>
            </div>

            <div className="icon-skill  flex">
                <div className="icon-container flex">
                    <i className="fa-brands fa-js" style={{color: "#fff700"}}></i>
                </div>
                <div>
                    <span>JavaScript</span>
                </div>
            </div>

            <div className="icon-skill  flex">
                <div className="icon-container flex">
                    <i className="fa-brands fa-react" style={{color: "#00fbef"}}></i>
                </div>
                <div>
                    <span>React</span>
                </div>
            </div>

            <div className="icon-skill  flex">
                <div className="icon-container flex">
                    <i className="fa-brands fa-square-github"></i>
                </div>
                <div>
                    <span>GitHub</span>
                </div>
            </div>
        </section>
  )
}
