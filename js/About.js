const cartLink = document.querySelector(".cart")
const socialMedia = document.querySelectorAll(".media")
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

// ---------------------- Effect Social Media --------------------
socialMedia.forEach(s => {
    s.addEventListener("mouseenter", e => {
        s.querySelector(".carousel, .carousel2").classList.remove("hidden")
    })

    s.addEventListener("mouseleave", e => {
        s.querySelector(".carousel, .carousel2").classList.add("hidden")
    })
})