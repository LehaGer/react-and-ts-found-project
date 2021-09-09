import React, {useEffect, useMemo, useState} from 'react';
import Card, {variantsSet} from "./components/Card";
import UserList from "./components/UserList";
import {IToDo, IUser} from "./types/types";
import {Simulate} from "react-dom/test-utils";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import ToDoItem from "./components/ToDoItem";
import EventsExample from "./components/EventsExample";


function App() {

    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<IToDo[]>([]);

    useEffect(() => {
        fetchUsers();
        fetchTodo();
    }, []);

    async function fetchUsers ()  {
        try {
            const dbResponse = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
            setUsers(dbResponse.data);
        } catch (e) {
            alert(e);
        }
    }

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
        <div className="App">
            <EventsExample/>
            <Card width={200} height={100} someVariant={variantsSet.primary} onClick={(num) => {console.log("click from Card, num: " + num)}}>
                <div style={{width: "100px", height: "50px", backgroundColor: "gray"}}>
                    Some div element in card component
                </div>
            </Card>
            <List items={users} renderItem={user => <UserItem user={user} key={user.id}/>}/>
            <List items={todos} renderItem={todo => <ToDoItem todo={todo} key={todo.id}/>}/>
        </div>
    );
}

export default App;
