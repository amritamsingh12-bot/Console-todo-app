function startApp(){
    let todo = [];

// Welcome Message
console.log("🌟 Welcome to Todo App 🌟");
console.log("Commands you can use:");
console.log("add    - Add a task");
console.log("list   - Show all tasks");
console.log("delete - Delete a task");
console.log("clear  - Clear all tasks");
console.log("quit   - Exit app");

let req = prompt("Please enter your choice").toLowerCase();

while(true){

    if(req == "quit"){
        console.log("Quitting app...");
        break;
    }

    else if(req == "list"){
        console.log("-----------");
        
        if(todo.length == 0){
            console.log("No tasks available.");
        } else {
            for(let i = 0; i < todo.length; i++){
                console.log(i, todo[i]);
            }
        }

        console.log("-----------");
        console.log("Total tasks:", todo.length);
    }

    else if(req == "add"){
        let task = prompt("Please enter the task you want to add");

        if(task == ""){
            console.log("Task cannot be empty!");
        } else {
            todo.push(task);
            console.log("Task added successfully!");
            console.log("Total tasks:", todo.length);
        }
    }

    else if(req == "delete"){
        let idx = prompt("Please enter the task index");

        if(idx >= 0 && idx < todo.length){
            
            let confirmDelete = prompt("Are you sure? yes/no").toLowerCase();
            
            if(confirmDelete == "yes"){
                todo.splice(idx, 1);
                console.log("Task deleted successfully!");
            } else {
                console.log("Delete cancelled.");
            }

        } else {
            console.log("Invalid index!");
        }

        console.log("Total tasks:", todo.length);
    }

    else if(req == "clear"){
        let confirmClear = prompt("Are you sure you want to clear all tasks? yes/no").toLowerCase();

        if(confirmClear == "yes"){
            todo = [];
            console.log("All tasks cleared!");
        } else {
            console.log("Clear cancelled.");
        }

        console.log("Total tasks:", todo.length);
    }

    else{
        console.log("Wrong request! Please enter a valid command.");
    }

    req = prompt("Please enter your choice").toLowerCase();
}
}