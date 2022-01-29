
let p = document.createElement("p");
let input = document.createElement("input");
input.className = "bg-washed-blue ba br3"

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

/* 全体の表示領域 */
const idea_container = document.getElementById("idea-area");

/* テーブル自体の変数 */
const idea_table = document.createElement("table");
idea_table.className = "b--black-20 mb4";

/* テーブルのヘッダを生成 */
const table_header = document.createElement("thead");
const head_tr = document.createElement("tr");
head_tr.className = "bg-light-blue w-9-ns";
const head_item = ["ID", "概要", "日付", "完了"];
head_item.forEach(item => {
	let th_obj = document.createElement("th");
	th_obj.className = "pb3 pr3";
	th_obj.textContent = item;
	head_tr.appendChild(th_obj);
});
/* テーブルにヘッダを展開 */
table_header?.appendChild(head_tr);

/* ヘッダをテーブルに追加する */
idea_table?.appendChild(table_header);
idea_container?.appendChild(idea_table);

const table_body = document.createElement("tbody");

window.addEventListener("load", (e) => {
	const httpRequest = new XMLHttpRequest();
	httpRequest.open("GET", "./backend/getIdeaList.php");
	httpRequest.onreadystatechange = () => {
		if(httpRequest.readyState === 4 && httpRequest.status == 200){
			const jsonText = httpRequest.responseText;
			const json = JSON.parse(jsonText);
			if(json.result == 1){
				loadIdeaTable(json.list);
			}else{
				p.textContent = "登録に失敗しました";
			}
		}
	}
	httpRequest.send();
});

function loadIdeaTable(arr: any[]): boolean {
	let result :boolean = false;
	arr.forEach(el => {
		/* 配列をそれぞれのセルに展開して行内容を生成 */
		let idea = document.createElement("tr");
		idea.className = "stripe-dark";
		Object.keys(el).forEach(member => {

			let cell = document.createElement("td");
			cell.className = "pv2 pr5 bb w-100";
			let cell_content = document.createElement("p");
			//cell_content.className = "tc center";
			cell_content.textContent = el[member];
			cell.appendChild(cell_content);
			idea.appendChild(cell);
		});

		let btn = document.createElement("input");
		btn.className = "pv2 mr4 fw3";
		btn.type = "button";
		btn.value = "完了";
		btn.addEventListener("click", () => {
			p.textContent = "完了します";
			const httpRequest = new XMLHttpRequest();
			httpRequest.open("POST", "./backend/disableIdea.php");
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

			let post_data: FormData = new FormData();
			post_data.append("id", el.id);
			httpRequest.send(post_data);
		});

		let btn_cell = document.createElement("td");
		btn_cell.className = "pr5  bb ";
		btn_cell.appendChild(btn);
		idea.appendChild(btn_cell);
		table_body?.appendChild(idea);
		idea_table?.appendChild(table_body);
	});
	return result;
}
