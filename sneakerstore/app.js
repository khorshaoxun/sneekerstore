const wrapper = document.querySelector('.sliderwrapper');
const menuItems = document.querySelectorAll('.menuItem');


var id = 0;
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        desc:"The Air Force 1 was created by designer Bruce Kilgore and was the first basketball shoe to use the Nike Air technology.",
        colors: [
            {
                code: "black",
                img: "./img/product/air.png",
            },
            {
                code: "darkblue",
                img: "./img/product/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        desc: "The Air Jordan 1 is a basketball shoe designed by Peter Moore for Michael Jordan.",
        colors: [
            {
                code: "lightgray",
                img: "./img/product/jordan.png",
            },
            {
                code: "green",
                img: "./img/product/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        desc: "The Blazer was originally designed as a basketball shoe in 1972, but has since become a popular lifestyle sneaker.",
        colors: [
            {
                code: "lightgray",
                img: "./img/product/blazer.png",
            },
            {
                code: "green",
                img: "./img/product/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        desc: "The Crater is a sustainable sneaker made with at least 25% recycled materials by weight.",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/product/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/product/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        desc: "The Hippie is a lifestyle sneaker that combines comfort and style with a retro design.",
        price: 99,
        colors: [
            {
                code: "black",
                img: "./img/product/hippie.png",
            },
            {
                code: "darkblue",
                img: "./img/product/hippie2.png",
            },
        ],
    },
    {
        id: 6,
        title: "Vaporfly",
        desc: "The Vaporfly is a high-performance running shoe designed for speed and efficiency.",
        price: 1099,
        colors: [
            {
                code: "rgb(210, 157, 46)",
                img: "./img/product/vaporfly.png",
            },
            {
                code: "rgb(179, 239, 193)",
                img: "./img/product/vaporfly2.png",
            },
        ],
    }
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Change the chosen product
        chosenProduct = products[index];

        // Change text of currentProductTitle and currentProductPrice
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "RM" + chosenProduct.price;
        currentProductDesc.textContent = chosenProduct.desc;

        // Change the colors of the product
        currentProductImg.src = chosenProduct.colors[0].img;
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const payButton = document.querySelector(".payButton");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});

payButton.addEventListener("click", () => {
    payment.style.display = "none";
    alert("Payment Successful! Thank you for your purchase.");
});

const footerLinks = document.querySelectorAll(".fListItem a");

footerLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Change the chosen product
        chosenProduct = products[index];

        // Update product details
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "RM" + chosenProduct.price;
        currentProductDesc.textContent = chosenProduct.desc;
        currentProductImg.src = chosenProduct.colors[0].img;

        // Update color options
        currentProductColors.forEach((color, i) => {
            color.style.backgroundColor = chosenProduct.colors[i].code;
        });

        // Scroll to product section
        document.querySelector("#product").scrollIntoView({ behavior: "smooth" });
    });
});

