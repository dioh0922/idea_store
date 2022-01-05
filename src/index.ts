
let p = document.createElement("p");
let input = document.createElement("input");
let button = document.createElement("button");
button.textContent = "登録する";

button.addEventListener("click", () => {
	p.textContent = "登録しています";
	const httpRequest = new XMLHttpRequest();
	httpRequest.open("POST", "./backend/saveIdea.php", true);
	httpRequest.onreadystatechange = () => {
		if(httpRequest.readyState === 4 && httpRequest.status == 200){
			const jsonText = httpRequest.responseText;
			const json = JSON.parse(jsonText);
			if(json.result == 1){
				location.reload();
			}else{
				p.textContent = "登録に失敗しました";
			}
		}
	}
	const post_data: FormData = new FormData();
	post_data.append("text", input.value);
	httpRequest.send(post_data);
});

const app = document.getElementById("app");
app?.appendChild(input);
app?.appendChild(p);
app?.appendChild(button);
