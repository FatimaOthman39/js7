var AddProduct = document.querySelector(".AddProduct");
var NameInput = document.querySelector("#name");
var DescriptionInput = document.querySelector("#description");
var PriceInput = document.querySelector("#price");

var products = [];

AddProduct.onsubmit = function (e) {
    e.preventDefault();


    var product = {
        name: NameInput.value,
        price: PriceInput.value,
        description: DescriptionInput.value,
    };


    products.push(product);

    printProduct();


   
}

function printProduct() {
    var data = ``;
    for ( i = 0; i < products.length; i++) {
        data += `
        <tr>
            <td>${products[i].name}</td>
            <td>${products[i].description}</td>
            <td>${products[i].price}</td>
        </tr>
        `;
    }
    document.querySelector("tbody").innerHTML = data;
}

