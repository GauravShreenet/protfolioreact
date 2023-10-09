import React from 'react'

export const NavBar = () => {
  return (
    <header>
        <nav className="container flex header">
            <div className="flex nav-left">
                <h1>Gaurav</h1>
                <div className="line">Soft. Engineer</div>
            </div>

            <div className="menu">
                <ul className="flex navigation">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Project</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
