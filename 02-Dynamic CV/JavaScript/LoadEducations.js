
async function FetchEducations(){
    const respo = await fetch('JSON/educations.json')
    const educations = await respo.json();
    return educations;
}

async function PrintEducations(){
    let educations = await FetchEducations();
    let output = `<h3>Utbildningar</h3>`
    for(let item of educations)
    {
        output += `
            <ul>
                <p>${item.name}
                <br/>${item.timePeriod}</p>
            </ul>
            `
    }
    document.querySelector(".educations").innerHTML = output
}

PrintEducations();