const menuContainer = document.querySelector(".render-menu")
const categoryOption = document.querySelectorAll(".menu-option .option, .menu-option-2 .option")
const cartLink = document.querySelector(".cart")
const harmburgerButton = document.querySelector(".hamburger-button")
const overlay = document.querySelector(".overlay")
const cancelButton = document.querySelector(".cancel-button")
const categoryButton = document.querySelector(".menu-option-2 .hamburger-button")
const categoryList = document.querySelector(".category-list")

// Toggle category list
categoryButton.addEventListener("click", () => {
    categoryList.classList.toggle("active-category")
})

// Toggle Overlay On Mobile Device
harmburgerButton.addEventListener("click", () => {
    overlay.classList.remove("not-displaying")
})

cancelButton.addEventListener("click", () => {
    overlay.classList.add("not-displaying")
})

// --------------- Menu Page ----------------

// Ambil item dari local storage
const cart = JSON.parse(localStorage.getItem("cart")) || []

// Toggle Cart Pin
const toggleCartPin = () => {
    cart.length > 0 ? cartLink.classList.add("active") : cartLink.classList.remove("active")
    console.log(cartLink.classList)
}
toggleCartPin()

// Change Category
let menuCategory = "All"

categoryOption.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault()
        categoryOption.forEach(o => o.classList.remove("active"))
        option.classList.add('active')
        menuCategory = option.textContent
        renderMenu()
    })
})

// Toggle Order Button
const toggleOrderButton = () => {
    const button = document.querySelectorAll(".button-buy")

    button.forEach(btn => {
        const id = Number(btn.getAttribute("itemId"));
        const item = cart.find(i => i.id === id);

        if (item && item.qty > 0) {
            btn.innerHTML = `
                <div class="bought">
                    <div class="img minus-btn" itemId="${item.id}" type="button">
                        <img src="./assets/icons/minus.png"/>
                    </div>
                    <p class="nunito-400">${item.qty}</p>
                    <div class="img plus-btn" itemId="${item.id}" type="button">
                        <img src="./assets/icons/add.png"/>
                    </div>
                </div>
            `;
        } else {
            btn.innerHTML = `
                <button itemId="${id}" class="main-button-2 buy-button nunito-400">
                    <span>Order Now</span>
                </button>
            `;
        }
    });
}
toggleOrderButton()

// Render Menu
const menus = [
    {
        category: "Coffee",
        menu:
            [
                {
                    id: 0,
                    title: "Americano",
                    img: "./assets/images/Coffee/Americano.jpg",
                    price: 1,
                    star: 4.5
                },
                {
                    id: 1,
                    title: "Cappuccino",
                    img: "./assets/images/Coffee/Cappuccino.jpg",
                    price: 1.5,
                    star: 5
                },
                {
                    id: 2,
                    title: "Espresso",
                    img: "./assets/images/Coffee/Espresso.jpg",
                    price: 2,
                    start: 5
                },
                {
                    id: 3,
                    title: "Flat White",
                    img: "./assets/images/Coffee/Flat-White.jpg",
                    price: 1.5,
                    star: 4
                },
                {
                    id: 4,
                    title: "Latte",
                    img: "./assets/images/Coffee/Latte.jpg",
                    price: 1.5,
                    star: 4
                },
                {
                    id: 5,
                    title: "Mocha",
                    img: "./assets/images/Coffee/Mocha.jpg",
                    price: 1,
                    star: 5
                }
            ]
    },
    {
        category: "Cold Brews",
        menu:
            [
                {
                    id: 6,
                    title: "Cold Brew Coffee",
                    img: "./assets/images/Cold-Brews/Cold-Brew-Coffee.jpg",
                    price: 1.5,
                    star: 4.5
                },
                {
                    id: 7,
                    title: "Ice Americano",
                    img: "./assets/images/Cold-Brews/Ice-Americano.jpg",
                    price: 1.2,
                    star: 5
                },
                {
                    id: 8,
                    title: "Ice Lattee",
                    img: "./assets/images/Cold-Brews/Ice-Latte.jpg",
                    price: 1.8,
                    star: 5
                },
                {
                    id: 9,
                    title: "Ice Mocha",
                    img: "./assets/images/Cold-Brews/Ice-Mocha.jpg",
                    price: 1.8,
                    star: 4
                }
            ]
    },
    {
        category: "Non Coffee",
        menu:
            [
                {
                    id: 10,
                    title: "Hot Chocolate",
                    img: "./assets/images/Non-Coffee/Hot-Chocolate.jpg",
                    price: 1.2,
                    star: 5
                },
                {
                    id: 11,
                    title: "Ice Lemon Tea",
                    img: "./assets/images/Non-Coffee/Ice-Lemon-Tea.jpg",
                    price: 1.2,
                    star: 4.5
                },
                {
                    id: 12,
                    title: "Matcha Latte",
                    img: "./assets/images/Non-Coffee/Matcha-Latte.jpg",
                    price: 2,
                    star: 4
                },
                {
                    id: 13,
                    title: "Vanilla Latte",
                    img: "./assets/images/Non-Coffee/Vanilla-Latte.jpg",
                    price: 2,
                    star: 4.5
                }
            ]
    },
    {
        category: "Pastry",
        menu:
            [
                {
                    id: 14,
                    title: "Banana Bread",
                    img: "./assets/images/Pastry/Banana-Bread.jpg",
                    price: 2.1,
                    star: 5
                },
                {
                    id: 15,
                    title: "Cheese Cake",
                    img: "./assets/images/Pastry/Cheese-Cake.jpg",
                    price: 2.5,
                    star: 5
                },
                {
                    id: 16,
                    title: "Criossants",
                    img: "./assets/images/Pastry/Croissants.jpg",
                    price: 2.2,
                    star: 4
                },
                {
                    id: 17,
                    title: "Granola Bar",
                    img: "./assets/images/Pastry/Granola-Bar.jpg",
                    price: 2.3,
                    star: 4
                }
            ]
    }
]

const renderMenu = () => {
    const menu = menuCategory === "All" ? menus : menus.filter(x => x.category === menuCategory);

    html = ''
    menuContainer.innerHTML = ''
    menu.forEach(menu => {
        const sectionContainer = document.createElement('section');
        const title = document.createElement("p")
        const menuItem = document.createElement("div")

        title.classList.add("title-3")
        sectionContainer.classList.add("section-menu")
        title.textContent = menu.category
        menuItem.classList.add("menu-item")
        menuContainer.appendChild(sectionContainer)
        sectionContainer.appendChild(title)
        sectionContainer.appendChild(menuItem)

        menu.menu.forEach(m => {
            html = `
                <div class="item">
                    <div class="img">
                        <img src=${m.img} alt="">
                    </div>
                    <div class="description">
                        <p class="nunito-400 desc">${m.title} - <span class="nunito-600">$${m.price}</span></p>
                        <div class="rating">
                            <img src="./assets/icons/${m.star === 4 ? "4" : m.star ? "5" : "4-half"}-star.png" alt="">
                        </div>
                    </div>
                    <div class="button-buy" itemId=${m.id}>
                    </div>
                </div>
            `
            menuItem.innerHTML += html
        })
    });
    toggleOrderButton()
}
renderMenu()

// Add Item
const addItem = (item) => {
    const id = Number(item.getAttribute("itemId"));

    let itemBuyed;
    for (const cat of menus) {
        itemBuyed = cat.menu.find(m => m.id === id);
        if (itemBuyed) break;
    }
    const itemInCart = cart.find(x => x.id === itemBuyed.id);

    if (!itemInCart) { // item yang di beli tidak ada di dalam cart
        const format = { ...itemBuyed, qty: 1 }
        cart.push(format)
    } else { // item yang di beli ada di dalam cart
        itemInCart.qty += 1
    }

    toggleOrderButton()
    toggleCartPin()
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Remove Item
const removeItem = (item) => {
    const id = Number(item.getAttribute("itemId"))

    const itemInCart = cart.find(item => item.id === id)
    const itemIndex = cart.findIndex(item => item.id === id)

    if (itemInCart.qty > 0) {
        itemInCart.qty -= 1
    }

    if(itemInCart.qty === 0) {
        cart.splice(itemIndex, 1)
    }

    toggleOrderButton()
    toggleCartPin()
    localStorage.setItem("cart", JSON.stringify(cart))
}

menuContainer.addEventListener('click', (e) => {
    const target = e.target.closest('.buy-button') || e.target.closest(".plus-btn");
    if (target) {
        addItem(target)
    }
});

menuContainer.addEventListener('click', (e) => {
    const target = e.target.closest(".minus-btn");
    if (target) {
        removeItem(target)
    }
})