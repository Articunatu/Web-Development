import * as React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

export default function Portfolio() {
  const [name, setName] = useState([]);
    useEffect((name)=>{
        fetch('https://api.github.com/users/articunatu/repos')
        .then(res => res.json())
        .then(data =>{
            // The actual descriptions attached to the repositories are all empty of text,
            // the ones below were added only to make the resume look more coherent
            setName((prevName)=>[...prevName,
                {
                    name: data[0].name,
                    description: "Fördjupning om hur framtidens genteknik kommer se ut",
                    html_url: data[0].html_url
                },
                {
                    name: data[1].name,
                    description: "Uppsats för examen av programmet Molekylärbiologi",
                    html_url: data[1].html_url
                },
                {
                    name: data[2].name,
                    description: "Genteknik",
                    html_url: data[2].html_url
                },
                {
                    name: data[3].name,
                    description: "Uppsats om virus och DNA",
                    html_url: data[3].html_url
                }
            ]);
        });
    },[]);
    
    return(
    <div className="App">
            <div class="Fullname">
                <h1>Christoffer Brandt</h1>
                <h3>- Biokemist och Molekylärbiolog</h3>
            </div>

        <nav>
            <ul className="Menu">
                <li><Link to="/web-development/home">Presentation</Link> </li>
                <li><Link to="/web-development/expeience">Erfarenheter</Link></li>
                <li>Portfolio</li>
                <li><Link to="/web-development/contacts">Kontakter</Link> </li>
            </ul>
        </nav>

        <main>
            <h2>Uppsatser och fördjupningar</h2>
            {name.map((names)=>(
                <>
                <h3>{names.name}</h3>
                <p>{names.description}</p>
                <div className="url">
                    <p><a href={names.html_url}>{names.html_url}</a></p>
                </div>
                
                <br />
                </>
            ))
            }
        </main>
        <br />
        <a> <img src="src/Images/molekyl.jfif" alt="Molekyl"/> </a>
    </div>
    )
}