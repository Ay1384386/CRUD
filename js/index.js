var productname = document.getElementById("productname");
var productprice = document.getElementById("productprice");
var productmodel = document.getElementById("productmodel");
var productDecs = document.getElementById("productDecs");
var indexupdate = 0;
var addbtn = document.getElementById("addbtn");
var upload = document.getElementById("upload");

var productlist = [];
var searcinput = document.getElementById(" searcinput");

if (localStorage.getItem("productlist") != null) {
  productlist = JSON.parse(localStorage.getItem("productlist"));
  console.log(productlist);
  display(productlist);
}

function addProduct() {
  var product = {
    name: productname.value,
    price: productprice.value,
    model: productmodel.value,
    Decs: productDecs.value,
  };
  productlist.push(product);
  display(productlist);
  localStorage.setItem("productlist", JSON.stringify(productlist));
  clearForm();
}
function clearForm() {
  productname.value = "";
  productprice.value = "";
  productmodel.value = "";
  productDecs.value = "";
}
function display(product) {
  var cartona = ` `;
  for (var i = 0; i < productlist.length; i++) {
    cartona += `    <tr>
        <td>${i + 1}</td>
        <td>${productlist[i].name}</td>
        <td>${productlist[i].price}</td>
        <td>${productlist[i].model}</td>
        <td>${productlist[i].Decs}</td>
        
        <td>
            <button onclick="updata(${i})"  class="btn btn-warning btn-sm ">updata</button>
        </td>
        <td>
            <button onclick="deleteproduct(${i})" class=" btn btn-danger btn-sm">Delete</button>
        </td>
    </tr>`;
  }
  document.getElementById("tbady").innerHTML = cartona;
}
function deleteproduct(index) {
  productlist.splice(index, 1);
  localStorage.setItem("productlist", JSON.stringify(productlist));
  display(product);
}
function searchName() {
  var term = searcinput.value;
  var cartona = ` `;
  for (var i = 0; i < productlist.length; i++) {
    if (productlist[i].name.toLowerCase().includes(term.toLowerCase())) {
      cartona += `  
          <tr>
        <td>${i + 1}</td>
        <td>${productlist[i].name}</td>
        <td>${productlist[i].price}</td>
        <td>${productlist[i].model}</td>
        <td>${productlist[i].Decs}</td>
        
        <td>
            <button class="btn btn-warning btn-sm">updata</button>
        </td>
        <td>
            <button onclick="deleteproduct(${i})" class=" btn btn-danger btn-sm">Delete</button>
        </td>
    </tr>`;
    }
    document.getElementById("tbady").innerHTML = cartona;
  }
}
function updata(index) {
  indexupdate = index;
  var carent = productlist[index];
  productname.value = carent.name;
  productprice.value = carent.price;
  productmodel.value = carent.model;
  productDecs.value = carent.Decs;
  upload.classList.remove("d-none");
  addbtn.classList.add("d-none");
}
function uploadproduct() {
  var product = {
    name: productname.value,
    price: productprice.value,
    model: productmodel.value,
    Decs: productDecs.value,
  };
  productlist.splice(indexupdate, 1, product);
  localStorage.setItem("productlist", JSON.stringify(productlist));
  display(productlist);
  upload.classList.remove("d-none");
  addbtn.classList.add("d-none");
  clearForm();
}
