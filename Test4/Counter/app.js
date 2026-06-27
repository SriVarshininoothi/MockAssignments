let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");

let value = document.getElementById("count");
let reset = document.getElementById("reset");

let count = 0;

increment.addEventListener("click", function(){
   count = count+1;
   value.textContent = count;
   value.classList.add("green");
   value.classList.remove("red");

});

decrement.addEventListener("click", function(){
   count = count-1;
   value.textContent = count;
   value.classList.remove("green");
   value.classList.add("red");

});

reset.addEventListener("click", function(){
   count = 0;
   value.textContent = count;
   value.classList.add("black");   
   value.classList.remove("red");
   value.classList.remove("green");

});