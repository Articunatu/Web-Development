// document.getElementById('button1').addEventListener('click', laddaCustomer);
// document.getElementById('button2').addEventListener('click', laddaCustomers);


// function laddaCustomer(){
//     const xml = new XMLHttpRequest();
//     xml.open('GET', 'customer.json', true)

//     xml.onload = function(){
//         if(this.status===200){
//             const customer = JSON.parse(this.responseText);
//         const output=`
//         <ul>
//             <li>Id: ${customer.id}</li>
//             <li>Name: ${customer.name}</li>
//             <li>Company: ${customer.company}</li>
//         </ul>
//         `;
//             document.getElementById('customer').innerHTML = output;
//         }
//     }
//     xml.send();
// }

// function laddaCustomers(){
//     const xml = new XMLHttpRequest();
//     xml.open('GET', 'customers.json', true)

//     xml.onload = function(){
//         if(this.status===200){
//             const customers = JSON.parse(this.responseText);
//             let output = '';
//             customers.forEach(function(customer){
//                 output+=`
//                 <ul>
//                     <li>Id: ${customer.id}</li>
//                     <li>Name: ${customer.name}</li>
//                     <li>Company: ${customer.company}</li>
//                     <li>Start date: ${customer.startdatum}</li>
//                 </ul>
//                 `;
//             });
       
//             document.getElementById('customers').innerHTML = output;
//         }
//     }
//     xml.send();
// }

// async function printJSON() {
//     const response = await fetch("customers.json");
//     const json = await response.json();
//     console.log(json);
// }

