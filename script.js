let currentLanguage = "sv";
let currentProduct = null;


/* =========================
   LANGUAGE MENU
========================= */

const languageButton = document.getElementById("languageButton");
const languageMenu = document.getElementById("languageMenu");

languageButton.addEventListener("click", function () {
    languageMenu.classList.toggle("show");
});


document.addEventListener("click", function (event) {

    if (
        !languageButton.contains(event.target) &&
        !languageMenu.contains(event.target)
    ) {
        languageMenu.classList.remove("show");
    }

});


/* =========================
   CHANGE LANGUAGE
========================= */

function changeLanguage(language) {

    currentLanguage = language;

    const elements = document.querySelectorAll("[data-sv]");

    elements.forEach(function (element) {

        element.innerHTML =
            element.getAttribute(
                language === "sv"
                    ? "data-sv"
                    : "data-en"
            );

    });


    const flag = document.getElementById("flag");
    const languageText = document.getElementById("languageText");

    if (language === "sv") {

        flag.textContent = "🇸🇪";
        languageText.textContent = "SWE";

    } else {

        flag.textContent = "🇬🇧";
        languageText.textContent = "ENG";

    }


    languageMenu.classList.remove("show");


    /* Uppdatera popupen om den är öppen */

    if (currentProduct) {
        updateProductLanguage(currentProduct);
    }

}


/* =========================
   PRODUCTS
========================= */

const products = {

    tandningskapa1: {

        image: "images/tandningskapa1.png",

        number: "J & R DESIGN 01",

        titleSV: "Tändningskåpa 01",
        titleEN: "Ignition Cover 01",

        descriptionSV: "Unik 3D-printad design.",
        descriptionEN: "Unique 3D-printed design.",

        priceSV: "299 kr",
        priceEN: "299 SEK",

        options: true

    },


    tandningskapa2: {

        image: "images/tandningskapa2.png",

        number: "J & R DESIGN 02",

        titleSV: "Tändningskåpa 02",
        titleEN: "Ignition Cover 02",

        descriptionSV: "Unik 3D-printad design.",
        descriptionEN: "Unique 3D-printed design.",

        priceSV: "299 kr",
        priceEN: "299 SEK",

        options: true

    },


    bakstanka: {

        image: "images/bakstanka.png",

        number: "J & R DESIGN 03",

        titleSV: "Bakstänka",
        titleEN: "Rear Fender",

        descriptionSV: "Egendesignad custom bakstänka.",
        descriptionEN: "Custom designed rear fender.",

        priceSV: "349 kr",
        priceEN: "349 SEK",

        options: false

    }

};


/* =========================
   OPEN PRODUCT
========================= */

function openProduct(productID) {

    const product = products[productID];

    if (!product) return;

    currentProduct = product;


    document.getElementById("modalImage").src =
        product.image;


    document.getElementById("modalNumber").textContent =
        product.number;


    updateProductLanguage(product);


    const customOptions =
        document.getElementById("customOptions");


    if (product.options) {

        customOptions.style.display = "block";

    } else {

        customOptions.style.display = "none";

    }


    document.getElementById("productModal")
        .classList.add("show");


    document.body.style.overflow = "hidden";
}


/* =========================
   PRODUCT LANGUAGE
========================= */

function updateProductLanguage(product) {

    const title =
        currentLanguage === "sv"
            ? product.titleSV
            : product.titleEN;


    const description =
        currentLanguage === "sv"
            ? product.descriptionSV
            : product.descriptionEN;


    const price =
        currentLanguage === "sv"
            ? product.priceSV
            : product.priceEN;


    document.getElementById("modalTitle")
        .textContent = title;


    document.getElementById("modalDescription")
        .textContent = description;


    document.getElementById("modalPrice")
        .textContent = price;
}


/* =========================
   CLOSE PRODUCT
========================= */

function closeProduct() {

    document.getElementById("productModal")
        .classList.remove("show");

    document.body.style.overflow = "auto";

    currentProduct = null;
}


document.getElementById("productModal")
    .addEventListener("click", function (event) {

        if (event.target === this) {

            closeProduct();

        }

    });


/* =========================
   OPTIONS
========================= */

document.querySelectorAll(".option")
    .forEach(function (option) {

        option.addEventListener("click", function (event) {

            event.stopPropagation();

            document.querySelectorAll(".option")
                .forEach(function (item) {

                    item.classList.remove("active");

                });


            this.classList.add("active");

        });

    });