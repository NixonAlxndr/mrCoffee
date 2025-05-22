const cartLink = document.querySelector(".cart")
const listItem = document.querySelector(".list-item")
const totalPayment = document.querySelector(".total-payment")
const payButton = document.querySelector(".pay-button")
const inputField = document.querySelectorAll("input")
const inputEmail = document.querySelector(".input-email")
const inputName = document.querySelector(".input-name")
const validation = document.querySelectorAll(".validation")
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


// ----------------------- Cart Page --------------------------
// Ambil item dari local storage
const cart = JSON.parse(localStorage.getItem("cart")) || []

// Toggle Cart Pin
const toggleCartPin = (cart) => {
    cart[0] ? cartLink.classList.add("active") : cartLink.classList.remove("active")
}
toggleCartPin(cart)

// Render Cart
const renderCart = () => {
    const total = cart.reduce((acc, val) => acc + val.price * val.qty, 0)
    let html = ''
    cart.forEach(item => {
        html =
            `
        <div class="item">
            <div class="item-desc">
                <div class="img">
                    <img src=${item.img} alt="">
                </div>

                <div class="desc">
                    <p class="desc-2 nunito-600">${item.title}</p>
                    <p class="desc-3 color-gray nunito-400">Qty <span>${item.qty}</span> <a href="shop.html" class="secondary-button option">Edit</a></p>
                </div>
            </div>
            
            <div class="cost-desc">
                <p class="total-cost desc-2 nunito-600">$<span>${(item.price * item.qty).toFixed(2)}</span></p>
                <p class="item-cost desc-3 color-gray nunito-400">$<span>${item.price}</span> each</p>
            </div>
        </div>
        `
        listItem.innerHTML += html
    })

    totalPayment.textContent = total.toFixed(2)
}
renderCart()

// Add Error
const setError = (errorMsg = "", inputField = "") => {
    const el = document.querySelector(inputField);
    if (el) el.textContent = errorMsg;
};

// Validation
const inputValidation = () => {
    let isValid = true;

    inputField.forEach(input => {
        const validationSelector = input.dataset.validation;
        const validationEl = validationSelector ? document.querySelector(validationSelector) : null;
        const value = input.value.trim();

        if (!value && validationEl) {
            validationEl.textContent = "Please Fill This Field";
            isValid = false;
        } else if (value.length > 100 && validationEl) {
            validationEl.textContent = "Maximum 100 characters allowed";
            isValid = false;
        } else if (validationEl) {
            validationEl.textContent = "";
        }
    });

    if (!inputEmail.value.includes("@")) {
        setError("Please input valid email", "#email");
        isValid = false;
    }

    const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}', '[', ']', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '\\', '|', '`', '~'];
    if (specialChars.some(char => inputName.value.includes(char))) {
        setError("Name should not contain special character", "#name");
        isValid = false;
    }

    return isValid;
};

// Pay Button
payButton.addEventListener("click", e => {
    e.preventDefault();

    const valid = inputValidation();

    if (valid) {
        console.log("Form submitted!");
        localStorage.clear("cart")
        location.reload()
    } else {
        console.log("Form invalid. Please fix the errors.");
    }
});
