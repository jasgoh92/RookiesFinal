// Data below received from backend database. Should be updated almost immediately for any changes

const dishNames = ["Chicken Wing Set", "Fish Set", "Rendang Beef Set","Sambal Sotong Set"];
const sideDishes =["Chicken Wing","Fish","Rendang Beef","Sambal Sotong","Egg Sunny","Ikan Bilis","Luncheon Meat","Otah"];
const images = ["img src=(images/Chicken_Wing_Set.jpg)", ]
const priceDishSets = [ 4.50, 5.00, 6.00, 5.50];

// Update the list in HTML

let addSelectSideDishName=" ";

for (let i=0; i < sideDishes.length; i++) {

    addSelectSideDishName += `
    
    <div class="form-check">
    <input type="checkbox" class="form-check-input" id="sideDish${i+1}" name="sideDish${i+1}" value="${i+1}">
    <label class="form-check-label" for="sideDish${i+1}">${sideDishes[i]}</label>
  </div>`
     

  document.querySelector("#selectSideDishes").innerHTML = addSelectSideDishName;
};


   