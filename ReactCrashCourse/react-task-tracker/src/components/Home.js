import {Link} from "react-router-dom";
import * as React from "react";

export default function Experience() {
    return (
        <div>
            <nav>
                <ul className="my-list">
                    <li>Home</li>
                    <li><Link to="/Web-Development/expeience">Experience</Link></li>
                    <li><Link to="/Web-Development/portfolio">Portfolio</Link> </li>
                </ul>
            </nav>
            <main>
                <h2>My experience across studies and work</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores velit amet, cum quo eos eius dolorum, fugiat, odit nobis dolor explicabo. Magnam tenetur doloremque sequi, quod itaque sapiente. Eius, placeat!</p>
            </main>
        </div>
    )
}