import * as React from "react";
import {Link} from "react-router-dom";
import { Code }  from '../JavaScript/Password'

export default function Home() {
    return (
        <div>
            <div class="Fullname">
                <h1>Christoffer Brandt</h1>
                <h3>- Biokemist och Molekylärbiolog</h3>
            </div>
            <nav>
                <ul className="Menu">
                    <li>Presentation</li>
                    <li><Link to="/web-development/expeience">Erfarenheter</Link></li>
                    <li><Link to="/web-development/portfolio">Portfolio</Link> </li>
                    <li><Link to="/web-development/contacts">Kontakter</Link> </li>
                </ul>
            </nav>

            <main>

            <div class = "Introduction_A">
                <h3>Vem jag är</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deserunt autem consequuntur minima beatae quaerat facilis deleniti sequi, facere laboriosam asperiores ut pariatur fugiat dolores? Eligendi amet error maiores dignissimos.</p>
            </div>

            <div class = "Introduction_B">
                <h3>Mina mål</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, saepe nobis earum assumenda asperiores recusandae? Nostrum quidem commodi, praesentium, optio ut quisquam porro, fuga earum atque ea temporibus laboriosam itaque
                <div className="SecretButton" onClick={BackgroundSwap}>?</div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut velit consequatur atque sit rem sed illum dolore voluptates. Praesentium possimus dignissimos autem officiis laborum cumque omnis doloribus quam deleniti!
                </p>
            </div>
            <a> <img src="src/Images/profil.png" alt="Profilbild"/> </a>
            </main>
        </div>
    )
}


function BackgroundSwap() {
    document.body.style.backgroundColor = "green"
}