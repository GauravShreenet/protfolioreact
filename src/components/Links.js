import React from 'react'

export const Links = () => {
  return (
    <section className="links">
            <div className="alllinks container"><div className="links-left">
                <h2><span>LINKS</span></h2>
                <ul className="links-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#getin">Contact</a></li>
                </ul>
                
            </div>
            <div className="links-right">
                <h2><span>Social Links</span></h2>
                <ul className="links-list">
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Discord</a></li>
                </ul>
            </div>
        </div>
            
            <div className="scroll-up">
                <a href="#home" className="button"><i className="fa-solid fa-angle-up"></i></a>
            </div>
        </section>
  )
}
