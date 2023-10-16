import React, { useState } from 'react'

export const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // }

  return (
    <header>
        <div class="container flex header">
                <div class="flex logo">
                    <div>Gaurav</div>
                    <div class="line">Soft. Engineer</div>
                </div>

                <div class="menu">
                  
                  <button onClick={() => setIsOpen(true)} className='menu-icon'>
                    <strong>&#9776;</strong></button>
                    <ul className={`flex navigation ${isOpen ? 'active' : ''}`}>
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
