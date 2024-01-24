(async function () {
  const data = await fetch("./data.json");
  const res = await data.json();
  let employees = res;
  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__single--info");

  employeeList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id) {
      selectedEmployeeId = e.target.id;
      renderEmployees();
      renderSingleEmployee();
    }
  });

  const renderEmployees = () => {
    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employees__names--item");
      if (parseInt(selectedEmployeeId) === emp.id) {
        employee.classList.add("selected");
        selectedEmployee = emp;
      }
      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`;
      employeeList.appendChild(employee);
    });
  };
  const renderSingleEmployee = () => {
    employeeInfo.innerHTML = `
    <img src="${selectedEmployee.imageUrl}"/>
    <span class="employees__single--heading">${selectedEmployee.firstName} ${selectedEmployee.lastName}</span>
    <span>${selectedEmployee.address}</span>
    <span>${selectedEmployee.email}</span>
    <span>Mobile- ${selectedEmployee.contactNumber}</span>
    <span>DOB- ${selectedEmployee.dob}</span>
    
    `;
  };
  renderEmployees();
})();
