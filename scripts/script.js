dropdown = document.querySelectorAll(".dropdown")

dropdown.forEach(
    elem => elem.addEventListener("click", e => 
    {
        if(e.target.matches("li")) 
        {
            e.target.querySelector(".dropdown-content").classList.toggle("is-visible")
        } else if (e.target.matches("span")) 
        {
            e.target.nextElementSibling.classList.toggle("is-visible")
        }
    })
)

//cerrar todo dropdown

window.addEventListener("click", e => 
{
    if(!e.target.matches(".dropdown")) {
        
        let dropdowns = document.getElementsByClassName("dropdown-content");
        
        for (let i = 0; i < dropdowns.length; i++) 
        {
            if (dropdowns[i].classList.contains("is-visible")) {
                dropdowns[i].classList.remove("is-visible")
            }
        }
    }
})