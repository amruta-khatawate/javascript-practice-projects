const inputField = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const taskList = document.getElementById("tasklist");
let flag = false;


addBtn.addEventListener("click", function(event) { 
      if(inputField.value === "") {
            alert("Please enter a task");
            return;
      }
      const check = document.createElement("button");
      const li = document.createElement("li");
      const p = document.createElement("p");
      const button = document.createElement("button");

      check.setAttribute("class", "check");
      button.setAttribute("class", "delete");
      li.setAttribute("class", "task");

      li.appendChild(check);
      li.appendChild(p);
      li.appendChild(button);

      p.textContent = inputField.value;
      p.setAttribute("contenteditable", "true");
      button.textContent = "Delete";
      button.addEventListener("click", function(event){
            li.remove();
      })

      check.addEventListener("click", function(event){ 
           
            if(flag === false) {
                  check.style.backgroundColor = "rgb(226, 148, 2)";
                  check.style.border = "none";
                  p.style.textDecoration = "line-through";
                  flag = true;
            }else{
                  check.style.backgroundColor = "rgb(248, 248, 248)";
                  check.style.border = "1px solid rgb(0, 0, 0)";
                  p.style.textDecoration = "none";
                  flag = false;
            }
      })
      inputField.value = "";

      taskList.appendChild(li);
})



