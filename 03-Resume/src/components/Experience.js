import * as React from "react";
import {Link} from "react-router-dom";
import Educations from "../JSON/educations.json";
import Jobs from "../JSON/jobs.json";

export default function Experience() 
{
    return ( 
        <div className="App">
            <div class="Fullname">
                <h1>Christoffer Brandt</h1>
                <h3>- Biokemist och Molekylärbiolog</h3>
            </div>

            <nav>
                <ul className="Menu">
                    <li ><Link to="/web-development/home">Presentation</Link> </li>
                    <li>Erfarenheter</li>
                    <li><Link to="/web-development/portfolio">Portfolio</Link> </li>
                    <li><Link to="/web-development/contacts">Kontakter</Link> </li>
                </ul>
            </nav>

            <main>
                <h2>Arbeten</h2>
                {
                    Jobs.map((Job) => {
                        return (
                            <div>
                                <h3>{Job.namn}</h3>
                                <p>{Job.tid}</p>
                            </div>
                        );
                    })
                }
                <br />
                <h2>Utbildning</h2>
                {
                    Educations.map((Education) => {
                        return (
                            <div>
                                <h3>{Education.namn}</h3>
                                <p>{Education.tid}</p>
                            </div>
                        );
                    })
                }
            
            </main>
            <br />
            <a> <img src="src/Images/lundby.jfif" alt="Sjukhus"/> </a>
        </div>
    );
}