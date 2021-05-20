const a = document.querySelector("#btn1");
const b = document.querySelector("#btn2");

// ON button event
a.addEventListener("click", () => {
  const c = "blub" + "2" + ".png";

  document.getElementById("blub1").setAttribute("src", c);
  document.querySelector("p").textContent = "Blub ON";
  document.querySelector("p").style.color = "black";

  let e = document.getElementsByTagName("p");
  console.log(e);
});

//OFF button event
b.addEventListener("click", () => {
  const d = "blub" + "1" + ".png";

  document.getElementById("blub1").setAttribute("src", d);
   document.querySelector("p").textContent = "Blub OFF";
  document.querySelector("p").style.color = "blue";
});
