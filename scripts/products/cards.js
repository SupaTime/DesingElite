var container = document.querySelectorAll("#card-big-container");
var allCardContainerBig = [...container];
var container = document.querySelectorAll("#card-2-container");
var allCardContainer2 = [...container];
var container = document.querySelectorAll("#card-slide-show-container");
var allCardContainerSlideShow = [...container];

let alreadyUsedProduct = false;
let arrayOfUsedProducts = [];

let cardContainer = document.getElementById("card-container");
let cardContainer2 = document.getElementById("card-container2");


if (cardContainer) {
    for (let i = 0; i < 5; i++) {
        let outerDiv = document.createElement("div");
        outerDiv.className = "d-flex flex-row flex-nowrap";
        
        cardContainer.appendChild(outerDiv);
    
        for (let j = 0; j < 3; j++) {
            
            let innerDiv = document.createElement("div");
            
            // Set inner HTML to the complex structure
            innerDiv.innerHTML = `
                <div class="card m-2" data-id="${j + 1}">
                    <div class="big-card-anim overflow-hidden">
                        <img src="images/black-hoodie.png" class="card-img-top bg-white" alt="" draggable="false">
                    </div>
                    
                    <div class="card-body px-0 pt-2">
                        <p>Product Name</p>
                        <h4 class="my-1">50 $</h4>
                    </div>
                </div>
            `;
            
            // Append the inner div to the outer div
            outerDiv.appendChild(innerDiv);
        }
    }
    
} else if (cardContainer2) {
    for (let i = 0; i < 3; i++) {
        let outerDiv = document.createElement("div");
        outerDiv.className = "d-flex flex-row flex-nowrap overflow-visible";
        
        cardContainer2.appendChild(outerDiv);
    
        for (let j = 0; j < 10; j++) {
            
            let innerDiv = document.createElement("div");
            
            // Set inner HTML to the complex structure
            innerDiv.innerHTML = `
                <div class="card m-2" data-id="${j + 1}">
                    <div class="big-card-anim overflow-hidden">
                        <img src="images/black-hoodie.png" class="card-img-top bg-white" alt="" draggable="false">
                    </div>
                    
                    <div class="card-body px-0 pt-2">
                        <p>Product Name</p>
                        <h4 class="my-1">50 $</h4>
                    </div>
                </div>
            `;
            
            // Append the inner div to the outer div
            outerDiv.appendChild(innerDiv);
        }
    }
}


fetch('https://xn--designlite-g7a.ca/api.php')
.then(response => response.json()) // Parse the JSON from the response
.then(data => {
    // Display data on the page
    //const container = document.getElementById('data-container');
    
    // Iterate over the data and create HTML content
    data.forEach(item => {
        console.log(item);
        /*
        const div = document.createElement('div');
        div.textContent = `ID: ${item.id}, Name: ${item.name}`; // Customize based on your table structure
        container.appendChild(div);
        */
    });
})
.catch(error => console.error('Error fetching data:', error));


/* 
function getRecipesFromAPI (url) {
    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let products = json.products
        console.log(products)
        allCardContainerBig.forEach(cardContainer => {
            
            let rndProduct = getRndProducts();

            cardContainer.innerHTML = `
            <div class="card" data-id="` + products[rndProduct].id + `">
                <div class="big-card-anim overflow-hidden rounded-5">
                    <button class="white-btn-border small-btn round-btn position-absolute start-0 top-0 m-sm-3 m-1"><i class="fa-regular fa-bookmark"></i></button>
                    <button class="smaller-btn position-absolute end-0 top-0 m-sm-3 m-1">` + products[rndProduct].category + `</button>
                    <img src="` + products[rndProduct].images[0] + `" class="card-img-top bg-white" alt="" draggable="false">
                </div>
                
                <div class="card-body px-0 pt-2">
                    <p>` + "products[rndProduct].prepTimeMinutes" + ` min</p>
                    <h4 class="my-1">` + products[rndProduct].title + `</h5>
                    <span><i class="fa-regular fa-star mt-1"></i>` + products[rndProduct].rating + `</span>
                </div>
            </div>
            `;
        });


        allCardContainer2.forEach(cardContainer => {
            
            let rndProduct = getRndProducts();

            let rndProduct2 = getRndProducts();

            cardContainer.innerHTML = `
            <div class="card mb-2 me-sm-4 me-2 h-100" data-id="` + products[rndProduct].id + `">
                <div class="card-anim overflow-hidden">
                    <button class="white-btn-border small-btn round-btn green-btn blue-btn-hover position-absolute start-0 top-0 m-sm-3 m-1"><i class="fa-regular fa-bookmark"></i></button>
                    <button class="smaller-btn position-absolute end-0 top-0 m-sm-3 m-1">` + products[rndProduct].category + `</button>
                    <img src="` + products[rndProduct].images[0] + `" class="border-none card-img-top bg-white" alt="" draggable="false">
                </div>
                <div class="card-body px-0 pt-1">
                    <p>` + products[rndProduct].prepTimeMinutes + ` min</p>
                    <h4 class="my-1">` + products[rndProduct].title + `</h5>
                    <span><i class="fa-regular fa-star mt-1"></i>` + products[rndProduct].rating + `</span>
                </div>
            </div>
            <div class="card mb-2 ms-sm-4 ms-2 h-100" data-id="` + products[rndProduct2].id + `">
                <div class="card-anim overflow-hidden">
                    <button class="white-btn-border small-btn round-btn green-btn blue-btn-hover position-absolute start-0 top-0 m-sm-3 m-1"><i class="fa-regular fa-bookmark"></i></button>
                    <button class="smaller-btn position-absolute end-0 top-0 m-sm-3 m-1">` + products[rndProduct2].category + `</button>
                    <img src="` + products[rndProduct2].images[0] + `" class="border-none card-img-top bg-white" alt="" draggable="false">
                </div>
                <div class="card-body px-0 pt-1">
                    <p>` + products[rndProduct2].prepTimeMinutes + ` min</p>
                    <h4 class="my-1">` + products[rndProduct2].title + `</h5>
                    <span><i class="fa-regular fa-star mt-1"></i>` + products[rndProduct2].rating + `</span>
                </div>
            </div>
            `;
        });


        allCardContainerSlideShow.forEach(cardContainer => {
            
            let rndProduct = getRndProducts();

            let rndProduct2 = getRndProducts();

            let rndProduct3 = getRndProducts();

            let rndProduct4 = getRndProducts();

            let rndProduct5 = getRndProducts();

            cardContainer.innerHTML = `
            <div class="d-flex flex-row gap-3">
                <div class="card mb-4 rounded h-100" style="width: 18rem;" data-id="` + products[rndProduct].id + `">
                    <div class="card-anim overflow-hidden">
                        <img src="` + products[rndProduct].images[0] + `" class="card-img-top bg-white" alt="" draggable="false">
                    </div>
                    <div class="card-body px-0 pt-2">
                        <h4 style="color: #fff;">TRENDING NOW</h4>
                        <h2 style="color: #fff;" class="my-2">POPULAR PICK</h2>
                        <h4 style="color: #fff;">` + products[rndProduct].title + `</h4>
                    </div>
                </div>
                <div class="card mb-4 rounded h-100" style="width: 18rem;" data-id="` + products[rndProduct2].id + `">
                    <div class="card-anim overflow-hidden">
                        <img src="` + products[rndProduct2].images[0] + `" class="card-img-top bg-white" alt="" draggable="false">
                    </div>
                    <div class="card-body px-0 pt-2">
                        <h4 style="color: #fff;">TRENDING NOW</h4>
                        <h2 style="color: #fff;" class="my-2">HOT THIS WEEK</h2>
                        <h4 style="color: #fff;">` + products[rndProduct2].title + `</h4>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row gap-3">
                <div class="card mb-4 rounded h-100" style="width: 18rem;" data-id="` + products[rndProduct3].id + `">
                    <div class="card-anim overflow-hidden">
                        <img src="` + products[rndProduct3].images[0] + `" class="card-img-top bg-white" alt="" draggable="false">
                    </div>
                    <div class="card-body px-0 pt-2">
                        <h4 style="color: #fff;">SEASONAL FIRE</h4>
                        <h2 style="color: #fff;" class="my-2">IT'S THAT TIME</h2>
                        <h4 style="color: #fff;">` + products[rndProduct3].title + `</h4>
                    </div>
                </div>
                <div class="card mb-4 rounded h-100" style="width: 18rem;" data-id="` + products[rndProduct4].id + `">
                    <div class="card-anim overflow-hidden">
                        <img src="` + products[rndProduct4].images[0] + `" class="card-img-top bg-white" alt="" draggable="false">
                    </div>
                    <div class="card-body px-0 pt-2">
                        <h4 style="color: #fff;">SEASONAL FIRE</h4>
                        <h2 style="color: #fff;" class="my-2">TASTY & TIMELY</h2>
                        <h4 style="color: #fff;">` + products[rndProduct4].title + `</h4>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="card mb-4 rounded h-100" style="width: 18rem;" data-id="` + products[rndProduct5].id + `">
                    <div class="card-anim overflow-hidden">
                        <img src="` + products[rndProduct5].images[0] + `" class="card-img-top bg-white" alt="" draggable="false">
                    </div>
                    <div class="card-body px-0 pt-2">
                        <h4 style="color: #fff;">COOKER-FRIENDLY</h4>
                        <h2 style="color: #fff;" class="my-2">CRAVABLE</h2>
                        <h4 style="color: #fff;">` + products[rndProduct5].title + `</h4>
                    </div>
                </div>
            </div>
            `;
        });     

    })
    .finally(() => {
        var buttonRecipes = document.getElementsByClassName("card");

        // Pour chaque bouton "View Recipe", ajoute un écouteur d'événements pour rediriger l'utilisateur vers la page de détail de la recette

        // ici, le forEach n'est pas utilisé car buttonRecipes est une collection HTML, et ne contient pas de méthode forEach, 
        // nous allons donc utiliser une boucle for traditionnel
        for (let i = 0; i < buttonRecipes.length; i++) {
            if (buttonRecipes[i].tagName.toLowerCase != "button") {
                buttonRecipes[i].addEventListener("click", function(){
                    var card = buttonRecipes[i].closest(".card");
                    var id = card.getAttribute("data-id");

                    window.location.href = "detail.html?id=" + id;
                })
            }
        }
    })
}


getRecipesFromAPI('https://dummyjson.com/products?limit=0');


function getRndProducts() {
    let rndProducts;
    do {
        rndProducts = Math.floor(Math.random() * 194);
    } while (arrayOfUsedProducts.includes(rndProducts));
    arrayOfUsedProducts.push(rndProducts);
    return rndProducts;
}

*/