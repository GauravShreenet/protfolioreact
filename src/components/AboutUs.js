import React from 'react'
import aboutImage from '../assest/My project.png'

export const AboutUs = () => {
    return (
        <section className="about" id="about">
            <h2 className="title"><span>About Me</span></h2>
            <div className="container flex">
                <div className="myImg flex">
                    <div className="image-resize">
                        <img src={aboutImage} alt="nextPic" />
                    </div>
                </div>
                <div className="my-bio">
                    <h2>Gaurav Shreenet</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit libero laboriosam minima quod quos placeat quaerat nobis amet nostrum dolorem suscipit iusto, aperiam, molestias esse neque aliquid. Odit accusamus maiores, aspernatur, alias nulla impedit et harum ab, eaque cum perspiciatis.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloribus delectus itaque? Modi quaerat consequatur minus, quibusdam magnam corporis tempore praesentium et, impedit dolorem veniam perspiciatis eaque voluptatibus perferendis eveniet laboriosam animi atque dicta illum fugit commodi nemo rerum ex!</p>
                    <p>Sydeny, Australia</p>

                    <div className="tag">
                        Intrest
                    </div>
                    <div className="flex">
                        <span>Coding</span><span>Football</span><span>Movies</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
