// Data below received from backend database. Should be updated almost immediately for any changes

const dishNames = ["Chicken Wing Set", "Fish Set", "Rendang Beef Set", "Sambal Sotong Set"];
const sideDishes = ["Chicken Wing", "Fish", "Rendang Beef", "Sambal Sotong", "Rendang Mutton", "Egg Sunny", "Ikan Bilis", "Luncheon Meat", "Otah"];
const images = ["img src=(images/Chicken_Wing_Set.jpg)",]
const priceDishSets = [4.50, 5.00, 6.00, 5.50];

// Update the list in HTML

let addSelectSideDishName = " ";

for (let i = 0; i < sideDishes.length; i++) {

  addSelectSideDishName += `
    
    <div class="form-check">
    <input type="checkbox" class="form-check-input" id="sideDish${i}" name="sideDish${i}" value="${i}">
    <label class="form-check-label" for="sideDish${i}">${sideDishes[i]}</label>
  </div>`

  document.querySelector("#selectSideDishes").innerHTML = addSelectSideDishName;
};

function PreviewImage() {
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("myImage").files[0]);

  oFReader.onload = function (oFREvent) {
    document.getElementById("uploadPreview").src = oFREvent.target.result;
  };

};

function dishSet() {

  const dishName = document.querySelector("#addDishName").value;
  document.querySelector("#outputDish").innerHTML = `Output Test Run = ${dishName}`;

  const priceDish = document.querySelector("#priceDishSet").value;
  document.querySelector("#outputPrice").innerHTML = `Output Test Run = ${priceDish}`;

  //Create an Array.
  var selected = new Array();

  //Reference the Table.
  var sideDish = document.getElementById("selectSideDishes");

  //Reference all the CheckBoxes in Table.
  var chks = sideDish.getElementsByTagName("INPUT");

  // Loop and push the checked CheckBox value in Array.
  for (var i = 0; i < chks.length; i++) {
    if (chks[i].checked) {
      selected.push(chks[i].value);
    }
  }

  //Display the selected CheckBox values.

  var sideDishList =[];

  if (selected.length > 0) {
    // alert("Selected values: " + selected.join(","));
    //let sideDishList = [];

    for (let i = 0; i < selected.length; i++) {

      sideDishList += sideDishes[selected[i]] + " ";

      console.log(sideDishList)
      document.querySelector("#outputSideDish").innerHTML = `Output Test Run =${sideDishList}`;
    }
    
  }

  
    addProduct(dishName, "images/logo.jpg", sideDishList, priceDish);
    displayProduct() 

};

// Below is the test for the set object

const set1 = {
  name: "Chicken Wing Set",
  image: "images/Chicken_Wing_Set.jpg",
  sideDishes: "Chicken Wing, Ikan Bilis, Egg Sunny",
  price: "5.00"
}

/*const set2 = {
  name: "Fish Set",
  image: "images/nasi1.jpg",
  sideDishes: "Fish, Ikan Bilis, Egg Sunny",
  price: "6.00"
}*/

const productList = [];
productList.push(set1);

function displayProduct() {

  let display = " ";

  for (let i = 0; i < productList.length; i++) {

    display += `
        
      <div class="col-lg-4">
        <div class="card" style="width: 18rem;">
            <img src=${productList[i].image}
                class="card-img-top" alt="image" />
            <div class="card-body">
                <h5 class="card-title">${productList[i].name}</h5>
                <p class="card-text">${productList[i].sideDishes}</p>
                <p class="card-price">Unit Price : SGD ${productList[i].price}</p>
            </div>
        </div>
    </div>`

  }

  document.querySelector("#row").innerHTML = display;

} //End of displayProduct function

function addProduct(dishName, myImage, sideDishList, priceDish) {

  // The parameters will be sent in from another function through the argument

  const productItem = {
    name: dishName,
    image: myImage,
    sideDishes: sideDishList,
    price: priceDish
  }

  productList.push(productItem);
}

// Below is hardcoded now. The individual property value will be send in via backend.

addProduct("Redang Beef Set", "images/nasi4.jpg", "Rendang Beef,Egg Sunny, Ikan Bilis", "7.50");

displayProduct();


