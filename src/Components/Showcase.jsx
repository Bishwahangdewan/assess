import React from 'react';

const Showcase = () => (
    <div className="showcase">
        <h1 className="textPrimary">
            <span className="textPrimary_subHeading">Study Online from</span><br />
            <span className="testPrimary_heading">Best Quality Teachers</span><br />
        </h1>
        <form className="showcaseForm">
            <div className="selectClassInput">
                <input type="text" placeholder="Select Class" />
            </div>
            <div className="selectClassInput">
                <input type="text" placeholder="Select Subject" />
            </div>
            <div className="selectClassInput">
                <input type="button" className="button buttonPrimary" value="Search For Teacher" />
            </div>

        </form>
        <p class="paragraph">
            Choose from <span className="text-secondary">500+ Certified</span> and highly-rated teachers online
        </p>


        <div class="services">
            <div class="service">
                <i class="fa-solid fa-user"></i><br />
                <span>Experienced Mentors</span>
            </div>
            <div class="service">
                <i class="fa-solid fa-medal"></i><br />
                <span>Quality Classes</span>
            </div>
            <div class="service">
                <i class="fa-solid fa-hand-holding-dollar"></i><br />
                <span>Affordable Prices</span>
            </div>
        </div>
    </div>
)


export default Showcase;