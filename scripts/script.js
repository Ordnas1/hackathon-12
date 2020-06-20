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