let toggle = document.querySelector("#toggle");
//console.log(toggle);
let ball = document.querySelector(".ball");
//console.log(ball);
let catH1 = document.querySelector("h1");
//console.log(catPhoto);
let body = document.querySelector("body");
//console.log(body);

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    catH1.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    catH1.innerText = "Party Quincy";
  }
});
