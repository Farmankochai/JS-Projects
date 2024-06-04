let params = new URLSearchParams(location.search);

let name = params.get('name');
let id = params.get('id');
let email = params.get('email');
let phoneNumber = params.get('phoneNumber');
let address = params.get('address');

console.log(name);
console.log(id);
console.log(email);
console.log(phoneNumber);
console.log(address);

let employeeName = document.getElementById("name");
employeeName.innerText = name;
let employeeId = document.getElementById("id");
employeeId.innerText = id;
let employeeEmail = document.getElementById("email");
employeeEmail.innerText = email;
let employeephoneNumber = document.getElementById("phoneNumber");
employeephoneNumber.innerText = phoneNumber;
let employeeaddress = document.getElementById("address");
employeeaddress.innerText = address;

