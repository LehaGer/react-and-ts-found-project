import React from 'react';
import Card, {variantsSet} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

function App() {

    const users: IUser[] = [
        {
            id: 1,
            name: "Vasya",
            username: "VasyaSuper",
            phone: "+12345678",
            website: "vasyasuper.com",
            email: "vasya@gmail.com",
            address: {
                city: "New-York"
            },
            company: {
                name: "Google"
            }
        },
        {
            id: 1,
            name: "Petya",
            username: "PetyaSuper",
            phone: "+98765432",
            website: "petyasuper.com",
            email: "petya@gmail.com",
            address: {
                city: "New-York"
            },
            company: {
                name: "Google"
            }
        },
    ];

    return (
        <div className="App">
            <Card width={200} height={100} someVariant={variantsSet.primary} onClick={(num) => {console.log("click from Card, num: " + num)}}>
                <div style={{width: "100px", height: "50px", backgroundColor: "gray"}}>
                    Some div element in card component
                </div>
            </Card>
            <UserList users={users}/>
        </div>
    );
}

export default App;
