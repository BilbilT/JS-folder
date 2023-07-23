// let button = document.querySelector(".show-cat");
// //console.log(button);

// let cat = document.querySelector(".cat");

// button.addEventListener("click", function () {
//   button.innerText = "It's working";
//   cat.classList.add("show");
// });

let button = document.querySelector(".show-cat");

let cat = document.querySelector(".cat");

button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
  } else {
    cat.classList.add("show");
    button.innerText = "Shoo, cat!";
    button.classList.remove("disappear");
  }
  //cat.classList.add("show");
});
