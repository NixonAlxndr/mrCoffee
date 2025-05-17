const cartLink = document.querySelector(".cart")
const harmburgerButton = document.querySelector(".hamburger-button")
const overlay = document.querySelector(".overlay")
const cancelButton = document.querySelector(".cancel-button")

// Toggle Overlay On Mobile Device
harmburgerButton.addEventListener("click", () => {
    overlay.classList.remove("not-displaying")
})

cancelButton.addEventListener("click", () => {
    overlay.classList.add("not-displaying")
})

// ----------------------- Cart Pin --------------------------
// Ambil item dari local storage
const cart = JSON.parse(localStorage.getItem("cart")) || []

// Toggle Cart Pin
const toggleCartPin = (cart) => {
    cart[0] ? cartLink.classList.add("active") : cartLink.classList.remove("active")
}
toggleCartPin(cart)
