import React from 'react'

export const Indo = () => {
    return (
        <section className='flex container banner'>
            <div className="info-content flex">
                <div className="icon-container flex">
                    <i className="fa-solid fa-award"></i>
                </div>
                <div>
                    <strong>IT</strong>
                    <p>Graduate</p>
                </div>
            </div>
            <div className="info-divider"></div>

            <div className="info-content flex">
                <div className="icon-container flex">
                    <i className="fa-solid fa-award"></i>
                </div>
                <div>
                    <strong>5 + Project</strong>
                    <p>Completed</p>
                </div>
            </div>
            {/* <!-- divider --> */}
            <div className="info-divider"></div>

            <div class="info-content flex">
                <div class="icon-container flex">
                    <i class="fa-solid fa-award"></i>
                </div>
                <div>
                    <strong>1 Year</strong>
                    <p>Experience</p>
                </div>
            </div>


        </section>
    )
}
