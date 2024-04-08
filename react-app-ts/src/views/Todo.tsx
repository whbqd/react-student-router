import React from 'react'
import '../css/Todo.css'
import List from "../components/Todo/List"
import Input from "../components/Todo/Input"

function Todo() {
    return (
        <div className="container">
            <Input />
            <List />
        </div>
    );
}

export default Todo;
