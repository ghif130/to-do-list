import React from 'react'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'


const Index = ({ item, index, deleteTodoItem, completeTodoItem, updateTodoItem }) => {        
    return (
        <div className="todo-list">            
            {/* <li style={{textDecoration: item.complete ? "line-through" : ""}}>                 */}            
            <li>                
                {item.todo+' '}
                {item.complete ? <FontAwesomeIcon icon={faCheck} /> : ""}                
            </li>        

            <div>                
                {item.complete ? <Button variant='primary' onClick={() => completeTodoItem(index)}>Incomplete</Button> : <Button variant='primary' onClick={() => completeTodoItem(index)}>Complete</Button> }
                {' '} 
                <Button variant="success" onClick={() => updateTodoItem(index)}>Update</Button>
                {' '}
                <Button variant="danger" onClick={() => deleteTodoItem(index)}><FontAwesomeIcon icon={faTrashCan} /></Button>
            </div>
        </div>
    )    
};

export default Index