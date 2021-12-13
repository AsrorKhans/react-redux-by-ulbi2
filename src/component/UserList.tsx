import React, {FC} from 'react';
import {IUsers} from "../types/types";
import UserItem from "./UserItem";

interface UsersItemProps {
    users: IUsers[]
}



const UserList: FC<UsersItemProps> = ({users}) => {
    return (
        <div>
            {
                users.map(user =>
                    <UserItem key={user.id} user={user}/>
                )
            }
        </div>
    );
};

export default UserList;