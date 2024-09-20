let footer = document.getElementById("footer");

footer.innerHTML = `
<main class="container-xl py-5">
    <!--
    <header id="subscription">
        <div class="d-flex col-2 align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <h5 class="p-0 h-special">Subscribe For Updates</h5>
                <p>Sign up for great deals, discounts and new product launch specials!</p>
                <form class="subscription-bar d-flex position-relative" role="subscribe">
                    <button class="d-flex align-items-center subscription-btn position-absolute rounded-5 border-0 bg-transparent" type="submit"><i class="fa-regular fa-bell"></i><p class="px-2">Subscribe</p></button>
                    <input class="subscription-input rounded-pill px-4 p-2" type="subscribe" placeholder="Enter your Email" aria-label="Subscribe">
                </form>
            </div>
        </div>
    </header>
    -->

    <footer class="d-flex flex-row mt-5 py-5">
        <div class="col-4 d-flex flex-column">
            <h5 class="h-special">Social Media</h5>
            <div id="social-icon" class="d-flex flex-row gap-4 py-5 px-2">
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                <a href=""><i class="fa-brands fa-tiktok"></i></a>
                <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
                
                
            </div>
        </div>
        <div id="footer-items" class="col-8 d-flex flex-row justify-content-between">

            <div>
                <h4>Products</h4>
                <ul>
                    <li>Object</li>
                    <li>Object</li>
                    <li>Object</li>
                    <li>Object</li>
                    <li>Object</li>
                </ul>
            </div>

            <div>
                <h4>Custum</h4>
                <ul>
                    <li>Object</li>
                    <li>Object</li>
                    <li>Object</li>
                    <li>Object</li>
                    <li>Object</li>
                </ul>
            </div>

            <div>
                <h4>Support</h4>
                <ul>
                    <li>Object</li>
                    <li>Object</li>
                    <li>Object</li>
                    <li>Object</li>
                    <li>Object</li>
                </ul>
            </div>

            <div>
                <h4>About Us</h4>
                <ul>
                    <li>Object</li>
                    <li>Object</li>
                    <li>Object</li>
                    <li>Object</li>
                    <li>Object</li>
                </ul>
            </div>

        </div>
    </footer>
</main>

<footer id="tiny-details" class="contianer-fluid d-flex flex-column justify-content-end align-items-center">
    <ul id="payment-methods" class="d-flex flex-wrap justify-content-center p-0" style="opacity: 0.5; list-style: none;">
        <li><img height="24" alt="Master Card" src="images/pay-methods/MasterCard.svg"></li>
        <li><img height="24" alt="Visa" src="images/pay-methods/Visa.svg"></li>
        <li><img height="24" alt="American Express" src="images/pay-methods/AE.svg"></li>
        <li><img height="24" alt="Discover" src="images/pay-methods/Discover.svg"></li>
        <li><img height="24" alt="JCB" src="images/pay-methods/JCB.svg"></li>
        <li><img height="24" alt="PayPal" src="images/pay-methods/PayPal.svg"></li>
        <li><img height="24" alt="Venmo" src="images/pay-methods/venmo.svg"></li>
        <li><img height="24" alt="Apple Pay" src="images/pay-methods/APay.svg"></li>
        <li><img height="24" alt="Google Pay" src="images/pay-methods/GPay.svg"></li>
        <li><img height="24" alt="Samsung Pay" src="images/pay-methods/SPay.svg"></li>
        <li><img height="24" alt="Bitcoin" src="images/pay-methods/Bitcoin.svg"></li>
    </ul>
    <p class="less-important mt-4 mb-5">© 2024. Design Elite. Web design and digital marketing by <a href="" class="important" style="text-decoration: underline;">Jake Wills</a>.</p>
</footer>
`