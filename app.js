const URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";

const containerCard = document.getElementById("containerCard");

window.addEventListener("DOMContentLoaded",Api);

document.addEventListener('keyup', e=>{

    if (e.target.matches("#toWrite")) {
        
        document.querySelectorAll(".card").forEach(cards =>{

            cards.textContent.includes(e.target.value)
            ?cards.classList.remove("filtro")
            :cards.classList.add("filtro")
        })
    }

});

function Api(){
    fetch(URL)
    .then (Response => Response.json())
    .then (data=>{
        data.drinks.forEach(result => {
        const div = document.createElement("div")
        div.classList.add("card")

        const img = document.createElement("img")
        img.setAttribute("src",result["strDrinkThumb"]);
        img.classList.add("img")

        const name = document.createElement("p")
        name.textContent = result["strDrink"]
        name.classList.add("name")

        div.appendChild(img)
        div.appendChild(name);
        containerCard.appendChild(div);
        })

    })
}


