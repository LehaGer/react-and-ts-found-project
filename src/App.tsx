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
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";


function App() {



    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to={'/users'}>Users</NavLink>
                    <NavLink to={'/todos'}>List of tasks</NavLink>
                </div>
                <Route path={'/users'} exact>
                    <UserPage/>
                </Route>
                <Route path={'/users/:id'}>
                    <UserItemPage/>
                </Route>
                <Route path={'/todos'} exact>
                    <TodosPage/>
                </Route>
                <Route path={'/todos/:id'}>
                    <TodoItemPage/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
