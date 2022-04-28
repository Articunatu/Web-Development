let section = document.querySelector(".myskills")
let spans = document.querySelectorAll(".progress .skill span")


window.onscroll = function(){ 
    if(window.scrollY >= section + 600)
    {
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })
        console.log("Mittpunkten")
    }
    // spans.forEach((span) => {
    //     span.style.width = span.dataset.width
    // })
}