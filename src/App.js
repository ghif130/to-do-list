import React from 'react';
import logo from './logo.svg';
import "./App.css";
import New from "./ToDoList/New";
import Index from './ToDoList/Index';
import swal from 'sweetalert';
// import swal from '@sweetalert/with-react'

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
    console.log(`To Do ${todo} Successfully Added`)
    swal({
      title: `Done`,
      text: `To Do ${todo} Successfully Added`,
      icon: "success",      
      timer: 3000,
    })
  }

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems]
    newTodoItems.splice(index, 1)
    setTodoItems(newTodoItems)
    console.log(`To Do ${todoItems[index].todo} Deleted`)
    swal({
      title: `Done`,
      // text: "Once deleted, you will not be able to recover this file!",
      text: `To Do ${todoItems[index].todo} Successfully Deleted`,      
      icon: "success",      
      timer: 3000,
    })
  }

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false
    ? (newTodoItems[index].complete = true) : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems)
    if (newTodoItems[index].complete===false){
      console.log('incomplete')
    }else{
      console.log('complete')
    }
  }

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];    
    //let newItem = prompt(`Update ${item.todo}?`, item.todo);  
    
    
    //let {value: newItem} = 
    let newItem
    swal({      
      title:  `Update ${item.todo} ?`,
      content: {
        element: "input",
        attributes: {
          placeholder: "Update",
          type: "text",
          value: item.todo,
        },      
      },     
      closeOnClickOutside: false,      
      buttons:{
        // cancel: {
        //   text: "Cancel",
        //   value: null,
        //   visible: true,
        //   className: "",
        //   closeModal: false,
        // },
        confirm: {
          text: "Update",
          value: true,
          visible: true,
          className: "",
          closeModal: true,          
        }
      }
    }).then((value) => {
        if (value){   
          newItem = value          
          console.log(value)
          console.log(newItem)
      
          let todoObj = { todo: newItem, complete: item.complete };
          console.log(todoObj)
          newTodoItems.splice(index, 1, todoObj);
          
          if (newItem === null || newItem === "" ||newItem === undefined) {
            return;
          } else {
            item.todo = newItem;
          }
          setTodoItems(newTodoItems);
          swal('Done', `To Do ${item.todo} Updated Successfully`,'success',{timer: 3000})

        }
        else{
          newItem = item.todo   
          console.log(newItem)       
          console.log(item.todo)

          let todoObj = { todo: newItem, complete: item.complete };
          console.log(todoObj)
          newTodoItems.splice(index, 1, todoObj);
          
          if (newItem === null || newItem === "" ||newItem === undefined) {
            return;
          } else {
            item.todo = newItem;
          }
          setTodoItems(newTodoItems);
          swal('Info!!', `To Do ${item.todo} Failed to Update`,'info',{timer: 3000})
        }            
    });
        
    // let todoObj = { todo: newItem, complete: item.complete };
    // console.log(todoObj)
    // newTodoItems.splice(index, 1, todoObj);
    
    // if (newItem === null || newItem === "" ||newItem === undefined) {
    //   return;
    // } else {
    //   item.todo = newItem;
    // }
    // setTodoItems(newTodoItems);    
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /><br></br>
        <New createTodoItem={createTodoItem} />
          {todoItems.map((item, index) => (
            <Index key={index} index={index} item={item} deleteTodoItem={deleteTodoItem} completeTodoItem={completeTodoItem} updateTodoItem={updateTodoItem} />
          ))}
      </header>
    </div>
    
    );
}

export default App;