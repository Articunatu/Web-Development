import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import * as React from "react";

export default function Portfolio()
{
    const [name, setName] = useState([]);
    useEffect((name)=>{
        fetch('https://api.github.com/users/articunatu/repos')
        .then(res => res.json())
        .then(data =>{
            setName((prevName)=>[...prevName,
                {
                    name: data[0].name,
                    description: data[0].description,
                    html_url: data[0].url
                },
                {
                    name: data[1].name,
                    description: data[1].description,
                    html_url: data[1].url
                },
                {
                    name: data[2].name,
                    description: data[2].description,
                    html_url: data[2].url
                }
            ]);
        });
    },[]);
    <div className="App">
        <nav>
            <ul className="my-list">
                <li><Link to="/Web-Development/">Home</Link> </li>
                <li>Experience</li>
                <li><Link to="//Web-Development/portfolio">Portfolio</Link> </li>
            </ul>
        </nav>
        <main>
            <h2>GitHub projects</h2>
            {name.map((names)=>(
                <>
                <h3>{names.name}</h3>
                <p>{names.description}</p>
                <p><a href={names.html_url}>{names.html_url}</a></p>
                </>
            ))
            }
        </main>
    </div>
};  