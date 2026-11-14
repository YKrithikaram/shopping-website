
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<h3>Your cart is empty!</h3>";
    }

    cart.forEach((item, index) => {

        let subtotal = Number(item.price) * Number(item.quantity);

        total += subtotal;

        cartItems.innerHTML += `
            <div class="cart-product">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: ₹${subtotal}</p>

                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    // Display final total
    totalElement.innerHTML = "TOTAL AMOUNT: ₹" + total;
}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

displayCart();

