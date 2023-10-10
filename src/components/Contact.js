import React from 'react'

export const Contact = () => {
  return (
    <section class="getin container" id="getin">
            <h2 class="title"><span>Get In Touch</span></h2>
            <div class="skills container flex">
                <div class="icon-skill flex">
                    <div class="icon-container flex">
                        <a href="#"><i class="fa-brands fa-linkedin" style={{color: "#216fd5"}}></i></a>
                    </div>
                </div>

                <div class="icon-skill  flex">
                    <div class="icon-container flex">
                        <a href="#"><i class="fa-brands fa-discord" style={{color: "#aca3ff"}}></i></a>
                    </div>
                </div>

                <div class="icon-skill  flex">
                    <div class="icon-container flex">
                        <a href="#"><i class="fa-brands fa-square-facebook" style={{color: "#216fd5"}}></i></a>
                    </div>
                </div>

                <div class="icon-skill  flex">
                    <div class="icon-container flex">
                        <a href="#"><i class="fa-brands fa-square-github"></i></a>
                    </div>
                </div>
            </div>
            <h2 class="title"><span>OR</span></h2>
            <div class="button-container flex">
                <a href="mailto:gthakuri656@gmail.com" class="flex">
                    gthakuri656@gmail.com
                    <i class="fa-brands fa-telegram"></i>
                </a>
            </div>

        </section>
  )
}
