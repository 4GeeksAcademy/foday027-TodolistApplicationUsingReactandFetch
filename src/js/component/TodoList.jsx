import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {

    const [todo, setTodo] = useState('');

    // const handleClickDelete = () => {

    // }


    useEffect(() => {
        async function fetchData() {
            let data = await axios.get('https://playground.4geeks.com/todo/users/saeedkallon');
            let respData = await data.data;
            setName(respData);
            console.log(respData)
        }
        fetchData();
    }, []);



    
    const createData = axios.post('https://playground.4geeks.com/todo/users/saeedkallon', {
        NickName: 'Bones',
        Hobby: 'Football',
        Aim: 'Web Developer',
        ShoppingCart: 'Mechanical Keyboard + LG Monitor',
        Order: [1, 2, 3]
    }, {
        headers: { "content-type": "application/json" },
       
       }
    )
    console.log(createData)







    return (
        <div className='text-center'>
            hello
        </div>
    );
};

export default TodoList;