import React, { useState } from 'react';
import {addListActions} from "../../store/actions";

function Input(props: any) {
    const [todoValue, setTodoValue] = useState('');
    function submit () {
        props.store.dispatch(addListActions(todoValue))
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
