// js variable list 
const a = document.querySelector("#btn1");
const b = document.querySelector("#btn2");
const c = "blub" + "2" + ".png";
const d = "blub" + "1" + ".png";
const e = document.getElementById("blub1");
const f = document.querySelector("p");



// ON button event
a.addEventListener("click", () => {
  e.setAttribute("src", c);
  f.textContent = "Blub ON";
  f.style.color = "blue";
});

//OFF button event
b.addEventListener("click", () => {
  e.setAttribute("src", d);
  f.textContent = "Blub OFF";
  f.style.color = "black";
});
