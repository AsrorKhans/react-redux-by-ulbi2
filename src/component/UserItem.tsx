import React, {FC} from 'react';
import {IUsers} from "../types/types";

interface UserItemProps {
    user: IUsers
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: 15, border: '1px solid teal'}}>
            {user.id}. {user.name} проживает в городе {user.address.city}, на улице {user.address.street}.
            Email {user.email} zipcode: {user.address.zipcode}
        </div>
    );
};

export default UserItem;