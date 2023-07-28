const products = [
  {
    link:"https://www.pccomponentes.com/asus-rog-strix-g15-g513rc-hf094-amd-ryzen-7-6800h-16gb-512gb-ssd-rtx3050-156",
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
    link:"https://www.pccomponentes.com/msi-gf63-thin-11uc-446xes-intel-core-i7-11800h-16gb-512gb-ssd-rtx-3050-156",
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
    link:"https://www.pccomponentes.com/asus-tuf-gaming-f15-fx506hc-hn004-intel-core-i5-11400h-16gb-512gb-ssd-rtx-3050-156",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1046/10466208/1836-asus-tuf-gaming-f15-fx506hc-hn004-intel-core-i5-11400h-16gb-512gb-ssd-rtx-3050-156.jpg",
    name: 'ASUS TUF Gaming F15 FX506HC-HN004 Intel Core i5-11400H/16GB/512GB SSD/RTX 3050/15.6"',
    price: 749,
    stars: '⭐⭐⭐⭐',
    reviews: 5824,
    disponibilidad: "Recibelo en 2 dias",
    seller: "OCASIONIA",
  },
  {
    link:"https://www.pccomponentes.com/hp-victus-15-fa0053ns-intel-core-i5-12450h-16gb-512gb-ssd-rtx-3050-156",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1073/10733296/1176-hp-victus-15-fa0053ns-intel-core-i5-12450h-16gb-512gb-ssd-rtx-3050-156.jpg",
    name: 'HP Victus 15-fa0053ns Intel Core i5-12450H/16GB/512GB SSD/RTX 3050/15.6"',
    price: 699,
    stars: '⭐⭐⭐',
    reviews: 10530,
    disponibilidad: "Recibelo mañana",
    seller: "PcComponentes",
  },
  {
    link:"https://www.pccomponentes.com/lg-ultragear-24gq50f-b-24-led-fullhd-165hz-freesync-premium",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1065/10658701/1132-lg-ultragear-24gq50f-b-24-led-fullhd-165hz-freesync-premium.jpg",
    name: 'LG Ultragear 24GQ50F-B 24" LED FullHD 165Hz FreeSync Premium',
    price: 170.99,
    stars: '⭐⭐⭐⭐',
    reviews: 3946,
    disponibilidad: "Recibelo mañana",
    seller: "ART",
  },
  {
    link:"https://www.pccomponentes.com/zotac-gaming-geforce-rtx-3060-twin-edge-lhr-12gb-gddr6",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/35/357142/1351-zotac-gaming-geforce-rtx-3060-twin-edge-12gb-gddr6.jpg",
    name: "Zotac Gaming GeForce RTX 3060 Twin Edge LHR 12GB GDDR6",
    price: 298.99,
    stars: '⭐⭐⭐⭐⭐',
    reviews: 6598,
    disponibilidad: "Recibelo en una semana",
    seller: "Vermegreen",
  },
  {
    link:"https://www.pccomponentes.com/forgeon-general-auriculares-gaming-inalambricos-pc-ps4-ps5-xbox-xbox-x-switch-negros",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/43/433832/1719-forgeon-general-auriculares-gaming-inalambricos-pc-ps4-ps5-xbox-xbox-x-switch-negros.jpg",
    name: "Forgeon General Auriculares Gaming Inalámbricos PC/PS4/PS5/Xbox/Xbox X/Switch Negros",
    price: 159.99,
    stars: '⭐⭐⭐⭐',
    reviews: 8524,
    disponibilidad: "Recibelo en 5 dias",
    seller: "PcComponentes",
  },
  {
    link:"https://www.pccomponentes.com/forgeon-clutch-teclado-gaming-rgb-60-switch-blue",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/43/433862/1296-forgeon-clutch-teclado-gaming-rgb-60-switch-blue-comprar.jpg",
    name: "Forgeon Clutch Teclado Gaming RGB 60% Switch Blue",
    price: 104.99,
    stars: '⭐⭐⭐⭐',
    reviews: 3265,
    disponibilidad: "Recibelo mañana",
    seller: "Vermegreen",
  },
  {
    link:"https://www.pccomponentes.com/tempest-apocalypse-combo-gaming-teclado-raton-auriculares-alfombrilla",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/22/224771/132-tempest-apocalypse-combo-gaming-teclado-raton-auriculares-alfombrilla-comprar.jpg",
    name: "Tempest Apocalypse Combo Gaming Teclado + Ratón + Auriculares + Alfombrilla",
    price: 41.99,
    stars: '⭐⭐⭐',
    reviews: 4250,
    disponibilidad: "Recibelo en 2 dias",
    seller: "PcComponentes",
  },
  {
    link:"https://www.pccomponentes.com/tempest-liquid-cooler-360-rgb-kit-de-refrigeracion-liquida-360mm-negro",
    image:"https://thumb.pccomponentes.com/w-300-300/articles/83/838092/1934-tempest-gaming-liquid-cooler-360-rgb-kit-de-refrigeracion-liquida.jpg",
    name: "Tempest Liquid Cooler 360 RGB Kit de Refrigeración Líquida 360mm Negro",
    price: 83.99,
    stars: '⭐⭐⭐⭐',
    reviews: 2310,
    disponibilidad: "Recibelo en una semana",
    seller: "OCASIONIA",
  },
  {
    link:"https://www.pccomponentes.com/forgeon-arcanite-argb-mesh-torre-atx-negra",
    image:"https://thumb.pccomponentes.com/w-300-300/articles/43/433834/1534-forgeon-arcanite-argb-mesh-cristal-templado-usb-32-negra.jpg",
    name: "Forgeon Arcanite ARGB Mesh Torre ATX Negra",
    price: 179.99,
    stars: '⭐⭐⭐⭐',
    reviews: 5410,
    disponibilidad: "Recibelo en una semana",
    seller: "OCASIONIA",
  },
  {
    link:"https://www.pccomponentes.com/owlotech-yale-v2-silla-oficina",
    image:"https://thumb.pccomponentes.com/w-300-300/articles/21/219315/1926-owlotech-yale-v2-silla-oficina-d8e81a21-6372-4d4e-996f-dcabae7e7eed.jpg",
    name: "Owlotech Yale V2 Silla Oficina",
    price: 85,
    stars: '⭐⭐⭐',
    reviews: 1119,
    disponibilidad: "Recibelo mañana",
    seller: "Vermegreen",
  },
  {
    link:"https://www.pccomponentes.com/msi-mag-forge-100m-cristal-templado-usb-32-rgb-negra",
    image:"https://thumb.pccomponentes.com/w-300-300/articles/25/259753/msi-mag-forge-100m-cristal-templado-usb-32-rgb-caracteristicas.jpg",
    name: "MSI MAG Forge 100M Cristal Templado USB 3.2 RGB Negra",
    price: 58.99,
    stars: '⭐⭐',
    reviews: 896,
    disponibilidad: "Recibelo mañana",
    seller: "Vermegreen",
  },
  {
    link:"https://www.pccomponentes.com/acer-nitro-50-intel-core-i5-12400f-16gb-1tb-512gb-ssd-gtx-1660-super",
    image:"https://thumb.pccomponentes.com/w-300-300/articles/1073/10733065/1771-acer-nitro-50-intel-core-i5-12400f-16gb-1tb-512gb-ssd-gtx-1660-super.jpg",
    name: "Acer Nitro 50 Intel Core i5-12400F/16GB/1TB + 512GB SSD/GTX 1660 SUPER",
    price: 749,
    stars: '⭐⭐⭐⭐⭐',
    reviews: 416,
    disponibilidad: "Recibelo en una semana",
    seller: "OCASIONIA",
  },
  {
    link:"https://www.pccomponentes.com/tempest-mirage-rgb-mesh-torre-atx-blanca",
    image:"https://thumb.pccomponentes.com/w-300-300/articles/1056/10563947/1622-tempest-mirage-rgb-mesh-torre-atx-blanca.jpg",
    name: "Tempest Mirage RGB Mesh Torre ATX Blanca",
    price: 84.99,
    stars: '⭐⭐⭐⭐',
    reviews: 238,
    disponibilidad: "Recibelo en 5 días",
    seller: "PcComponentes",
  },
  {
    link:"https://www.pccomponentes.com/owlotech-silla-de-oficina-stanford-blanca",
    image:"https://thumb.pccomponentes.com/w-300-300/articles/41/418593/1354-owlotech-silla-de-oficina-stanford-blanca.jpg",
    name: "Owlotech Silla de Oficina Stanford Blanca",
    price: 125.01,
    stars: '⭐⭐⭐⭐',
    reviews: 1038,
    disponibilidad: "Recibelo en 5 días",
    seller: "PcComponentes",
  },
];
if (typeof document !== "undefined") {

  const buscador = document.querySelector('#buscador');

  function onEnterPressed(event) {
    if (event.keyCode === 13){
      const buscandoPorNombre = products.filter(product => product.name.includes(event.target.value))
      secondSectionArticle.innerHTML = "";
      buscandoPorNombre.forEach(product => {
        let template = `
        <a class="product" href="${product.link}"> 
          <img src="${product.image}" alt="Error">
          <h4 id='name'>${product.name}</h4>
          <h4 id='price'>${product.price}€</h4>
          <h4 id='stars'>${product.stars}</h4>
          <h4 id='reviews'>Reviews ${product.reviews}</h4>
          <h4 id='disponibilidad'>${product.disponibilidad}</h4>
          <h4 id='seller'>Distribuido por ${product.seller}</h4>
        </a>
        `;
      secondSectionArticle.innerHTML += template;
    });
    secondSection.append(secondSectionArticle);
    }
  }

  buscador.addEventListener('keydown', onEnterPressed)

  const secondSectionArticle = document.createElement("article");
  const secondSection = document.querySelector("#second-section");

  function setUpProducts() {
    products.forEach((product) => {
      let template = `
        <a class="product" href="${product.link}"> 
          <img src="${product.image}" alt="Error">
          <h4 id='name'>${product.name}</h4>
          <h4 id='price'>${product.price}€</h4>
          <h4 id='stars'>${product.stars}</h4>
          <h4 id='reviews'>Reviews ${product.reviews}</h4>
          <h4 id='disponibilidad'>${product.disponibilidad}</h4>
          <h4 id='seller'>Distribuido por ${product.seller}</h4>
        </a>
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
        <a class="product" href="${product.link}"> 
          <img src="${product.image}" alt="Error">
          <h4 id='name'>${product.name}</h4>
          <h4 id='price'>${product.price}€</h4>
          <h4 id='stars'>${product.stars}</h4>
          <h4 id='reviews'>Reviews ${product.reviews}</h4>
          <h4 id='disponibilidad'>${product.disponibilidad}</h4>
          <h4 id='seller'>Distribuido por ${product.seller}</h4>
        </a>
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
          <a class="product" href="${product.link}"> 
            <img src="${product.image}" alt="Error">
            <h4 id='name'>${product.name}</h4>
            <h4 id='price'>${product.price}€</h4>
            <h4 id='stars'>${product.stars}</h4>
            <h4 id='reviews'>Reviews ${product.reviews}</h4>
            <h4 id='disponibilidad'>${product.disponibilidad}</h4>
            <h4 id='seller'>Distribuido por ${product.seller}</h4>
          </a>
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
        <a class="product" href="${product.link}"> 
        <img src="${product.image}" alt="Error">
        <h4 id='name'>${product.name}</h4>
        <h4 id='price'>${product.price}€</h4>
        <h4 id='stars'>${product.stars}</h4>
        <h4 id='reviews'>Reviews ${product.reviews}</h4>
        <h4 id='disponibilidad'>${product.disponibilidad}</h4>
        <h4 id='seller'>Distribuido por ${product.seller}</h4>
      </a>
      `;
        secondSectionArticle.innerHTML += template;
      });
    } else {
      if (firstSellerInput.checked) {
      } else {
        secondSectionArticle.innerHTML = "";
        products.forEach((product) => {
          let template = `
          <a class="product" href="${product.link}"> 
            <img src="${product.image}" alt="Error">
            <h4 id='name'>${product.name}</h4>
            <h4 id='price'>${product.price}€</h4>
            <h4 id='stars'>${product.stars}</h4>
            <h4 id='reviews'>Reviews ${product.reviews}</h4>
            <h4 id='disponibilidad'>${product.disponibilidad}</h4>
            <h4 id='seller'>Distribuido por ${product.seller}</h4>
          </a>
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
        <a class="product" href="${product.link}"> 
        <img src="${product.image}" alt="Error">
        <h4 id='name'>${product.name}</h4>
        <h4 id='price'>${product.price}€</h4>
        <h4 id='stars'>${product.stars}</h4>
        <h4 id='reviews'>Reviews ${product.reviews}</h4>
        <h4 id='disponibilidad'>${product.disponibilidad}</h4>
        <h4 id='seller'>Distribuido por ${product.seller}</h4>
      </a>
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
          <a class="product" href="${product.link}"> 
            <img src="${product.image}" alt="Error">
            <h4 id='name'>${product.name}</h4>
            <h4 id='price'>${product.price}€</h4>
            <h4 id='stars'>${product.stars}</h4>
            <h4 id='reviews'>Reviews ${product.reviews}</h4>
            <h4 id='disponibilidad'>${product.disponibilidad}</h4>
            <h4 id='seller'>Distribuido por ${product.seller}</h4>
          </a>
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
        <a class="product" href="${product.link}"> 
        <img src="${product.image}" alt="Error">
        <h4 id='name'>${product.name}</h4>
        <h4 id='price'>${product.price}€</h4>
        <h4 id='stars'>${product.stars}</h4>
        <h4 id='reviews'>Reviews ${product.reviews}</h4>
        <h4 id='disponibilidad'>${product.disponibilidad}</h4>
        <h4 id='seller'>Distribuido por ${product.seller}</h4>
      </a>
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
          <a class="product" href="${product.link}"> 
            <img src="${product.image}" alt="Error">
            <h4 id='name'>${product.name}</h4>
            <h4 id='price'>${product.price}€</h4>
            <h4 id='stars'>${product.stars}</h4>
            <h4 id='reviews'>Reviews ${product.reviews}</h4>
            <h4 id='disponibilidad'>${product.disponibilidad}</h4>
            <h4 id='seller'>Distribuido por ${product.seller}</h4>
          </a>
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
        <a class="product" href="${product.link}"> 
        <img src="${product.image}" alt="Error">
        <h4 id='name'>${product.name}</h4>
        <h4 id='price'>${product.price}€</h4>
        <h4 id='stars'>${product.stars}</h4>
        <h4 id='reviews'>Reviews ${product.reviews}</h4>
        <h4 id='disponibilidad'>${product.disponibilidad}</h4>
        <h4 id='seller'>Distribuido por ${product.seller}</h4>
      </a>
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
        <a class="product" href="${product.link}"> 
        <img src="${product.image}" alt="Error">
        <h4 id='name'>${product.name}</h4>
        <h4 id='price'>${product.price}€</h4>
        <h4 id='stars'>${product.stars}</h4>
        <h4 id='reviews'>Reviews ${product.reviews}</h4>
        <h4 id='disponibilidad'>${product.disponibilidad}</h4>
        <h4 id='seller'>Distribuido por ${product.seller}</h4>
      </a>
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
        <a class="product" href="${product.link}"> 
        <img src="${product.image}" alt="Error">
        <h4 id='name'>${product.name}</h4>
        <h4 id='price'>${product.price}€</h4>
        <h4 id='stars'>${product.stars}</h4>
        <h4 id='reviews'>Reviews ${product.reviews}</h4>
        <h4 id='disponibilidad'>${product.disponibilidad}</h4>
        <h4 id='seller'>Distribuido por ${product.seller}</h4>
      </a>
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
        <a class="product" href="${product.link}"> 
        <img src="${product.image}" alt="Error">
        <h4 id='name'>${product.name}</h4>
        <h4 id='price'>${product.price}€</h4>
        <h4 id='stars'>${product.stars}</h4>
        <h4 id='reviews'>Reviews ${product.reviews}</h4>
        <h4 id='disponibilidad'>${product.disponibilidad}</h4>
        <h4 id='seller'>Distribuido por ${product.seller}</h4>
      </a>
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
      <a class="product" href="${product.link}"> 
      <img src="${product.image}" alt="Error">
      <h4 id='name'>${product.name}</h4>
      <h4 id='price'>${product.price}€</h4>
      <h4 id='stars'>${product.stars}</h4>
      <h4 id='reviews'>Reviews ${product.reviews}</h4>
      <h4 id='disponibilidad'>${product.disponibilidad}</h4>
      <h4 id='seller'>Distribuido por ${product.seller}</h4>
    </a>
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
      <a class="product" href="${product.link}"> 
      <img src="${product.image}" alt="Error">
      <h4 id='name'>${product.name}</h4>
      <h4 id='price'>${product.price}€</h4>
      <h4 id='stars'>${product.stars}</h4>
      <h4 id='reviews'>Reviews ${product.reviews}</h4>
      <h4 id='disponibilidad'>${product.disponibilidad}</h4>
      <h4 id='seller'>Distribuido por ${product.seller}</h4>
    </a>
        `;
      secondSectionArticle.innerHTML += template;
    });
    secondSection.append(secondSectionArticle);


  }

  resetButton.addEventListener('click', onResetButtonClicked)
}


