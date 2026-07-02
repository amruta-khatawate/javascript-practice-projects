const inputField = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const taskList = document.getElementById("tasklist");


addBtn.addEventListener("click", function(event) { 
      if(inputField.value === "") {
            alert("Please enter a task");
            return;
      }
      const li = document.createElement("li");
      const p = document.createElement("p");
      const button = document.createElement("button");

      button.setAttribute("class", "delete");
      li.setAttribute("class", "task");

      li.appendChild(p);
      li.appendChild(button);

      p.textContent = inputField.value;
      button.textContent = "Delete";
      button.addEventListener("click", function(event){
            li.remove();
      })
      inputField.value = "";

      taskList.appendChild(li);
})



