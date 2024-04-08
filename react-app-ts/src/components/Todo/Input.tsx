import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { ADD } from '../../redux/todoSlice'
function Input() {
    const [todoValue, setTodoValue] = useState('')
    const dispatch = useDispatch()
    function submit () {
        // props.store.dispatch(addListActions(todoValue))
        dispatch(ADD(todoValue))
        setTodoValue('')
    }
    return (
        <div style={{
            display: "flex"
        }}>
            <input
                style={{width: '60%'}}
                value={todoValue}
                onChange={e => setTodoValue(e.target.value)}
                type="text"
                className="form-control"
            />
            <button onClick={submit} className="btn btn-primary">提交</button>
        </div>

    );
}

export default Input;
