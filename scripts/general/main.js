let scriptNameList = ['scripts/products/cards.js', 'scripts/products/detail.js', 'scripts/sections/footer.js', 'scripts/sections/navbar.js']


scriptNameList.forEach(scriptName => {
    const script = document.createElement('script');
    script.src = scriptName;
    script.defer = true;
    document.head.appendChild(script)
});