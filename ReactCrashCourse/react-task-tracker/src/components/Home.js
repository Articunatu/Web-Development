import {Link} from "react-router-dom";

export default function Experience() {
    return (
        <div>
            <nav>
                <ul className="my-list">
                    <li>Home</li>
                    <li><Link to="/web-development/expeience">Experience</Link></li>
                    <li><Link to="/web-development/portfolio">Portfolio</Link> </li>
                </ul>
            </nav>
            <main>
                <h2>My experience across studies and work</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores velit amet, cum quo eos eius dolorum, fugiat, odit nobis dolor explicabo. Magnam tenetur doloremque sequi, quod itaque sapiente. Eius, placeat!</p>
            </main>
        </div>
    )
}