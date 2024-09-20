let FIX_NAVBAR = 36;
let FIX_FILTER = 62;

// Get the navbars
let navbar = document.getElementById("navbar");
let filter = document.getElementById("filter");

//Table of navbars to fix
let navbars = []

if (navbar) {
    navbars.push([navbar, FIX_NAVBAR])
}

if (filter) {
    navbars.push([filter, FIX_FILTER]);
}


window.onscroll = function() {makeSticky(navbars)};

function makeSticky(navbars) {
    console.log(window.scrollY)
    //console.log(navbars)
    navbars.forEach((navbar) => {
        if (window.scrollY <= navbar[1]) {
            navbar[0].classList.remove("fixed-top")
        } else {
            navbar[0].classList.add("fixed-top")
        }
    })
}