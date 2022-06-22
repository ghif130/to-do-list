import React from 'react';
import { Button, Form } from 'react-bootstrap';

const New = ({createTodoItem}) => {
    const [value, setValue] = React.useState("")
    const handleSubmit = e => {
    e.preventDefault();

    if(value === ""){
        console.log("Please add something to do")
        return alert("Please add something to do")
    }
    createTodoItem(value)
    setValue("")
    }

    return (
        <Form onSubmit={handleSubmit}>                        
            <Form.Group className='row g-2'>                
                <div className='col-auto inputgroup'>                    
                    <Form.Control type="text" autocomplete="off" placeholder="Input to do..." className="textinput" id="inputtodo" value={value} onChange={(e) => setValue(e.target.value)} />            
                    <label for="inputtodo" className='labelinput'>Create todo</label>
                </div>                
                <div className='col-auto'>
                    <Button variant="info" onClick={handleSubmit}>Create</Button>
                </div>
            </Form.Group>
        </Form>        
        );
    }

export default New