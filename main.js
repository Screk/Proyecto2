const products = [
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1066/10668663/1329-asus-rog-strix-g15-g513rc-hf094-amd-ryzen-7-6800h-16gb-512gb-ssd-rtx3050-156.jpg",
    name: 'ASUS ROG Strix G15 G513RC-HF094 AMD Ryzen 7 6800H/16GB/512GB SSD/RTX3050/15.6"',
    price: 849,
    stars: '⭐⭐⭐⭐⭐',
    reviews: 12520,
    disponibilidad: "Recibelo en dos días",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/83/837985/1667-msi-gf63-thin-11uc-446xes-intel-core-i7-11800h-16gb-512gb-ssd-rtx-3050-156.jpg",
    name: 'MSI GF63 Thin 11UC-446XES Intel Core i7-11800H/16GB/512GB SSD/RTX 3050/15.6"',
    price: 749,
    stars: '⭐⭐⭐⭐',
    reviews: 8670,
    disponibilidad: "Recibelo mañana",
    seller: "Vermegreen",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1046/10466208/1836-asus-tuf-gaming-f15-fx506hc-hn004-intel-core-i5-11400h-16gb-512gb-ssd-rtx-3050-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 457,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "OCASIONIA",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1073/10733296/1176-hp-victus-15-fa0053ns-intel-core-i5-12450h-16gb-512gb-ssd-rtx-3050-156.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 389,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1065/10658701/1132-lg-ultragear-24gq50f-b-24-led-fullhd-165hz-freesync-premium.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 689,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "ART",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/35/357142/1351-zotac-gaming-geforce-rtx-3060-twin-edge-12gb-gddr6.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 29,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "Vermegreen",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/43/433832/1719-forgeon-general-auriculares-gaming-inalambricos-pc-ps4-ps5-xbox-xbox-x-switch-negros.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 89,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/43/433862/1296-forgeon-clutch-teclado-gaming-rgb-60-switch-blue-comprar.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 989,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "Vermegreen",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/22/224771/132-tempest-apocalypse-combo-gaming-teclado-raton-auriculares-alfombrilla-comprar.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/83/838092/1934-tempest-gaming-liquid-cooler-360-rgb-kit-de-refrigeracion-liquida.jpg",
    name: "HP Essentials 255 G8 AMD",
    price: 300,
    stars: 4,
    reviews: 250,
    disponibilidad: "Recibelo mañana",
    seller: "OCASIONIA",
  },
];
if (typeof document !== "undefined") {
  const secondSectionArticle = document.createElement("article");
  const secondSection = document.querySelector("#second-section");

  function setUpProducts() {
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
    });
    secondSection.append(secondSectionArticle);
  }

  setUpProducts();

  const firstSellerInput = document.querySelector("#firstSeller");
  const secondSellerInput = document.querySelector("#secondSeller");
  const thirdSellerInput = document.querySelector("#thirdSeller");
  const fourthSellerInput = document.querySelector("#fourthSeller");

  function checkboxFirstSeller() {
    if (firstSellerInput.checked) {
      if (secondSellerInput.checked) {
      } else {
        secondSectionArticle.innerHTML = "";
      }
      const firstSellersArray = products.filter(
        (product) => product.seller === "OCASIONIA"
      );
      firstSellersArray.forEach((product) => {
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
      });
    } else {
      if (secondSellerInput.checked) {
        const divs = document.querySelectorAll(".product");
        divs.forEach((product) => {
          const seller = product.querySelector("h4#seller");
          if (seller.textContent === "firstSeller") {
            product.remove();
          }
        });
        secondSectionArticle.innerHTML = "";
        let divsContent = "";
        divs.forEach((product) => {
          divsContent += product.outerHTML;
        });
        secondSectionArticle.innerHTML = divsContent;
      } else {
        secondSectionArticle.innerHTML = "";
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
        });
      }
    }
    secondSection.append(secondSectionArticle);
  }

  firstSellerInput.addEventListener("change", checkboxFirstSeller);

  function checkboxSecondSeller() {
    if (secondSellerInput.checked) {
      if (firstSellerInput.checked) {
      } else {
        secondSectionArticle.innerHTML = "";
      }
      const secondSellersArray = products.filter(
        (product) => product.seller === "Vermegreen"
      );
      secondSellersArray.forEach((product) => {
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
      });
    } else {
      if (firstSellerInput.checked) {
      } else {
        secondSectionArticle.innerHTML = "";
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
        });
      }
    }
    secondSection.append(secondSectionArticle);
  }

  secondSellerInput.addEventListener("change", checkboxSecondSeller);

  function checkboxThirdSeller() {
    if (thirdSellerInput.checked) {
      if (
        firstSellerInput.checked ||
        secondSellerInput.checked ||
        fourthSellerInput.checked
      ) {
      } else {
        secondSectionArticle.innerHTML = "";
      }

      const thirdSellersArray = products.filter(
        (product) => product.seller === "ART"
      );
      thirdSellersArray.forEach((product) => {
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
      });
    } else {
      if (
        firstSellerInput.checked ||
        secondSellerInput.checked ||
        fourthSellerInput.checked
      ) {
      } else {
        secondSectionArticle.innerHTML = "";
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
        });
      }
    }
    secondSection.append(secondSectionArticle);
  }

  thirdSellerInput.addEventListener("change", checkboxThirdSeller);

  function checkboxPcComponentes() {
    if (fourthSellerInput.checked) {
      if (
        firstSellerInput.checked ||
        secondSellerInput.checked ||
        thirdSellerInput.checked
      ) {
      } else {
        secondSectionArticle.innerHTML = "";
      }
      const PcComponentesArray = products.filter(
        (product) => product.seller === "PcComponentes"
      );
      PcComponentesArray.forEach((product) => {
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
      });
    } else {
      if (
        firstSellerInput.checked ||
        secondSellerInput.checked ||
        thirdSellerInput.checked
      ) {
      } else {
        secondSectionArticle.innerHTML = "";
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
        });
      }
    }
    secondSection.append(secondSectionArticle);
  }

  fourthSellerInput.addEventListener("change", checkboxPcComponentes);

  const opciones = document.querySelector("#opciones");

  function onInputSelectChanged() {
    const opcionElegida = opciones.value;
    secondSectionArticle.innerHTML = "";
    if (opcionElegida === "OCASIONIA") {
      const firstSellerArray = products.filter(
        product => product.seller === "OCASIONIA"
      );
      firstSellerArray.forEach((product) => {
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
      });
      secondSection.append(secondSectionArticle);
    } else if (opcionElegida === "Vermegreen") {
      const secondSellerArray = products.filter(
        (product) => product.seller === "Vermegreen"
      );
      secondSellerArray.forEach((product) => {
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
      });
      secondSection.append(secondSectionArticle);
    } else if (opcionElegida === "ART") {
      const thirdSellerArray = products.filter(
        (product) => product.seller === "ART"
      );
      thirdSellerArray.forEach((product) => {
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
      });
      secondSection.append(secondSectionArticle);
    } else if (opcionElegida === "PcComponentes") {
      const PcComponentesArray = products.filter(
        (product) => product.seller === "PcComponentes"
      );
      PcComponentesArray.forEach((product) => {
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
      });
      secondSection.append(secondSectionArticle);
    }
  }

  opciones.addEventListener("change", onInputSelectChanged);

  const numberInput = document.querySelector("#first-section-inputNumber");
  const button = document.querySelector('.button');

  function onButtonClicked() {
    const inputValue = numberInput.value
    secondSectionArticle.innerHTML = "";

    const filtroPrecios = products.filter(product => product.price <= inputValue)
    filtroPrecios.forEach((product) => {
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
    });
    secondSection.append(secondSectionArticle);

    
  }

  button.addEventListener('click', onButtonClicked)

  const resetButton = document.querySelector('#resetButton');

  function onResetButtonClicked() {
    document.querySelector('#opciones').value = '';
    document.querySelector('#firstSeller').checked = false;
    document.querySelector('#secondSeller').checked = false;
    numberInput.value = '';
    secondSectionArticle.innerHTML = '';
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
    secondSection.append(secondSectionArticle);


  }

  resetButton.addEventListener('click', onResetButtonClicked)
}


