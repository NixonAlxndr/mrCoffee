const mainMenuImg = document.querySelectorAll(".menu")
const shopBtn = document.querySelector(".shop-btn")
const harmburgerButton = document.querySelector(".hamburger-button")
const overlay = document.querySelector(".overlay")
const cancelButton = document.querySelector(".cancel-button")
const cartLink = document.querySelector(".cart")

// Ambil item dari local storage
const cart = JSON.parse(localStorage.getItem("cart")) || []

// Toggle Cart Pin
const toggleCartPin = () => {
    cart.length > 0 ? cartLink.classList.add("active") : cartLink.classList.remove("active")
}
toggleCartPin()

// Menu Image In Main
mainMenuImg.forEach(img => {
    img.addEventListener('mouseenter', e => {
        img.classList.add("active")
        img.querySelector(".desc-3").classList.remove("hidden")
    })
    
    img.addEventListener('mouseleave', e => {
        img.classList.remove("active")
        img.querySelector(".desc-3").classList.add("hidden")
    })
})

// Navigation
shopBtn.addEventListener('click', () => {
    window.location.href = 'shop.html'
})

// Toggle Overlay On Mobile Device
harmburgerButton.addEventListener("click", () => {
    overlay.classList.remove("not-displaying")
})

cancelButton.addEventListener("click", () => {
    overlay.classList.add("not-displaying")
})