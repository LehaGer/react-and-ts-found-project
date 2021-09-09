import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{backgroundColor: "lightgreen", border: "1px dashed blue", margin: "15px auto", padding: "25px", width: "70%"}}>
            {user.id}. {user.name} ({user.username} living at {user.address.city}, working at {user.company.name}, contacts: p/n {user.phone}, email {user.email})
        </div>
    );
};

export default UserItem;