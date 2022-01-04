let p = document.createElement("p");
let input = document.createElement("input");
let button = document.createElement("button");
button.textContent = "保存する";

button.addEventListener("click", () => {
	const httpRequest = new XMLHttpRequest();
	httpRequest.open("POST", "./backend/saveIdea.php", true);
	httpRequest.onreadystatechange = () => {
		if(httpRequest.readyState === 4 && httpRequest.status == 200){
			const jsonText = httpRequest.responseText;
			const json = JSON.parse(jsonText);
			console.log(json);
		}
	}
	let post_data = {text: input.value};
	httpRequest.send(JSON.stringify(post_data));
});

const app = document.getElementById("app");
app?.appendChild(input);
app?.appendChild(p);
app?.appendChild(button);
