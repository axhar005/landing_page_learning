console.log("Illo");

const container = document.querySelector("#container");
const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I’m red!";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I’m a blue h3!";
container.appendChild(h3);

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

const div_h1 = document.createElement("h1");
div_h1.textContent = "I’m in a div";
div.appendChild(div_h1);

const div_p = document.createElement("p");
div_p.textContent = "ME TOO!";
div.appendChild(div_p);

container.appendChild(div);


const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});
  