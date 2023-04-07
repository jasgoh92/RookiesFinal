const dish1 = {
    id: "0",
    name: "Nasi Lemak with keropok",
    description: "dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "4.80",
    image: "images/nasi0.jpg",
    sideDishes: "Chicken Wing & Otah"
};
const dish2 = {
    id: "1",
    name: "Nasi Lemak with egg",
    description: "dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "4.80",
    image: "images/nasi1.jpg",
    sideDishes: "Fish & Luncheon meat"
};
const dish3 = {
    id: "2",
    name: "Nasi Lemak with drumstick",
    description: "dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "4.80",
    image: "images/nasi2.jpg",
    sideDishes: "Rendang beef & Ikan bilis"
};
const dish4 = {
    id: "3",
    name: "Nasi Lemak with salted egg",
    description: "dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "4.80",
    image: "images/nasi3.jpg",
    sideDishes: "Sambal sotong & Rendang beef"
};
const dish5 = {
    id: "4",
    name: "Nasi Lemak with long beans",
    description: "dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "4.80",
    image: "images/nasi4.jpg",
    sideDishes: "Egg sunny & Sambal soton"
};
const dish6 = {
    id: "5",
    name: "Nasi Lemak with tempeh",
    description: "dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "4.80",
    image: "images/nasi5.jpg",
    sideDishes: "Luncheon meat & Chicken wing"
};

const dishes = [];
dishes.push(dish1, dish2, dish3, dish4, dish5, dish6);

displayDishes = (dishes) => {
    let details = "";
    details = `<h1 class="text-primary text-center" style="margin-top: 50px;">Dishes List</h1>
    <div class="container-fluid" style="margin-bottom: 70px;">
      <div class="row">`;
    for (let i = 0; i < dishes.length; i++) {
        details += `
          <div class="col-sm-4 bg-success-subtle p-5">
          <img
            class="w-100 h-50 img-fluid object-fit-cover pt-2"
            alt="Full-width image"
            src=${dishes[i].image}
          />
          <h6 class="text-center">
            <b>${dishes[i].name} $${dishes[i].price}</b>
          </h6>
          <p>
            ${dishes[i].description}
          </p>

          <button class="btn btn-danger btn-xs">
            <a
              class="nav-link"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#dishesModal"
              onClick="displayDetails(${i})"
              >More</a>
          </button>
        </div>
        `;
    }
    details += `
        </div>
    </div>`;
    document.querySelector("#dishesList").innerHTML = details;
};
displayDishes(dishes);

function displayDetails(index) {
  //When user clicks on any "More" button, the details of the selected product will be displayed
  document.querySelector("#modalImg").src = dishes[index].image;
  document.querySelector("#modalName").innerHTML = dishes[index].name;
  document.querySelector("#modalPrice").innerHTML = dishes[index].price;
  document.querySelector("#modalDescription").innerHTML = dishes[index].description;
  document.querySelector("#modalSideDishes").innerHTML = dishes[index].sideDishes;
};

