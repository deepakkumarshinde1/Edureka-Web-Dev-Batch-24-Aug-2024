async function getData() {
  try {
    let url = `https://fakestoreapi.com/products`;
    let response = await fetch(url, {
      method: "GET",
    });
    let data = await response.json();
    printProducts(data);
  } catch (error) {
    alert(error.message);
  }
}

function printProducts(products) {
  let list = products.map(function (product) {
    return `<section class="card">
                        <img
                        src="${product.image}"
                        alt=""
                        />
                        <h4>${product.title}</h4>
                        <p>${product.category}</p>
                        <p>$ ${product.price}</p>
                    </section>`;
  });
  let cards = document.querySelector(".cards");
  cards.innerHTML = list.join("");
}

getData();

// error handling
async function div(a, b) {
  try {
    if (b === 0) {
      throw new Error(`Can't divide by zero`);
    }
    return Promise.resolve(a / b);
  } catch (error) {
    return Promise.reject(error.message);
  }
} // promise

console.log("--- start ----");
div(10, 20)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
console.log("---- end ----");
