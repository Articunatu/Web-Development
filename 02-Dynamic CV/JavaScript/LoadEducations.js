
// let educations = [
//     {
//         "name": "Molekylärbiologi - Göteborgs Universitet",
//         "timePeriod": "2014-2017"
//     },
//     {
//         "name": "Elektroingenjör - Chalmers",
//         "timePeriod": "2012-2014"
//     }
// ]

//         let output = `<h3>Utbildningar</h3>`;

//         for(let item of educations)
//         {
//             output += `
//                 <ul>
//                 <p style=font-weight: bold>${item.name}</p>
//                 <p style=font-size: small;>${item.timePeriod}</p>
//                 </ul>
//         `
//         }
//         document.querySelector(".educations").innerHTML = output
 async function load(){
    const respo = await fetch('/educations.json')
    const text = await respo.json();
    return text;
    // .then(data => console.log(data));
}

// console.log(await load())

async function test(){
    
    let x = await load();
   console.log(x)
           
}

test();

// let http = new XMLHttpRequest()

// http.open('get', 'educations.json', true)

// http.send()

// http.onload = function()
// {
//     if(this.readyState == 4 && this.status == 200)
//     {
//         let educations = JSON.parse(this.responseText)
//         let output = "";

//         for(let item of educations)
//         {
//             output += `
//             <h3>Utbildningar</h3>
//                 <ul>
//                 <li>${item.name}</li>
//                 <li>${item.timePeriod}</li>
//                 </ul>
//         `
//         }
//         document.querySelector(".educations").innerHTML = output
//     }
// }



// var myIn'it = { method: 'GET', 
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             mode: 'cors',
//             cache: 'default'};

//     let myRequest = new Request("/JSON/loadEducations.jason", myInit)

//     fetch(myRequest)
//     .then(function(resp){
//         return resp.json()
//     })
//     .then(function(data){
//         document.body.append(data.name)
//     })


// const jobs = [
//     {name: "PostNord", timePeriod: "2013-2020"},
//     {name: "Region Halland", timePeriod: "2020-nu"},
//     {name: "Lundby Sjukhus", timePeriod: "2017-2019"},
// ]

// const educations = [
//     {name: "Molekylärbiologi - Göteborgs Universitet",
//         timePeriod: "2014-2017"},
//     {name: "Elektroingenjör - Chalmers",
//         timePeriod: "2012-2014"},
// ]

// document.getElementById('button').addEventListener('click', laddaData);


// function loadData(){
//     const xml = new XMLHttpRequest();
//     xml.open('GET', 'data.txt', true)

//     xml.onload = function(){
//         if(this.status===200 && this.readyState=== 4){
//             console.log(this.responseText);
//         }
//     }
//     xml.send();


// let educations = JSON.parse('JSON/educations.json');
//             let output = '';
//             educations.forEach(function(education){
//                 output+=`
//                 <h3>Utbildningar</h3>
//                 <ul>
//                     <li>${education.name}</li>
//                     <li>${education.timePeriod}</li>
//                 </ul>
//                 `;
//             }); 
//             document.body.append(output)

// function loadEducations(){
//     const xml = new XMLHttpRequest();
//     xml.open('GET', 'JSON/educations.json', true)

//     xml.onload = function(){
//         if(this.status===200){
            
//         }
        
//     }
//     xml.send();
// }

// function loadJobs(){
//     const xml = new XMLHttpRequest();
//     xml.open('GET', 'JSON/jobs.json', true)

//     xml.onload = function(){
//         if(this.status===200){
//             const jobs = JSON.parse(this.responseText);
//             let output = '';
//             jobs.forEach(function(education){
//                 output+=`
//                 <h3>Arbeten</h3>
//                 <ul>
//                     <li>${jobs.name}</li>
//                     <li>${jobs.timePeriod}</li>
//                 </ul>
//                 `;
//             }); 
//             document.getElementById('education').innerHTML = output;
//         }
//     }
//     xml.send();
// }

// document.getElementById('button1').addEventListener('click', getApi);
// function getApi(){
//     fetch('https://api.github.com/users')
//     .then(function(res){
//     return res.json();
//     })
//     .then(function(data){
//     let output = '';
//     data.forEach(function(user) {
//         output += `<li>${user.login}</li>`;   
//     });
//     document.getElementById('output').innerHTML = output;
//     })
// }

// document.getElementsByClassName('button1').addEventListener('click', getApi);
// function getApi(){
//     fetch('https://github.com/Articunatu?tab=repositories')
//     .then(function(res){
//     return res.json();
//     })
//     .then(function(data){
//     let output = '';
//     data.forEach(function(user) {
//         output += `<li>${user.login}</li>`;   
//     });
//     document.getElementById('output').innerHTML = output;
//     })
