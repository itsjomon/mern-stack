// Todo App (only JS)

let todo = [];

console.log(`Todo App
Enter 'list' to show all tasks
Enter 'add' to add a task
Enter 'delete' to remove a task
Enter 'quit' to exit
----------------------------------------`);

let req = prompt("What would you like to do?");

while(true) {
    if (req == "quit") {
        console.log("OK, YOU QUIT THE APP");
        break;
    } else if (req == "list") {
        console.log("**********");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("**********");
    } else if (req == "add") {
        let task = prompt("Please enter a new todo");
        todo.push(task);
        console.log("Task added");
    } else if (req == "delete") {
        let idx = prompt("Enter index of todo to delete");
        todo.splice(idx, 1);
        console.log("Task deleted");
    } else {
        console.log("Unknown request. Please enter add, list, delete, or quit.");
    }

    req = prompt("What would you like to do?");
}