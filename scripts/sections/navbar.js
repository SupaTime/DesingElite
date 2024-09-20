
let navSection = document.getElementById("nav");

navSection.innerHTML = `
    <nav class="nav-extention d-flex align-items-center">
        <div class="container-xl d-flex flex-row justify-content-end">
            <a href="" class="fw-bold">FAQ</a>
            <a href="" class="fw-bold">Return & Exchanges</a>
            <a href="" class="fw-bold">Materials</a>
            <a href="" class="fw-bold">Inspiration</a>
        </div>
    </nav>

    <nav id="navbar" class="navbar"> 
        <div class="container-xl d-flex justify-content-center position-relative ps-3 pe-3" style="height: 75px;">
            <button class="d-block d-xl-none border-0 p-3 shadow-none bg-transparent" style="font-size: 1.15rem;" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="d-none d-xl-flex flex-row flex-shrink-0 align-items-center me-auto">
                
                <div class="dropdown">
                    <a href="search.html" class="link-anim">Men</a>
                    
                </div>

                <div class="dropdown">
                    <a href="" class="link-anim">Women</a>
                    
                </div>
                
                <div class="dropdown">
                    <a href="" class="link-anim">Rewards</a>
                    
                </div>
                
                <div class="dropdown">
                    <a href="" class="link-anim">Inspiration</a>
                    
                </div>
            </div>

            <a href="/" class="d-flex flex-shrink-0 logo py-2 position-absolute"><img src="images/logos/logo.jpg" alt="" style="width: 75px;" draggable="false"></a>

            <div class="d-flex flex-row gap-3 ms-auto align-items-center">

                <form class="d-flex position-relative" role="search">
                    <button class="search-btn position-absolute rounded-5 border-0 bg-transparent" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    <input class="search-bar rounded-pill px-4 p-2" type="search" placeholder="Search" aria-label="Search">
                </form>

                <button class="d-flex border-0 p-1 shadow-none bg-transparent align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#shopping-cart" aria-controls="offcanvasExample">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>

                <div id="shopping-cart" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="offcanvasExampleLabel">
                    <div id="cart-header" class="offcanvas-header py-2 d-flex flex-row justify-content-center align-items-center">
                        <h5 id="label" class="offcanvas-title d-flex align-items-center mb-1 p-0">Shopping Cart</h5>
                        <button class="bg-transparent border-0 ms-auto me-2 p-3 d-flex align-items-center" type="button" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x" style="width: 16px;"></i></button>
                    </div>

                    <div id="cart-body" class="offcanvas-body">
                        <p class="less-important">No Items In Cart</p>
                    </div>

                    <div id="cart-subtotal" class="container-fluid d-flex flex-column px-4 align-items-center justify-content-end">
                        <div id="subtotal" class="d-flex flex-row my-4 w-100 justify-content-between">
                            <p>Subtotal</p>
                            <p id="price">$0.00</p>
                        </div>

                        <hr class="m-0">

                        <div id="free-shipping">
                            
                        </div>

                        <button class="view-bag-btn rounded-1 my-4 py-3 w-100">View Bag</button>
                    </div>
                </div>

                <a id="contact-us" href="build-it.html" class="d-flex pill-btn rounded-pill border-0 p-2 px-3 shadow-none">
                    Build It
                </a>
            </div>

        </div>
    </nav>
`;

//outerDiv.appendChild(innerDiv);


// Get the offset position of the navbar this was manual cuz the offset y position is bugged
let FIX_NAVBAR = 36;
let FIX_FILTER = 62;

// Get the navbars
let navbar = document.getElementById("navbar");
let filter = document.getElementById("filter");

//Table of navbars to fix
let navbars = []
const enums = {
    CLONED_ELEMENT: 0,
    FIX_VALUE: 1,
    ADJUSTABLE: 2,
    ELEMENT: 3,
    VAIL: 4,
    PARENT_ELEMENT: 5
};

if (navbar) {
    let clone = cloneElement(navbar)
    navbars.push([clone, FIX_NAVBAR, false, navbar])
}

if (filter) {
    let clone = cloneElement(filter)
    let vail = makeVail(filter.parentElement)
    console.log(vail)
    navbars.push([clone, FIX_FILTER, true, filter, vail, filter.parentElement]);
}


window.onscroll = function() {makeSticky(navbars), adjustSticky(navbars)};
window.onresize = function() {adjustSticky(navbars)};


function makeSticky(navbars) {
    console.log(window.scrollY)
    //console.log(navbars)
    navbars.forEach((clone) => {
        
        if (window.scrollY >= clone[enums.FIX_VALUE]) {
            clone[enums.CLONED_ELEMENT].classList.remove("d-none")
        } else {
            clone[enums.CLONED_ELEMENT].classList.add("d-none")
        }

        if (clone[enums.ADJUSTABLE]) {
            if (window.scrollY >= clone[enums.FIX_VALUE]) {
                clone[enums.VAIL].classList.remove("d-none")
            } else {
                clone[enums.VAIL].classList.add("d-none")
            }
        }
    })
}

function adjustSticky(navbars) {
    navbars.forEach((clone) => {
        if (clone[enums.ADJUSTABLE]) {
            let rect = clone[enums.ELEMENT].getBoundingClientRect();
            let rectParent = clone[enums.PARENT_ELEMENT].getBoundingClientRect();
            let vail = clone[enums.VAIL];
            let clonedElement = clone[enums.CLONED_ELEMENT];

            vail.style.top = `${rectParent.top}px`;
            vail.style.left = `${rectParent.left}px`;
            vail.style.width = `${rectParent.width}px`;
            vail.style.height = `${rectParent.height}px`;

            clonedElement.style.left = `${rect.left}px`;
            clonedElement.style.width = `${rect.width}px`;
            clonedElement.style.height = `${rect.height}px`;
        }
    })
}

function cloneElement(element) {
    // Clone the element and its children (deep clone)
    let clone = element.cloneNode(true);

    clone.id = "cloned-element";
    clone.classList.add("fixed-top", "d-none");

    // Append the cloned element to the body (or any other container)
    document.getElementById("nav").appendChild(clone);
    return clone
}

function makeVail(element) {

    let vail = element.cloneNode(false);

    vail.id = "vail";
    vail.classList.add("d-none", "position-absolute");

    // Append the cloned element to the body (or any other container)
    document.getElementById("nav").appendChild(vail);

    vail.style.backgroundColor = "#ffffff"; // needs to be the color of the background!!!!! <------------------------------------------ adjust this as needed
    return vail
}