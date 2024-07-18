var inputbox=document.getElementById("inputbox")
var add=document.getElementById("add")
var taskcontainer=document.getElementById("taskcontainer")
var form = document.getElementById("myForm");

add.addEventListener("click",function()
{
    if(inputbox.value=='')
    {
        alert("Enter Your Task First")
    }
    else
    
    {
        var row=document.createElement("tr");
        row.setAttribute("class","fontcolor");
        row.innerHTML=`<td style="text-align: center;" class="task-name">${inputbox.value}</td>
                               <td style="text-align: center;" class="status">Pending</td>
                               <td style="text-align: center;" ><button class="btn btn-sm btn-success" onclick="edit(event)"><i class="bi bi-pen btn-edit"></i></button></td>
                               <td style="text-align: center;" onclick="deleteitem(event)"><button class="btn btn-sm btn-danger"><i class="bi bi-trash-fill"></i></button></td>
                               <td style="text-align: center;"><input type="checkbox" onclick="strike(event)"></td>`
   
                               taskcontainer.append(row)
                               inputbox.value=''
    }
  
}
)
function deleteitem(event)
{
    var row = event.target.closest("tr");
    row.remove();
}
function strike(event) {
    var row = event.target.closest("tr");
    var status = row.querySelector(".status");
    var taskName = row.querySelector(".task-name");

    if (event.target.checked) {
        status.textContent = "Done";
        taskName.style.textDecoration = "line-through";
    } else {
        status.textContent = "Pending";
        taskName.style.textDecoration = "none";
    }
}

// Edit functionality
function edit(e) {
    
        var row = e.target.closest("tr");
        var taskNameCell = row.querySelector(".task-name");
        var taskName = taskNameCell.textContent.trim();
        var newTaskName = prompt("Edit Task Name:", taskName);
        if (newTaskName !== null) {
            taskNameCell.textContent = newTaskName;
        }
    
};

