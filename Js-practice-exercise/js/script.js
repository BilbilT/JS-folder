let fans = document.querySelector(".fans");
let fish = document.querySelector(".fish");
let pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});
