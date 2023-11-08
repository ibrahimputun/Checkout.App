function createEventsForPlusMinus() {
    const minusBtns = document.querySelectorAll("fa-minus")
    const plusBtns = document.querySelectorAll(".fa-plus")
    minusBtns.forEach((minus) => {
        minus.addEventListener("click", () => {

        })
    })
    plusBtns.forEach((plus) => {
        plus.addEventListener("click", () => {

        })
    })
}

//! CONSTANTS
const SHIPPING_PRICE = 25.99
const FREE_SHIPPING_LIMIT = 3000
const TAXT_RATE = 0.18

//!SELECTORS

const deleteProducts = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")

//! EVENTS
deleteProducts.addEventListener("click", (e) => {
    if (confirm("Are you sure?")) {
        noProductPrint()
        calculateTotalPrice()
    }
})

products.addEventListener("click", (e) => {
    console.log(e.target);
    //     if (e.target.classList.contains("fa-minus")) {
    //         alert("minus")
    //     } else if (e.target.classList.contains("fa-plus")) {
    //         alert("plus")
    //     } else if (e.target.classList.contains("fa-trash-can")) {
    //         alert("remove")
    //     } else {
    //         alert("diger")
    //     }
    // })

    if (e.target.classList.contains("fa-plus")) {

        calculateProductPrice(e.target)
    } else if (e.target.classList.contains("fa-minus")) {
        if (e.target.nextElementSibling.innerText > 1) {
            e.target.nextElementSibling.innerText--
            calculateProductPrice(e.target)
        }
    } else if (e.target.classList.contains("fa-trash-can")) {
        e.target.closest(".product").remove()
        calculateTotalPrice()
    }
})
