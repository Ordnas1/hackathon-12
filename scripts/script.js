let dropdown = document.querySelectorAll(".dropdown")

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
    if(!e.target.matches(".dropdown") && !e.target.matches(".dropdown > span")) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        
        for (let i = 0; i < dropdowns.length; i++) 
        {
            if (dropdowns[i].classList.contains("is-visible")) {
                dropdowns[i].classList.remove("is-visible")
            }
        }
    }
})


// Codigo acordion


let accordion = document.getElementById("accordion_main")
let acc_btns = Array.from(document.getElementsByClassName("accordion__btn"))
accordion.addEventListener("click", e => 
{
    if (e.target.matches(".accordion__btn")) 
    {

        if(e.target.matches(".accordion__btn--is-active")) 
        {
            e.target.classList.toggle("accordion__btn--is-active");
            return;
        }

        acc_btns.forEach(btn => 
            {
                btn.classList.remove("accordion__btn--is-active")
            });
        
        e.target.classList.toggle("accordion__btn--is-active")

    }
})

// modal

let modalbtn = document.getElementById("modal_btn")
let modal = document.getElementById("modal_box")
let modal_close = document.getElementById("modal_close")

modalbtn.addEventListener("click", () => 
{
    modal.style.display = "block"
})

modal.addEventListener("click",(e) =>
{
    if (e.target == modal) modal.style.display = "none"
})

modal_close.addEventListener("click",() =>
{
    modal.style.display = "none"
})