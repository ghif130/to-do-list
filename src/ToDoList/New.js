import React from 'react';
import { Button, Form } from 'react-bootstrap';
import swal from 'sweetalert';

const New = ({createTodoItem}) => {
    const [value, setValue] = React.useState("")
    const handleSubmit = e => {
    e.preventDefault();

    if(value === ""){
        console.log("Please add something to do")
        // return alert("Please add something to do")
        return swal("Error","Please add something to do", "error")
    }
    createTodoItem(value)
    setValue("")
    }

    return (
        <Form onSubmit={handleSubmit}>                        
            <Form.Group className='row g-2 inputgroup'>                 
                <div className='col-auto '>                    
                    <Form.Control type="text" autoComplete="off" placeholder="Input to do..." className="textinput" id="inputtodo" value={value} onChange={(e) => setValue(e.target.value)} />            
                    <label htmlFor="inputtodo" className='labelinput'>Create todo</label>
                </div>                
                <div className='col-auto'>
                    <Button variant="info outline-primary" className='btn-input-submit' onClick={handleSubmit}>Create</Button>
                </div>                
            </Form.Group>
        </Form>        
        );
    }

export default New