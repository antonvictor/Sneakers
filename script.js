// Home Page First Section Carousel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sec1-carousel-slide");
  let dots = document.getElementsByClassName("sec1-carousel-tracker-dots");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

setInterval(function(){plusSlides(1)} , 20000)

// Shoes Database
const shoeInventory = {
  shoe_1: {
    name: "Nike Air Force 1 Low",
    price: 134.99,
    sex: "Men",
    brand: "Nike",
    imgs: [
      "./Shoes Collection/Nike/nike1.1.webp",
      "./Shoes Collection/Nike/nike1.2.webp",
      "./Shoes Collection/Nike/nike1.3.webp",
      "./Shoes Collection/Nike/nike1.4.webp",
      "./Shoes Collection/Nike/nike1.5.webp",
    ],
    status: "new",
    description: "",
  },

  shoe_2: {
    name: "Puma La France",
    price: 99.99,
    sex: "Men",
    brand: "Puma",
    imgs: [
      "./Shoes Collection/Puma/puma1.1.webp",
      "./Shoes Collection/Puma/puma1.2.webp",
      "./Shoes Collection/Puma/puma1.3.webp",
      "./Shoes Collection/Puma/puma1.4.webp",
      "./Shoes Collection/Puma/puma1.5.webp",
    ],
    status: "new",
    description: "",
  },

  shoe_3: {
    name: "Adidas Ultraboost",
    price: 169.99,
    sex: "Men",
    brand: "Adidas",
    imgs: [
      "./Shoes Collection/Adidas/adidas1.1.webp",
      "./Shoes Collection/Adidas/adidas1.2.webp",
      "./Shoes Collection/Adidas/adidas1.3.webp",
      "./Shoes Collection/Adidas/adidas1.4.webp",
      "./Shoes Collection/Adidas/adidas1.5.webp",
    ],
    status: "trending",
    description: "",
  },

  shoe_4: {
    name: "Lacoste Serve 2.0 Evo",
    price: 54.99,
    sex: "Men",
    brand: "Lacoste",
    imgs: [
      "./Shoes Collection/Lacoste/lacoste1.1.webp",
      "./Shoes Collection/Lacoste/lacoste1.2.webp",
      "./Shoes Collection/Lacoste/lacoste1.3.webp",
      "./Shoes Collection/Lacoste/lacoste1.4.webp",
      "./Shoes Collection/Lacoste/lacoste1.5.webp",
    ],
    status: "new",
    description: "",
  },

  shoe_5: {
    name: "New Balance 550",
    price: 139.99,
    sex: "Women",
    brand: "New Balance",
    imgs: [
      "./Shoes Collection/New balance/newbalance1.1.webp",
      "./Shoes Collection/New balance/newbalance1.2.webp",
      "./Shoes Collection/New balance/newbalance1.3.webp",
      "./Shoes Collection/New balance/newbalance1.4.webp",
      "./Shoes Collection/New balance/newbalance1.5.webp",
    ],
    status: "trending",
    description: "",
  },

  shoe_6: {
    name: "Jordan Aj 1 Zoom",
    price: 168.99,
    sex: "Women",
    brand: "Jordan",
    imgs: [
      "./Shoes Collection/Jordan/jordan1.1.webp",
      "./Shoes Collection/Jordan/jordan1.2.webp",
      "./Shoes Collection/Jordan/jordan1.3.webp",
      "./Shoes Collection/Jordan/jordan1.4.webp",
      "./Shoes Collection/Jordan/jordan1.5.webp",
    ],
    status: "new",
    description: "",
  },

  // duplicates for testing
  shoe_7: {
    name: "Nike Air Force 1 Low",
    price: 134.99,
    sex: "Men",
    brand: "Nike",
    imgs: [
      "./Shoes Collection/Nike/nike1.1.webp",
      "./Shoes Collection/Nike/nike1.2.webp",
      "./Shoes Collection/Nike/nike1.3.webp",
      "./Shoes Collection/Nike/nike1.4.webp",
      "./Shoes Collection/Nike/nike1.5.webp",
    ],
    status: "trending",
    description: "",
  },

  shoe_8: {
    name: "Puma La France",
    price: 99.99,
    sex: "Men",
    brand: "Puma",
    imgs: [
      "./Shoes Collection/Puma/puma1.1.webp",
      "./Shoes Collection/Puma/puma1.2.webp",
      "./Shoes Collection/Puma/puma1.3.webp",
      "./Shoes Collection/Puma/puma1.4.webp",
      "./Shoes Collection/Puma/puma1.5.webp",
    ],
    status: "new",
    description: "",
  },

  shoe_9: {
    name: "Adidas Ultraboost",
    price: 169.99,
    sex: "Men",
    brand: "Adidas",
    imgs: [
      "./Shoes Collection/Adidas/adidas1.1.webp",
      "./Shoes Collection/Adidas/adidas1.2.webp",
      "./Shoes Collection/Adidas/adidas1.3.webp",
      "./Shoes Collection/Adidas/adidas1.4.webp",
      "./Shoes Collection/Adidas/adidas1.5.webp",
    ],
    status: "trending",
    description: "",
  },

  shoe_10: {
    name: "Lacoste Serve 2.0 Evo",
    price: 54.99,
    sex: "Men",
    brand: "Lacoste",
    imgs: [
      "./Shoes Collection/Lacoste/lacoste1.1.webp",
      "./Shoes Collection/Lacoste/lacoste1.2.webp",
      "./Shoes Collection/Lacoste/lacoste1.3.webp",
      "./Shoes Collection/Lacoste/lacoste1.4.webp",
      "./Shoes Collection/Lacoste/lacoste1.5.webp",
    ],
    status: "new",
    description: "",
  },

  shoe_11: {
    name: "New Balance 550",
    price: 139.99,
    sex: "Women",
    brand: "New Balance",
    imgs: [
      "./Shoes Collection/New balance/newbalance1.1.webp",
      "./Shoes Collection/New balance/newbalance1.2.webp",
      "./Shoes Collection/New balance/newbalance1.3.webp",
      "./Shoes Collection/New balance/newbalance1.4.webp",
      "./Shoes Collection/New balance/newbalance1.5.webp",
    ],
    status: "trending",
    description: "",
  },

  shoe_12: {
    name: "Jordan Aj 1 Zoom",
    price: 168.99,
    sex: "Women",
    brand: "Jordan",
    imgs: [
      "./Shoes Collection/Jordan/jordan1.1.webp",
      "./Shoes Collection/Jordan/jordan1.2.webp",
      "./Shoes Collection/Jordan/jordan1.3.webp",
      "./Shoes Collection/Jordan/jordan1.4.webp",
      "./Shoes Collection/Jordan/jordan1.5.webp",
    ],
    status: "new",
    description: "",
  },

  shoe_13: {
    name: "Jordan Aj 1 Zoom",
    price: 168.99,
    sex: "Women",
    brand: "Jordan",
    imgs: [
      "./Shoes Collection/Jordan/jordan1.1.webp",
      "./Shoes Collection/Jordan/jordan1.2.webp",
      "./Shoes Collection/Jordan/jordan1.3.webp",
      "./Shoes Collection/Jordan/jordan1.4.webp",
      "./Shoes Collection/Jordan/jordan1.5.webp",
    ],
    status: "trending",
    description: "",
  },

  shoe_14: {
    name: "Lacoste Serve 2.0 Evo",
    price: 54.99,
    sex: "Men",
    brand: "Lacoste",
    imgs: [
      "./Shoes Collection/Lacoste/lacoste1.1.webp",
      "./Shoes Collection/Lacoste/lacoste1.2.webp",
      "./Shoes Collection/Lacoste/lacoste1.3.webp",
      "./Shoes Collection/Lacoste/lacoste1.4.webp",
      "./Shoes Collection/Lacoste/lacoste1.5.webp",
    ],
    status: "trending",
    description: "",
  },
  shoe_15: {
    name: "Jordan Aj 1 Zoom 1",
    price: 168.99,
    sex: "Women",
    brand: "Jordan",
    imgs: [
      "./Shoes Collection/Jordan/jordan1.1.webp",
      "./Shoes Collection/Jordan/jordan1.2.webp",
      "./Shoes Collection/Jordan/jordan1.3.webp",
      "./Shoes Collection/Jordan/jordan1.4.webp",
      "./Shoes Collection/Jordan/jordan1.5.webp",
    ],
    status: "new",
    description: "",
  },
  shoe_16: {
    name: "Jordan Aj 1 Zoom 2",
    price: 168.99,
    sex: "Women",
    brand: "Jordan",
    imgs: [
      "./Shoes Collection/Jordan/jordan1.1.webp",
      "./Shoes Collection/Jordan/jordan1.2.webp",
      "./Shoes Collection/Jordan/jordan1.3.webp",
      "./Shoes Collection/Jordan/jordan1.4.webp",
      "./Shoes Collection/Jordan/jordan1.5.webp",
    ],
    status: "new",
    description: "",
  },
  shoe_17: {
    name: "Jordan Aj 1 Zoom 3",
    price: 168.99,
    sex: "Women",
    brand: "Jordan",
    imgs: [
      "./Shoes Collection/Jordan/jordan1.1.webp",
      "./Shoes Collection/Jordan/jordan1.2.webp",
      "./Shoes Collection/Jordan/jordan1.3.webp",
      "./Shoes Collection/Jordan/jordan1.4.webp",
      "./Shoes Collection/Jordan/jordan1.5.webp",
    ],
    status: "new",
    description: "",
  },
  shoe_18: {
    name: "Jordan Aj 1 Zoom 4",
    price: 168.99,
    sex: "Women",
    brand: "Jordan",
    imgs: [
      "./Shoes Collection/Jordan/jordan1.1.webp",
      "./Shoes Collection/Jordan/jordan1.2.webp",
      "./Shoes Collection/Jordan/jordan1.3.webp",
      "./Shoes Collection/Jordan/jordan1.4.webp",
      "./Shoes Collection/Jordan/jordan1.5.webp",
    ],
    status: "new",
    description: "",
  },
  shoe_19: {
    name: "Jordan Aj 1 Zoom 5",
    price: 168.99,
    sex: "Women",
    brand: "Jordan",
    imgs: [
      "./Shoes Collection/Jordan/jordan1.1.webp",
      "./Shoes Collection/Jordan/jordan1.2.webp",
      "./Shoes Collection/Jordan/jordan1.3.webp",
      "./Shoes Collection/Jordan/jordan1.4.webp",
      "./Shoes Collection/Jordan/jordan1.5.webp",
    ],
    status: "new",
    description: "",
  },
  shoe_20: {
    name: "Jordan Aj 1 Zoom 6",
    price: 168.99,
    sex: "Women",
    brand: "Jordan",
    imgs: [
      "./Shoes Collection/Jordan/jordan1.1.webp",
      "./Shoes Collection/Jordan/jordan1.2.webp",
      "./Shoes Collection/Jordan/jordan1.3.webp",
      "./Shoes Collection/Jordan/jordan1.4.webp",
      "./Shoes Collection/Jordan/jordan1.5.webp",
    ],
    status: "new",
    description: "",
  },
  shoe_21: {
    name: "Jordan Aj 1 Zoom",
    price: 168.99,
    sex: "Women",
    brand: "Jordan",
    imgs: [
      "./Shoes Collection/Jordan/jordan1.1.webp",
      "./Shoes Collection/Jordan/jordan1.2.webp",
      "./Shoes Collection/Jordan/jordan1.3.webp",
      "./Shoes Collection/Jordan/jordan1.4.webp",
      "./Shoes Collection/Jordan/jordan1.5.webp",
    ],
    status: "trending",
    description: "",
  },

  shoe_22: {
    name: "Lacoste Serve 2.0 Evo",
    price: 54.99,
    sex: "Men",
    brand: "Lacoste",
    imgs: [
      "./Shoes Collection/Lacoste/lacoste1.1.webp",
      "./Shoes Collection/Lacoste/lacoste1.2.webp",
      "./Shoes Collection/Lacoste/lacoste1.3.webp",
      "./Shoes Collection/Lacoste/lacoste1.4.webp",
      "./Shoes Collection/Lacoste/lacoste1.5.webp",
    ],
    status: "trending",
    description: "",
  },
  shoe_23: {
    name: "Jordan Aj 1 Zoom",
    price: 168.99,
    sex: "Women",
    brand: "Jordan",
    imgs: [
      "./Shoes Collection/Jordan/jordan1.1.webp",
      "./Shoes Collection/Jordan/jordan1.2.webp",
      "./Shoes Collection/Jordan/jordan1.3.webp",
      "./Shoes Collection/Jordan/jordan1.4.webp",
      "./Shoes Collection/Jordan/jordan1.5.webp",
    ],
    status: "trending",
    description: "",
  },

  shoe_24: {
    name: "Lacoste Serve 2.0 Evo",
    price: 54.99,
    sex: "Men",
    brand: "Lacoste",
    imgs: [
      "./Shoes Collection/Lacoste/lacoste1.1.webp",
      "./Shoes Collection/Lacoste/lacoste1.2.webp",
      "./Shoes Collection/Lacoste/lacoste1.3.webp",
      "./Shoes Collection/Lacoste/lacoste1.4.webp",
      "./Shoes Collection/Lacoste/lacoste1.5.webp",
    ],
    status: "trending",
    description: "",
  },
  shoe_25: {
    name: "Jordan Aj 1 Zoom",
    price: 168.99,
    sex: "Women",
    brand: "Jordan",
    imgs: [
      "./Shoes Collection/Jordan/jordan1.1.webp",
      "./Shoes Collection/Jordan/jordan1.2.webp",
      "./Shoes Collection/Jordan/jordan1.3.webp",
      "./Shoes Collection/Jordan/jordan1.4.webp",
      "./Shoes Collection/Jordan/jordan1.5.webp",
    ],
    status: "trending",
    description: "",
  },

  shoe_26: {
    name: "Lacoste Serve 2.0 Evo",
    price: 54.99,
    sex: "Men",
    brand: "Lacoste",
    imgs: [
      "./Shoes Collection/Lacoste/lacoste1.1.webp",
      "./Shoes Collection/Lacoste/lacoste1.2.webp",
      "./Shoes Collection/Lacoste/lacoste1.3.webp",
      "./Shoes Collection/Lacoste/lacoste1.4.webp",
      "./Shoes Collection/Lacoste/lacoste1.5.webp",
    ],
    status: "trending",
    description: "",
  },
  shoe_27: {
    name: "Nike Air Force 1 Low",
    price: 134.99,
    sex: "Men",
    brand: "Nike",
    imgs: [
      "./Shoes Collection/Nike/nike1.1.webp",
      "./Shoes Collection/Nike/nike1.2.webp",
      "./Shoes Collection/Nike/nike1.3.webp",
      "./Shoes Collection/Nike/nike1.4.webp",
      "./Shoes Collection/Nike/nike1.5.webp",
    ],
    status: "new",
    description: "",
  },

  shoe_28: {
    name: "Puma La France",
    price: 99.99,
    sex: "Men",
    brand: "Puma",
    imgs: [
      "./Shoes Collection/Puma/puma1.1.webp",
      "./Shoes Collection/Puma/puma1.2.webp",
      "./Shoes Collection/Puma/puma1.3.webp",
      "./Shoes Collection/Puma/puma1.4.webp",
      "./Shoes Collection/Puma/puma1.5.webp",
    ],
    status: "new",
    description: "",
  },
  shoe_29: {
    name: "Nike Air Force 1 Low",
    price: 134.99,
    sex: "Men",
    brand: "Nike",
    imgs: [
      "./Shoes Collection/Nike/nike1.1.webp",
      "./Shoes Collection/Nike/nike1.2.webp",
      "./Shoes Collection/Nike/nike1.3.webp",
      "./Shoes Collection/Nike/nike1.4.webp",
      "./Shoes Collection/Nike/nike1.5.webp",
    ],
    status: "new",
    description: "",
  },

  shoe_30: {
    name: "Puma La France",
    price: 99.99,
    sex: "Men",
    brand: "Puma",
    imgs: [
      "./Shoes Collection/Puma/puma1.1.webp",
      "./Shoes Collection/Puma/puma1.2.webp",
      "./Shoes Collection/Puma/puma1.3.webp",
      "./Shoes Collection/Puma/puma1.4.webp",
      "./Shoes Collection/Puma/puma1.5.webp",
    ],
    status: "new",
    description: "",
  },
};

// third section shoe loop
const newArrival = document.getElementById("new-arrival");
const trending = document.getElementById("trending");
let newArrivalShoes = [];
let trendingShoes = [];

for (let shoe in shoeInventory) {
  if (shoeInventory[shoe].status === "new") {
    let img = document.createElement("img");
    img.setAttribute("src", shoeInventory[shoe].imgs[0]);
    let shoeName = document.createElement("h1");
    shoeName.innerHTML = shoeInventory[shoe].name;
    shoeName.classList.add("new-arrival-block-head-text");
    let shoeCategory = document.createElement("h1");
    shoeCategory.innerHTML = shoeInventory[shoe].sex + " Shoes";
    shoeCategory.classList.add("new-arrival-block-text");
    let shoePrice = document.createElement("h1");
    shoePrice.innerHTML = shoeInventory[shoe].price + "£";
    shoePrice.classList.add("new-arrival-block-text");
    let div = document.createElement("div");
    div.classList.add("new-arrival-block");
    let link = document.createElement("a");
    link.setAttribute("href", "");

    link.append(div);
    div.append(img, shoeName, shoeCategory, shoePrice);
    newArrival.append(link);
    newArrivalShoes.push(shoeInventory[shoe].name);
  } else if (shoeInventory[shoe].status === "trending") {
    let img = document.createElement("img");
    img.setAttribute("src", shoeInventory[shoe].imgs[0]);
    let shoeName = document.createElement("h1");
    shoeName.innerHTML = shoeInventory[shoe].name;
    shoeName.classList.add("trending-block-head-text");
    let shoeCategory = document.createElement("h1");
    shoeCategory.innerHTML = shoeInventory[shoe].sex + " Shoes";
    shoeCategory.classList.add("trending-block-text");
    let shoePrice = document.createElement("h1");
    shoePrice.innerHTML = shoeInventory[shoe].price + "£";
    shoePrice.classList.add("trending-block-text");
    let div = document.createElement("div");
    div.classList.add("trending-block");
    let link = document.createElement("a");
    link.setAttribute("href", "");
    link.append(div);
    div.append(img, shoeName, shoeCategory, shoePrice);
    trending.append(link);
    trendingShoes.push(shoeInventory[shoe].name);
  }
}

// Third section carousel control

let currentTrendingSlide;
let currentNewArrivalSlide;
let newArrivalTotalSlidesNumber = Math.ceil(newArrivalShoes.length / 5) - 1;
let trendingTotalSlidesNumber = Math.ceil(trendingShoes.length / 5) - 1;

// console.log(newArrivalTotalSlidesNumber ,trendingTotalSlidesNumber );

function swipeRight(obj) {
  currentNewArrivalSlide = parseInt(
    getComputedStyle(newArrival).getPropertyValue("--new-arrival-current")
  );
  currentTrendingSlide = parseInt(
    getComputedStyle(trending).getPropertyValue("--trending-current")
  );

  if (
    obj.id === "new-arrival-right" &&
    currentNewArrivalSlide != newArrivalTotalSlidesNumber
  ) {
    newArrival.style.setProperty(
      "--new-arrival-current",
      currentNewArrivalSlide + 1
    );
  } else if (
    obj.id === "new-arrival-right" &&
    currentNewArrivalSlide == newArrivalTotalSlidesNumber
  ) {
    newArrival.style.setProperty("--new-arrival-current", 0);
  } else if (
    obj.id === "trending-right" &&
    currentTrendingSlide != trendingTotalSlidesNumber
  ) {
    trending.style.setProperty("--trending-current", currentTrendingSlide + 1);
  } else if (
    obj.id === "trending-right" &&
    currentTrendingSlide == trendingTotalSlidesNumber
  ) {
    trending.style.setProperty("--trending-current", 0);
  }
}

function swipeLeft(obj) {
  currentNewArrivalSlide = parseInt(
    getComputedStyle(newArrival).getPropertyValue("--new-arrival-current")
  );
  currentTrendingSlide = parseInt(
    getComputedStyle(trending).getPropertyValue("--trending-current")
  );

  if (obj.id === "new-arrival-left" && currentNewArrivalSlide != 0) {
    newArrival.style.setProperty(
      "--new-arrival-current",
      currentNewArrivalSlide - 1
    );
  } else if (obj.id === "new-arrival-left" && currentNewArrivalSlide == 0) {
    newArrival.style.setProperty(
      "--new-arrival-current",
      newArrivalTotalSlidesNumber
    );
  } else if (obj.id === "trending-left" && currentTrendingSlide != 0) {
    trending.style.setProperty("--trending-current", currentTrendingSlide - 1);
  } else if (obj.id === "trending-left" && currentTrendingSlide == 0) {
    trending.style.setProperty("--trending-current", trendingTotalSlidesNumber);
  }
}
