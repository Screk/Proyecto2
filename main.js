const products = [
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
];

const body = document.body;
const secondSectionArticle = document.createElement('article');
const secondSection = document.querySelector("#second-section");

function setUpProducts() {
  products.forEach((product) => {
    let template = `
        <div>
            <img src="${product.image}" alt="Error">
            <h4 id='name'>${product.name}</h4>
            <h4 id='price'>${product.price}€</h4>
            <h4 id='stars>${product.stars}</h4>
            <h4 id='reviews'>Reviews ${product.reviews}</h4>
            <h4 id='disponibilidad'>${product.disponibilidad}</h4>
            <h4 id='seller'>Distribuido por ${product.seller}</h4>
        </div>
        `;
    secondSectionArticle.innerHTML += template;
  });
  secondSection.append(secondSectionArticle)
  
}

setUpProducts();
