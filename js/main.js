const quoteSpan = document.querySelector(".quote");
const quoteButton = document.querySelector(".getQuote");
const image = document.querySelector(".monImage");
const categoriesDiv = document.querySelector(".categories");

quoteButton.addEventListener("click", () => {

    console.log('coucou')

faisLeFetchAMaPlaceJaiLaFLemme()
    console.log("autre coucou")

    fetch('https://api.chucknorris.io/jokes/categories')
        .then(reponseEnJson => reponseEnJson.json())
        .then(reponseDeserialisee => {

            reponseDeserialisee.forEach(element => {
                console.log(element)
            })
        })

})


fetch('https://api.chucknorris.io/jokes/categories')
    .then(reponseEnJson => reponseEnJson.json())
    .then((reponseDeserialisee) => {
        reponseDeserialisee.forEach(category => {
            let newButton = document.createElement("button");
            newButton.textContent = category;
            newButton.id = category
            categoriesDiv.appendChild(newButton);
            newButton.addEventListener("click", () => {
                    faisLeFetchAMaPlaceJaiLaFLemme(category);
            })
        })


})


function faisLeFetchAMaPlaceJaiLaFLemme(category)
{
    if(!category)
    {
        category = ""
    }else {
        category  = "?category"+category
    }

    fetch("https://api.chucknorris.io/jokes/random"+category)
        .then(reponseEnJson => reponseEnJson.json())
        .then((reponseDeserialisee) => {
            console.log(reponseDeserialisee.value)
            quoteSpan.innerHTML = reponseDeserialisee.value
            image.src = reponseDeserialisee.icon_url
        })
}