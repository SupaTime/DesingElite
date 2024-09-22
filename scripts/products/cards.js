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


fetch('/db_connection_app')
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


