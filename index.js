fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    const list = document.getElementById("yo");

    data.map((element) => {
      console.log(element);
      const li = document.createElement("li");
      li.innerHTML = `${element.firstName} ${element.lastName}`;
      list.appendChild(li);
    });
  })
  .catch((error) => console.error("Error loading JSON file", error));
