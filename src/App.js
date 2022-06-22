import React from 'react';
import logo from './logo.svg';
import "./App.css";
import New from "./ToDoList/New";
import TodoItem from './ToDoList/Index';

function App() {
  const [todoItems, setTodoItems] = React.useState(
    [{todo: 'Mow the lawn',
    complete: false},
    {todo: 'Do Laundry',
    complete: true},
    {todo: 'Make Dinner',
    complete: false}])
    const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
  }

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems]
    newTodoItems.splice(index, 1)
    setTodoItems(newTodoItems)
  }

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false
    ? (newTodoItems[index].complete = true)
    : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems)
  }

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: item.complete };
    newTodoItems.splice(index, 1, todoObj);
    
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /><br></br>
        <New createTodoItem={createTodoItem} />
          {todoItems.map((item, index) => (
            <TodoItem
              key={index}
              index={index}
              item={item}
              deleteTodoItem={deleteTodoItem}
              completeTodoItem={completeTodoItem}
              updateTodoItem={updateTodoItem}
            />
          ))}
      </header>
    </div>
    
    );
}

export default App;