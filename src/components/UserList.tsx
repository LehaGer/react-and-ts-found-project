import React, {FC} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";

interface UserListInterface {
    users: IUser[]
}

const UserList: FC<UserListInterface> = ({users}) => {
    return (
        <div>
            
        </div>
    );
};

export default UserList;