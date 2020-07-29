/*gallery animation*/

const displayedImg = document.querySelector(".displayed-img");
let galleryImg = document.querySelectorAll(".gallery-img");

for (let i = 0; i < galleryImg.length; i++) {
  galleryImg[i].addEventListener("click", function() {
    let attr = galleryImg[i].getAttribute("src");
    displayedImg.setAttribute("src", attr);
    displayedImg.animate(
      [
        {
          // from
          opacity: 0.4
        },
        {
          opacity: 0.7
        },
        {
          // to
          opacity: 1
        }
      ],
      1000
    );
  });
}

/* add to cart or wishlist */

const iconCart = document.querySelector(".icon-shopping-cart");
const iconHeart = document.querySelector(".icon-heart");

const addToCart = document.querySelector(".add-to-bag");
const addToWishList = document.querySelector(".add-to-wishlist");

addToCart.addEventListener("click", function() {
  addToCart.animate(
    [
      {
        backgroundColor: "#22ba54"
      },
      {
        backgroundColor: "#000"
      }
    ],
    4000
  );

  iconCart.animate(
    [
      { fill: "#22ba54", transform: "scale(1.5)" },
      { fill: "#000", transform: "scale(1)" }
    ],
    4000
  );
});

addToCart.addEventListener("click", function(){
  addToCart.textContent = "Added to cart!"
  setTimeout(function(){
    addToCart.textContent = "Add to cart";
  }, 2000)
}) 

addToWishList.addEventListener("click", function() {
  addToWishList.animate(
    [
      {
        backgroundColor: "#d62f2f",
        opacity: 1
      },
      {
        backgroundColor: "rgb(231, 231, 231)",
        opacity: 1
      }
    ],
    4000
  );
  iconHeart.animate(
    [
      { fill: "#d62f2f", transform: "scale(1.5)" },
      { fill: "#000", transform: "scale(1)" }
    ],
    2000
  );
});

addToWishList.addEventListener("click", function(){
  addToWishList.textContent = "Added to wishlist!"
  setTimeout(function(){
    addToWishList.textContent = "Add to wishlist";
  }, 3000)
}) 

// slide

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const items = document.querySelectorAll(".item");

const itemPics = document.querySelectorAll(".item-pic");
const itemPrices = document.querySelectorAll(".item-price");
const itemNames = document.querySelectorAll(".item-name");

let Item = function(price, description, src) {
  this.price = price;
  this.description = description;
  this.src = src;
};

let item1 = new Item(
  "120 €",
  "Basic Metallic Samantha - bronze Liebeskind Berlin",
  "img/brown1.jpg"
);
let item2 = new Item(
  "189.50 €",
  "Eve Clutch S - mixed leather Liebeskind Berlin",
  "img/catena1.jpg"
);
let item3 = new Item(
  "99.90 €",
  "Pink S - folded clutch Liebeskind Berlin",
  "img/rosa1.jpg"
);
let item4 = new Item(
  "99.50 €",
  "Across body bag - black Liebeskind Berlin",
  "img/nera1.jpg"
);
let item5 = new Item(
  "113 €",
  "Across body bag - silver Liebeskind Berlin",
  "img/silver1.jpg"
);
let item6 = new Item(
  "82.50 €",
  "Soft skin clutch S - yellow clutch Liebeskind Berlin",
  "img/yellow1.jpg"
);

nextBtn.addEventListener("click", function() {
  for (let i = 0; i < items.length; i++) {
    items[i].animate(
      [
        {
          // from
          opacity: 0.4,
          marginLeft: 0
        },
        {
          opacity: 0.7,
          marginLeft: "5px"
        },
        {
          // to
          opacity: 1,
          marginLeft: 0
        }
      ],
      1000
    );
  }

  itemPrices[0].textContent = item1.price;
  itemNames[0].textContent = item1.description;
  itemPics[0].setAttribute("src", item1.src);

  itemPrices[1].textContent = item2.price;
  itemNames[1].textContent = item2.description;
  itemPics[1].setAttribute("src", item2.src);

  itemPrices[2].textContent = item3.price;
  itemNames[2].textContent = item3.description;
  itemPics[2].setAttribute("src", item3.src);

  nextBtn.style.display = "none";
  prevBtn.style.display = "block";
});

prevBtn.addEventListener("click", function() {
  for (let i = 0; i < items.length; i++) {
    items[i].animate(
      [
        {
          // from
          opacity: 0.4,
          marginLeft: 0
        },
        {
          opacity: 0.7,
          marginLeft: "5px"
        },
        {
          // to
          opacity: 1,
          marginLeft: 0
        }
      ],
      1000
    );
  }

  itemPrices[0].textContent = item4.price;
  itemNames[0].textContent = item4.description;
  itemPics[0].setAttribute("src", item4.src);

  itemPrices[1].textContent = item5.price;
  itemNames[1].textContent = item5.description;
  itemPics[1].setAttribute("src", item5.src);

  itemPrices[2].textContent = item6.price;
  itemNames[2].textContent = item6.description;
  itemPics[2].setAttribute("src", item6.src);

  prevBtn.style.display = "none";
  nextBtn.style.display = "block";
});
