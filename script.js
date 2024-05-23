function createList(array) {
  if (!Array.isArray(array)) {
    console.error("Wprowadź dane w formie tablicy.");
    return;
  }
  const ul = document.createElement("ul");
  ul.id = "list";
  const body = document.querySelector("body");
  body.appendChild(ul);
  const liToAdd = array.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
  liToAdd.forEach((li) => {
    ul.appendChild(li);
  });
  return ul;
}
