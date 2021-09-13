console.log("This is linked correctly!");

 let listElements= document.querySelectorAll("li");

 console.log(listElements);


let formElements= document.querySelectorAll(".formElement");
console.log( formElements);


let country= document.querySelector('#userCountry');
console.log(country);


console.log(country.value);
console.log(listElements[0].textContent);

listElements[0].textContent= "Changed through JS";
console.log(listElements[0].textContent);

let menu = document.querySelectorAll('ul.menu');
console.log ( menu.innerHTML) += "<li> Logout </li>";

/*
${new tex here} to avoid using the + symbol in Strings
*/






