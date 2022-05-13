import {Link} from "react-router-dom";
import * as React from "react";
import {useState, useEffect} from "react";

export default function Experience() 
{
    const [data, setData] = useState([]);
    const getData=()=>{
        fetch('jobs.json', 
        {
            headers: {
                'Content-type': './application/json',
                'Accept': 'application/json'
            }
        })
        .then(function(response){
            return response.json
        })
        .then(function(myjson){
            setData(myjson)
        });
    }
    useEffect(()=>{
        getData();
    },[])

    const [data2, setData2] = useState([]);
    const getData2=()=>{
        fetch('educations.jobs', 
        {
            headers: {
                'Content-type': './application/json',
                'Accept': 'application/json'
            }
        })
        .then(function(response){
            return response.json
        })
        .then(function(myjson){
            setData2(myjson)
        });
    }
    useEffect(()=>{
        getData2();
    },[]);
    
    return ( 
        <div className="App">
            <nav>
                <ul className="my-list">
                    <li><Link to="//Web-Development/">Home</Link> </li>
                    <li>Experience</li>
                    <li><Link to="/Web-Development/portfolio">Portfolio</Link> </li>
                </ul>
            </nav>
            <main>
                <h2>Studier</h2>
                {
                    data && data.length>0 && data.map((item)=>
                    <div>
                        <h3>{item.name}</h3>
                        <ul>
                            <li>{item.timePeriod}</li>
                        </ul>
                    </div>)
                }
                <h2>Arbeten</h2>
                {
                    data2 && data2.length>0 && data2.map((item)=>
                    <div>
                        <h3>{item.name}</h3>
                        <ul>
                            <li>{item.timePeriod}</li>
                        </ul>
                    </div>)
                }
            </main>
        </div>
    );
}