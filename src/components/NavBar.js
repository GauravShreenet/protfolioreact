import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
        <div class="container flex header">
                <div class="flex logo">
                    <div>Gaurav</div>
                    <div class="line">Soft. Engineer</div>
                </div>

                <div class="menu">
                    <ul class="flex navigation">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/skills" activeStyle>Skills</Link></li>
                        <li><Link to="/project" activeStyle>Projects</Link></li>
                        <li><Link to="/aboutus" activeStyle>About</Link></li>
                        <li><Link to="/getin" activeStyle>Contact</Link></li>
                    </ul>
                </div>
            </div>
    </header>
  )
}
