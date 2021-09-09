import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserListInterface {
    users: IUser[]
}

const UserList: FC<UserListInterface> = ({users}) => {
    return (
        <div>
            {users.map(user =>
                <div key={user.id} style={{backgroundColor: "lightgreen", border: "1px dashed blue", margin: "15px auto", padding: "25px", width: "70%"}}>
                    {user.id}. {user.name} ({user.username} living at {user.address.city}, working at {user.company.name}, contacts: p/n {user.phone}, email {user.email})
                </div>
            )}
        </div>
    );
};

export default UserList;