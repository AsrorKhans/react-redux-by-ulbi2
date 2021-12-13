import React, {useEffect, useState} from 'react';
import Card from "./component/Card";
import UserList from "./component/UserList";
import {ITodo, IUsers} from "./types/types";
import axios from "axios";
import List from "./component/List";
import UserItem from "./component/UserItem";
import TodoItem from "./component/TodoItem";

const App = () => {
    const [user, setUsers] = useState<IUsers[]>([])
    const [todo, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetchUsers()
        fetchTodo()
    }, [])

    async function fetchUsers() {
        const response = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    }

    async function fetchTodo() {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(response.data)
    }

    return (
        <div>
            {/*<Card onClick={(num) => console.log('click')}*/}
            {/*      width={'50px'}*/}
            {/*      height={'50px'}*/}
            {/*      background={'teal'}*/}
            {/*      margin={'5px'}/>*/}
            {/*<UserList users={users}/>*/}
            <List items={user} renderItem={(user: IUsers) => <UserItem user={user} key={user.id}/>}/>
            <List items={todo} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
        </div>
    );
};

export default App;