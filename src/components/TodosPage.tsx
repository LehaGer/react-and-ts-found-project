import React, {FC, useEffect, useState} from 'react';
import ToDoItem from "./ToDoItem";
import List from "./List";
import {IToDo, IUser} from "../types/types";
import axios from "axios";

const TodosPage: FC = () => {

    const [todos, setTodos] = useState<IToDo[]>([]);

    useEffect(() => {
        fetchTodo();
    }, []);

    async function fetchTodo() {
        try {
            const dbResponse = await axios.get<IToDo[]>("https://jsonplaceholder.typicode.com/todos?_limit=50");
            setTodos(dbResponse.data);
            console.log(dbResponse)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List items={todos} renderItem={todo => <ToDoItem todo={todo} key={todo.id}/>}/>
    );
};

export default TodosPage;