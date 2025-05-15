const cartLink = document.querySelector(".cart")
const socialMedia = document.querySelectorAll(".media")

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