import React from 'react';


const Header = () => (
    <section class="header">

        <div>
            <i className="bars fa-solid fa-bars"></i>
            <i className="bulb fa-solid fa-lightbulb"></i>
            <span className="logo">Edvi</span>
        </div>

        <span className="dropdown">
            <i className="fa-solid fa-location-dot"></i> <span>New Delhi</span> <i class="fa-solid fa-arrow-down"></i>
        </span>

    </section>
)

export default Header;