
// Creating object class Project 8 Requirement 1
class Task {
    // Create Array to hold task objects
    static tasks = [];
    // Constructor to initialize task object Requirement 2 for Project 8
    constructor(taskName, taskDueDate, taskPriority, taskStatus) {
        this.taskName = taskName;
        this.taskDueDate = taskDueDate;
        this.taskPriority = taskPriority;
        this.completed = taskStatus;
    }
    // Requirement 2 for Project 8
    // Static method to add task to the array
    static add(task) {
        Task.tasks.push(task); // Add task to the array
    }
    // Static method to remove a task
    static delete(index) {
        Task.tasks.splice(index, 1); // Remove task from the array
    }


    // Requirement 3 for Project 8
    // Update task details
    updateTask(newName, newDueDate, newPriority, newStatus) {
        this.taskName = newName;
        this.taskDueDate = newDueDate;
        this.taskPriority = newPriority;
        this.completed = newStatus;
    }

    // Function to check if task is overdue
    isOverdue() {
        const today = new Date();
        const dueDate = new Date(this.taskDueDate);
        return dueDate < today && this.completed !== "Completed";
    }
    // Function to check if task is completed
    isCompleted() {
        return this.completed === "Completed";
    }
}

// Insert a row into the table
function insertRow(task, index) {
    // Get the table body element
    const table = document.getElementById("task-table-body");

    // Create a new row
    const row = table.insertRow();

    row.classList.remove("overdue", "completed"); // Remove any existing classes

    // Check if task is completed and add class if it is
    if(task.isCompleted()) {
        row.classList.add("completed"); // Add completed class if task is completed
    }
    // Check to see if task is overdue and add class if it is
    else if(task.isOverdue()) {
        row.classList.add("overdue"); // Add overdue class if task is overdue
    }
    
    // Insert cells into the row and set their text content
    row.insertCell(0).textContent = task.taskName;
    row.insertCell(1).textContent = task.taskDueDate;
    row.insertCell(2).textContent = task.taskPriority;
    row.insertCell(3).textContent = task.completed;

    // Create Edit and Delete buttons
    const editCell = row.insertCell(4);
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => editing(index));
    editCell.appendChild(editBtn);

    const deleteCell = row.insertCell(5);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {Task.delete(index);
        refreshTable();
    }); // Delete the task and refresh the table
    deleteCell.appendChild(deleteBtn);
}
let editingIndex = null;
// Function for loading content into the form for editing
function editing(index) {
    // Show the form for editing
    document.getElementById("taskForm").style.display = "block";
    // Get the task object from the array using the index
    const task = Task.tasks[index];
    editingIndex = index; // Store the index of the task being edited
    // Populate the form with the task details for editing
    document.getElementById("task-name").value = task.taskName;
    document.getElementById("due-date").value = task.taskDueDate;
    document.getElementById("priority").value = task.taskPriority;
    document.getElementById("status").value = task.completed;


}
// Function to refresh the table after editing
function refreshTable() {
    const table = document.getElementById("task-table-body");
    table.innerHTML = ""; // Clear the table body
    Task.tasks.forEach((task, index) => {
        insertRow(task, index); // Reinsert each task
    });
}
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for the add task button
    document.getElementById("add-task").addEventListener("click", function() {
        // Allow the task form to be displayed
        document.getElementById("taskForm").style.display = "block";
    });
        document.getElementById("taskForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page reload
            // Get the form values
            const taskName = document.getElementById("task-name").value;
            const taskDueDate = document.getElementById("due-date").value;
            const taskPriority = document.getElementById("priority").value;
            const taskStatus = document.getElementById("status").value; 


            if(editingIndex != null) // Check if we are editing an existing task
            {
                const task = Task.tasks[editingIndex];
                // Update the task object with new values
                task.updateTask(taskName, taskDueDate, taskPriority, taskStatus);
                refreshTable(); // Refresh the table to show updated values
                editingIndex = null; // Reset the editing index
         
            }
            else{
                // Create a new task object with the form values Requirement 5 for Project 8
                const newTask = new Task(taskName, taskDueDate, taskPriority, taskStatus);

                Task.add(newTask); // Add the new task to the array
                insertRow(newTask, Task.tasks.length - 1); // Insert the new task into the table
            }
       

            // Clear the form fields
            document.getElementById("taskForm").reset();
            // Hide the form after submission
            document.getElementById("taskForm").style.display = "none";
        });

});