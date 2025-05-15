const mainMenuImg = document.querySelectorAll(".menu")
const shopBtn = document.querySelector(".shop-btn")

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
    window.location.href = '/shop.html'
})

