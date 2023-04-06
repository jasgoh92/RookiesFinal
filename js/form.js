// Data below received from backend database. Should be updated almost immediately for any changes

const dishNames = ["Chicken Wing Set", "Fish Set", "Rendang Beef Set","Sambal Sotong Set"];
const sideDishes =["Chicken Wing","Fish","Rendang Beef","Sambal Sotong","Egg Sunny","Ikan Bilis","Luncheon Meat","Otah"];
const images = ["img src=(images/Chicken_Wing_Set.jpg)", ]
const priceDishSets = [ 4.50, 5.00, 6.00, 5.50];

// Update the list in HTML

let dishName=" ";

for (let i=0; i < dishNames.length; i++) {

    dishName += 
    `<option value="${dishNames[i]}"</option>`;
    document.querySelector("#dishNames").innerHTML= dishName;   
};
console.log(dishName);

let sideDishName=" ";

for (let i=0; i < sideDishes.length; i++) {

    sideDishName += 
    `<option value="${sideDishes[i]}"</option>`;
    
    document.querySelector("#sideDishes").innerHTML= sideDishName;   
};
console.log(sideDishes);


let imageName = "src "

function addDishForm() {

    
    const getDishName = document.querySelector("#addDishName").value;

    let checkExist = false;
    
    for (let i=0; i < dishNames.length; i++){

        if (getDishName.toLowerCase() == dishNames[i].toLowerCase()){
            checkExist = true;
            break;

        }
        
    }

    if (checkExist) {
        document.querySelector("#outputDishName").innerHTML = `${getDishName} is already in the Dish Name List`;
    } else {
        dishNames.push(getDishName);
        document.querySelector("#outputDishName").innerHTML = `${getDishName} is NOT in the Dish Name List and is added successfully`;
    }

    console.log(dishNames);
}


function addSideDishForm() {

    
    const getSideDishName = document.querySelector("#addSideDishName").value;

    let checkExist = false;
    
    for (let i=0; i < sideDishes.length; i++){

        if (getSideDishName.toLowerCase() == sideDishes[i].toLowerCase()){
            checkExist = true;
            break;
        }
        
    }

    if (checkExist) {
        document.querySelector("#outputSideDish").innerHTML = `${getSideDishName} is already in the Dish Name List`;
    } else {
        sideDishes.push(getDishName);
        document.querySelector("#outputSideDish").innerHTML = `${getSideDishName} is NOT in the Dish Name List and is added successfully`;
    }

    console.log(sideDishes);
}

function addImageForm() {


}


// Update the list in HTML

let addSelectDishName=" ";

for (let i=0; i < dishNames.length; i++) {
    addSelectDishName += `<option>${dishNames[i]}</option>`;
    //console.log(addSelectDishName);
    document.querySelector("#dishNameSet").innerHTML= addSelectDishName;   
};

let addSelectSideDishName=" ";

for (let i=0; i < sideDishes.length; i++) {

    addSelectSideDishName += `
    
    <div class="form-check">
    <input type="checkbox" class="form-check-input" id="sideDish${i+1}" name="sideDish${i+1}" value="${i+1}">
    <label class="form-check-label" for="sideDish${i+1}">${sideDishes[i]}</label>
  </div>`
     //console.log(addSelectSideDishName);

  document.querySelector("#selectSideDishes").innerHTML = addSelectSideDishName;
}

function priceSetForm() {

    
    const getPriceDish = document.querySelector("#priceDishSet").value;
    
    document.querySelector("#outputPrice").innerHTML = `Your Unit Price is SGD ${getPriceDish}`;

        console.log(getPriceDish);
   
    }

   