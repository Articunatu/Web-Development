
async function FetchJobs(){
    const respo = await fetch('JSON/jobs.json')
    const jobs = await respo.json();
    return jobs;
}

async function PrintJobs(){
    let educations = await FetchJobs();
    let output = `<h3>Arbeten</h3>`
    for(let item of educations)
    {
        output += `
            <ul>
                <p style=font-weight: bold>${item.name}</p>
                <p style=font-size: small>${item.timePeriod}</p>
            </ul>
            `
    }
    document.querySelector(".jobs").innerHTML = output
}

PrintJobs()