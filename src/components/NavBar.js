import React from 'react'

export const NavBar = () => {
  return (
    <header>
        <div class="container flex header">
                <div class="flex logo">
                    <div>Gaurav</div>
                    <div class="line">Soft. Engineer</div>
                </div>

                <div class="menu">
                  <input type="checkbox" id='menu-toggle' style={{display: "none"}}/>
                  <label for="menu-toggle" className='menu-icon'><strong>&#9776;</strong></label>
                    <ul class="flex navigation">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#id">About</a></li>
                        <li><a href="#getin">Contact</a></li>
                    </ul>
                </div>
            </div>
    </header>
  )
}
