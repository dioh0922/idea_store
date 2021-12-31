let p = document.createElement("p");
let input = document.createElement("input");

input.addEventListener("input", () =>
	p.textContent = input.value.toUpperCase()
);

const app = document.getElementById("app");
app?.appendChild(input);
app?.appendChild(p);
