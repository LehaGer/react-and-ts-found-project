import React, {FC, useEffect, useState} from 'react';
import {IToDo, IUser} from "../types/types";
import axios from "axios";
import UserItem from "./UserItem";
import List from "./List";
import {useHistory} from 'react-router-dom'

const UserPage: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const history = useHistory();

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers ()  {
        try {
            const dbResponse = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
            setUsers(dbResponse.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <List items={users} renderItem={user => <UserItem user={user} onClick={() => history.push('/users/' + user.id)} key={user.id}/>}/>
    );
};

export default UserPage;