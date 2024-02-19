document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".cards");

    cards.forEach(card => {
        const img = card.querySelector("img");
        const productName = img.getAttribute("alt");
        
        card.addEventListener("mouseover", function() {
            showProductName(productName, card);
        });

        card.addEventListener("mouseout", function() {
            hideProductName(card);
        });
    });

    function showProductName(productName, card) {
        const productNameElement = document.createElement("p");
        productNameElement.textContent = productName;
        productNameElement.classList.add("product-name");
        card.appendChild(productNameElement);
    }

    function hideProductName(card) {
        const productNameElement = card.querySelector(".product-name");
        if (productNameElement) {
            card.removeChild(productNameElement);
        }
    }
});
