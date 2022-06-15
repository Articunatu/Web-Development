import * as React from "react";
import {Link} from "react-router-dom";

export default function Contacts(){
    return(
        <div>
            <div class="Fullname">
                <h1>Christoffer Brandt</h1>
                <h3>- Biokemist och Molekylärbiolog</h3>
            </div>
            <nav>
                <ul className="Menu">
                    <li><Link to="/web-development/">Presentation</Link> </li>
                    <li><Link to="/web-development/expeience">Erfarenheter</Link></li>
                    <li><Link to="/web-development/portfolio">Portfolio</Link> </li>
                    <li>Kontakter</li>
                </ul>
            </nav>

            <main>
            <table class="Contact">
            <tr>
                <th>Email</th>
                <th>Telefonnummer</th>
                <th>Linkedin</th>
                <th>Adress</th>

                </tr>
                <tr>
                <td>chrbra@gmail.com</td>
                <td>(+46)73 3XX XX XX</td>
                <td>linkedin.com/?????????</td>
                <td>Hemliga vägen 56,  120 34 HELSINGBORG</td>
                </tr>
                </table>
                <br></br>
            </main>
            <br />
            <a> <img src="src/Images/telefon.jfif" alt="Telefon"/> </a>
        </div>
        
    )
}