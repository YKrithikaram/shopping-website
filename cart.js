
// Get all Add to Cart buttons
const cartButtons = document.querySelectorAll(".add-to-cart");

// Load existing cart or create an empty one
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add product to cart
cartButtons.forEach(button => {
    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        // Check whether product already exists
        const existingProduct = cart.find(item => item.name === name && item.price === price);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        // Save cart
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(name + " added to cart!");
    });
});


