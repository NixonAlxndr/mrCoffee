const cartLink = document.querySelector(".cart")

// ----------------------- Cart Pin --------------------------
// Ambil item dari local storage
const cart = JSON.parse(localStorage.getItem("cart")) || []

// Toggle Cart Pin
const toggleCartPin = (cart) => {
    cart[0] ? cartLink.classList.add("active") : cartLink.classList.remove("active")
}
toggleCartPin(cart)
