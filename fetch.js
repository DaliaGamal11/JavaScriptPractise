// base structure
const body = document.body;

// table
const table = document.createElement("table");
body.appendChild(table);

// table head 
const thead = document.createElement("thead");
const headRow = document.createElement("tr");

["ID", "Name"].forEach(text => {
  const th = document.createElement("th");
  th.textContent = text;
  headRow.appendChild(th);
});

thead.appendChild(headRow);
table.appendChild(thead);

// table body 
const tbody = document.createElement("tbody");
table.appendChild(tbody);


// Fetch  data
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    return response.json();
  })
  .then(users => {
    users.forEach(user => {
      const row = document.createElement("tr");

      const tdId = document.createElement("td");
      tdId.textContent = user.id;
      const tdName = document.createElement("td");
      tdName.textContent = user.name;

      [tdId, tdName].forEach(td => {
        td.style.padding = "12px 15px";
        td.style.border = "1px solid #ddd";
        td.style.textAlign = "left";
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });
  })
  .catch(error => console.error("Error fetching users:", error));
