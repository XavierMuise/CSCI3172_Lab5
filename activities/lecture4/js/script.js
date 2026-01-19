let age = 60;
let name = "Gary chu de poule";
let enrollment = false;

if(enrollment == true){

} 

main = document.getElementById("main");

const p = document.createElement("p");

p.textContent = name + " is " + age + " years old, in 8 years they will be " + (age + 8);

main.appendChild(p);
