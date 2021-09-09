import React, {FC} from 'react';
import {IToDo} from "../types/types";

interface ToDoProps {
    todo: IToDo
}

const ToDoItem: FC<ToDoProps>= ({todo}) => {
    return (
        <div style={{display: "flex", justifyContent : "flex-start", alignItems: "center"}}>
            <div>{todo.id}</div>
            <input type="checkbox" checked={todo.completed} />
            <div>{todo.title} {todo.userId ? `correspond to: ${todo.userId}` : "free to apply"}, </div>
        </div>
    );
};

export default ToDoItem;