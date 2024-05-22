/* Stwórz funkcję createList, która będzie tworzyła 3 elementową listę zakupów. Lista powinna mieć postać znacznika <ul>, posiadać identyfikator (id) list, a zawartość elementów <li> może być dowolna (jakikolwiek tekst). W zadaniu należy użyć funkcji document.createElement do tworzenia elementów i document.body.appendChild do podpięcia listy do elementu <body>. Funkcja musi również zwrócić (return) samą listę.

notka: Do stworzenia 3-elementowej listy możesz użyć takiej techniki:

["Item 1", "Item 2", "Item 3"].map(item => {
  const li = document.createElement("li");
  li.textContent = item;
  return li;
}); */

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
