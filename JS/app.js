// p4: Create todolist and completedTodos arrays //
const todoList = { todo: "Finish Assignment 1 by March 19", status: "complete" }
// undefined
completedTodos = []
// []


// p5: Create a for loop to check if todoList objects status is complete //
for (status in todoList) { 
    if (status == "status") 
    {completedTodos.push(todoList.status)}}
// 1
console.log(completedTodos)
// ["complete"]


// p6: Create a second for loop to log todo value onto console using destructuring//
for (todo in completedTodos)   {
    const value = todoList.todo
    console.log(value)
}
// Finish Assignment 1 by March 19



