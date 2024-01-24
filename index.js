import data from "./data.json" assert { type: "json" };
// console.log(data);

const list = document.getElementById("yo");
data.map((element) => {
  console.log(element);
  const listItem = document.createElement("li");
  listItem.innerHTML = `${element.firstName} ${element.lastName}`;
  list.appendChild(listItem);
});
