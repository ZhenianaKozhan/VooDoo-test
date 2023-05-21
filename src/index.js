import { fetchData } from "./js/api.js";

const productList = document.querySelector(".js-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hidden");
});

const serchProduct = async () => {
  try {
    const query = await fetchData();
    appendProductMarcup(query);
  } catch (error) {
    console.log(error);
    onError();
  }
};

serchProduct();

const appendProductMarcup = (data) => {
  productList.insertAdjacentHTML(
    "beforeend",
    createMarcupProductList(data.products)
  );
};

function createMarcupProductList(products) {
  return products
    .map(
      ({ id, images, title, variants }) => `
    <div id=${id} class="group relative">
              <div
                class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
              >
                <img
                  src="${images[0].src}"
                  alt="${title}"
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div class="mt-3 mb-3 flex justify-between font-normal text-base leading-5">
                <div class="font-bold">
                  <h3>
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      ${title}
                    </a>
                  </h3>
                  <p>${variants[0].price}$</p>
                </div>
                <div>
                  <h3 class="font-medium">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Condition
                  </h3>
                  <p class="font-normal">Slightly used</p>
                </div>
              </div>
              <button class="sm:hidden py-4 rounded-md bg-black w-full text-center text-white font-normal font-semibold text-base leading-5">PICK-UP IN 2200</button>
            </div>
    `
    )
    .join("");
}

const onError = () => {
  return alert("sorry, server error");
};
