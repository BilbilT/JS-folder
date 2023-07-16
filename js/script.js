let button = document.querySelector(".show-cat");
//console.log(button);

let cat = document.querySelector(".cat");
//console.log(cat);

button.addEventListener("click", function () {
  button.innerText = "It's working";
  cat.classList.add("show");
});
