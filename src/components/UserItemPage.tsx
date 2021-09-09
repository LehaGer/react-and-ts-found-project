import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import {useParams, useHistory} from 'react-router-dom'

interface UserItemParams {
    id: string
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemParams>();
    const history = useHistory();

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser ()  {
        try {
            const dbResponse = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/" + params.id);
            setUser(dbResponse.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <h1>The page about user {user?.username}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>

    );
};

export default UserItemPage;