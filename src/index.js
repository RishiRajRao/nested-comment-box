document
  .getElementById("first-btn")
  .addEventListener("click", showCommentInput);

function showCommentInput(e) {
  let div = createReponseBox();
  alert(e.target.innerText);
  e.target.innerText == "reply"
    ? e.target.parentElement.appendChild(div)
    : e.target.parentElement.parentElement.appendChild(div);
}

function createReponseBox() {
  let div = document.createElement("div");
  div.classList.add("response-box");
  let input = document.createElement("input");
  input.classList.add("input-box");
  let addBtn = document.createElement("button");
  addBtn.innerText = "enter";
  input.type = "text";
  input.placeholder = "enter the reply";
  addBtn.addEventListener("click", () => addComment(div, input.value));
  div.append(input, addBtn);
  return div;
}

function addComment(div, value) {
  div.querySelectorAll("*").forEach((n) => n.remove());
  let replyBtn = document.createElement("button");
  replyBtn.addEventListener("click", showCommentInput);
  replyBtn.innerText = "reply";
  let p = document.createElement("span");
  p.innerText = value;
  p.classList.add("input-box");
  div.append(p, replyBtn);
  div.classList.add("added");
}
