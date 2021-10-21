/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/
let listOfUsers = "";
let reselectUser = "Y";

console.log("users: ", users);

console.log("todos: ", todos);

for(let i = 0; i< users.length; i++){
    listOfUsers += `ID: ${users[i].id} Name: ${users[i].name} City: ${users[i].address.city}
`  
}


alert(listOfUsers);

while(reselectUser.toUpperCase() === "Y"){
    let userID = prompt("Please Enter A User ID:");
    let show = prompt("Do you want to see the todos? y/n");
    let currentUsername;
    let todoList = "";

    let idTodo;

    for(let i = 0; i< users.length; i++){
        if(users[i].id === Number(userID)){
            currentUsername = users[i].username;
        }
    }

    for(let i = 0; i< todos.length; i++){

        if(Number(userID) === todos[i].userId){
              
            todoList += 
`ToDo ${todos[i].id}:
${todos[i].title}
`;
            idTodo = todos[i].id;
            
        }
    }
    if(show.toUpperCase() === "Y"){
        alert(`Username:${currentUsername}
${todoList}`);
    }
    

    
    let changeItem = prompt("Would you like to edit/add/delete a todo item? y/n");
    if(changeItem.toUpperCase()=== "Y"){
        let editOption = prompt("How would you like to change a todo item? add/edit/delete");
        if(editOption.toUpperCase() === "ADD"){
            let newId = idTodo + 1;
            let itemToAdd = {
                userId:Number(userID),
                id :newId,
                title : prompt(`Please enter what you would like to add to ${currentUsername}'s todo list'`),
                completed: false
            }
            todos.splice(idTodo, 0, itemToAdd);
        }
        if(editOption.toUpperCase() === "DELETE"){
            let itemToRemoveId = prompt("Enter Id for the todo Item you want to delete?");
            let index = todos.findIndex( item => item.id === Number(itemToRemoveId));
            console.log(index);
            const deleted =todos.splice(index, 1);
        }
        if(editOption.toUpperCase() === "EDIT"){
            let itemToChangeId = prompt("Enter the Id for the todo Item you want to edit?");
            let newTitle = prompt("Enter the text for the todo entry");
            let index = todos.findIndex( item => item.id === Number(itemToChangeId));
            todos[index].title = newTitle;
        }
    }

    reselectUser = prompt("Would you like to reselect your user? y/n");
}
console.log("todos: ", todos);
