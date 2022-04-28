

var myInit = { method: 'GET', 
               headers: {
                   'Content-Type': 'application/json'
               },
            mode: 'cors',
            cache: 'default'};

    let myRequest = new Request("/JSON/loadEducations.jason", myInit)

    fetch(myRequest)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        document.body.append(data.name)
    })


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
