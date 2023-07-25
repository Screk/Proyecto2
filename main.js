const products = [
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "secondSeller",
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
    seller: "thirdSeller",
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
    seller: "thirdSeller",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "secondSeller",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "secondSeller",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "firstSeller",
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

const firstSellerInput = document.querySelector('#firstSeller');
const secondSellerInput = document.querySelector('#secondSeller');
const thirdSellerInput = document.querySelector('#thirdSeller');
const fourthSellerInput = document.querySelector('#fourthSeller');

function checkboxFirstSeller() {
  if (firstSellerInput.checked){
    if (fourthSellerInput.checked || secondSellerInput.checked || thirdSellerInput.checked){

    } else {
      secondSectionArticle.innerHTML = '';
    }
    const firstSellersArray = products.filter(product => product.seller === 'firstSeller')
    firstSellersArray.forEach(product => {
      let template = `
      <div class="product">
          <img src="${product.image}" alt="Error">
          <h4 id='name'>${product.name}</h4>
          <h4 id='price'>${product.price}€</h4>
          <h4 id='stars'>${product.stars}</h4>
          <h4 id='reviews'>Reviews ${product.reviews}</h4>
          <h4 id='disponibilidad'>${product.disponibilidad}</h4>
          <h4 id='seller'>Distribuido por ${product.seller}</h4>
      </div>
      `;
      secondSectionArticle.innerHTML += template;
    })
    } else {
      if (fourthSellerInput.checked || secondSellerInput.checked || thirdSellerInput.checked){
        const divs = document.querySelectorAll('.product');
        divs.forEach(product => {
          const seller = product.querySelector('h4#seller');
          if (seller.textContent === 'firstSeller') {
            product.remove();
          }
        })
      } else {
        secondSectionArticle.innerHTML = '';
        products.forEach((product) => {
          let template = `
              <div class="product">
                  <img src="${product.image}" alt="Error">
                  <h4 id='name'>${product.name}</h4>
                  <h4 id='price'>${product.price}€</h4>
                  <h4 id='stars'>${product.stars}</h4>
                  <h4 id='reviews'>Reviews ${product.reviews}</h4>
                  <h4 id='disponibilidad'>${product.disponibilidad}</h4>
                  <h4 id='seller'>Distribuido por ${product.seller}</h4>
              </div>
              `;
          secondSectionArticle.innerHTML += template;
      })
      }

    }
    secondSection.append(secondSectionArticle)
  }
  


firstSellerInput.addEventListener('change', checkboxFirstSeller)

function checkboxSecondSeller() {
  if (secondSellerInput.checked){
    if (fourthSellerInput.checked || firstSellerInput.checked || thirdSellerInput.checked){

    } else {
      secondSectionArticle.innerHTML = '';
    }
    const secondSellersArray = products.filter(product => product.seller === 'secondSeller')
    secondSellersArray.forEach(product => {
      let template = `
      <div class="product">
          <img src="${product.image}" alt="Error">
          <h4 id='name'>${product.name}</h4>
          <h4 id='price'>${product.price}€</h4>
          <h4 id='stars'>${product.stars}</h4>
          <h4 id='reviews'>Reviews ${product.reviews}</h4>
          <h4 id='disponibilidad'>${product.disponibilidad}</h4>
          <h4 id='seller'>Distribuido por ${product.seller}</h4>
      </div>
      `;
      secondSectionArticle.innerHTML += template;
    })
    } else {
      if (fourthSellerInput.checked || firstSellerInput.checked || thirdSellerInput.checked){

      } else {
        secondSectionArticle.innerHTML = '';
        products.forEach((product) => {
          let template = `
              <div class="product">
                  <img src="${product.image}" alt="Error">
                  <h4 id='name'>${product.name}</h4>
                  <h4 id='price'>${product.price}€</h4>
                  <h4 id='stars'>${product.stars}</h4>
                  <h4 id='reviews'>Reviews ${product.reviews}</h4>
                  <h4 id='disponibilidad'>${product.disponibilidad}</h4>
                  <h4 id='seller'>Distribuido por ${product.seller}</h4>
              </div>
              `;
          secondSectionArticle.innerHTML += template;
      })
      }

    }
    secondSection.append(secondSectionArticle)
  }
  


secondSellerInput.addEventListener('change', checkboxSecondSeller)

function checkboxThirdSeller() {
  if (thirdSellerInput.checked){
    if (firstSellerInput.checked || secondSellerInput.checked || fourthSellerInput.checked){

    } else {
      secondSectionArticle.innerHTML = '';
    }
    
    const thirdSellersArray = products.filter(product => product.seller === 'thirdSeller')
    thirdSellersArray.forEach(product => {
      let template = `
      <div class="product">
          <img src="${product.image}" alt="Error">
          <h4 id='name'>${product.name}</h4>
          <h4 id='price'>${product.price}€</h4>
          <h4 id='stars'>${product.stars}</h4>
          <h4 id='reviews'>Reviews ${product.reviews}</h4>
          <h4 id='disponibilidad'>${product.disponibilidad}</h4>
          <h4 id='seller'>Distribuido por ${product.seller}</h4>
      </div>
      `;
      secondSectionArticle.innerHTML += template;
    })
    } else {
      if (firstSellerInput.checked || secondSellerInput.checked || fourthSellerInput.checked){

      } else {
        secondSectionArticle.innerHTML = '';
        products.forEach((product) => {
          let template = `
              <div class="product">
                  <img src="${product.image}" alt="Error">
                  <h4 id='name'>${product.name}</h4>
                  <h4 id='price'>${product.price}€</h4>
                  <h4 id='stars'>${product.stars}</h4>
                  <h4 id='reviews'>Reviews ${product.reviews}</h4>
                  <h4 id='disponibilidad'>${product.disponibilidad}</h4>
                  <h4 id='seller'>Distribuido por ${product.seller}</h4>
              </div>
              `;
          secondSectionArticle.innerHTML += template;
      })
      }

    }
    secondSection.append(secondSectionArticle)
  }
  


thirdSellerInput.addEventListener('change', checkboxThirdSeller)

function checkboxPcComponentes() {
  if (fourthSellerInput.checked){
    if (firstSellerInput.checked || secondSellerInput.checked || thirdSellerInput.checked){

    } else {
      secondSectionArticle.innerHTML = '';
    }
    const PcComponentesArray = products.filter(product => product.seller === 'PcComponentes')
    PcComponentesArray.forEach(product => {
      let template = `
      <div class="product">
          <img src="${product.image}" alt="Error">
          <h4 id='name'>${product.name}</h4>
          <h4 id='price'>${product.price}€</h4>
          <h4 id='stars'>${product.stars}</h4>
          <h4 id='reviews'>Reviews ${product.reviews}</h4>
          <h4 id='disponibilidad'>${product.disponibilidad}</h4>
          <h4 id='seller'>Distribuido por ${product.seller}</h4>
      </div>
      `;
      secondSectionArticle.innerHTML += template;
    })
    } else {
      if (firstSellerInput.checked || secondSellerInput.checked || thirdSellerInput.checked){

      } else {
        secondSectionArticle.innerHTML = '';
        products.forEach((product) => {
          let template = `
              <div class="product">
                  <img src="${product.image}" alt="Error">
                  <h4 id='name'>${product.name}</h4>
                  <h4 id='price'>${product.price}€</h4>
                  <h4 id='stars'>${product.stars}</h4>
                  <h4 id='reviews'>Reviews ${product.reviews}</h4>
                  <h4 id='disponibilidad'>${product.disponibilidad}</h4>
                  <h4 id='seller'>Distribuido por ${product.seller}</h4>
              </div>
              `;
          secondSectionArticle.innerHTML += template;
      })
      }

    }
    secondSection.append(secondSectionArticle)
  }
  


fourthSellerInput.addEventListener('change', checkboxPcComponentes)