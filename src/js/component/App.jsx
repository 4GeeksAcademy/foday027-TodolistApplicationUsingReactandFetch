import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { label: input, done: false }]);
    setInput('')
  };

  // const handleDelete = (i) => { 
  //   let aux = todos;
  //   aux = aux.filter((el, index) => i !== index);
  //   setTodos(aux);
  // }


  async function fetchData() {
    let resp = await axios.get('https://playground.4geeks.com/todo/users/saeed');
    let respData = await resp.data;
    setTodos(respData);
    console.log(todos)
  }

  const handleDelete = (i) => {
    let aux = todos;
    aux = aux.filter((el, index) => i !== index);
    setTodos(aux);
  };


  const handleEdit = (i) => {
    let aux = todos;
    aux = aux.filter((el, index) => i == !index);
  };


  useEffect(() => {
    fetchData();
    handleDelete()

  }, []);



  const createPost = async (text) => {

    let response = await axios.post('https://playground.4geeks.com/todo/todos/saeed', {

      label: text && text.length === 0,
      is_done: false,

    }
    );


    console.log(response.json);
  };
  createPost();



  return (
    <div className='main text-center text-light mt-5 pb-1 rounded'>

      <form className=' form-control form mx-3' onSubmit={handleSubmit}>

        <label className='label me-1 mb-3 mb-2 text-dark'><h1><em>My must have!</em></h1></label><br />
        <input
          className=" rounded  me-2"
          type='text'
          placeholder='Add to your desire'
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <button className='mb-3 bg-dark rounded button' type='submit'>Submit</button>

        <ul>
          {todos && todos.map((el, i) => {
            return (
              <li className=" m list list-style list-group-item mb-3 mt-1 ms-4 rounded " key={i}>{el.label}
                <span className='mx-3' onClick={() => handleDelete(i)}><i className=" fa-solid fa-beat fa-trash trash"></i></span>
                <span onClick={() => handleEdit(i)}><i className=" fa-solid fa-beat fa-edit edit"></i></span>
              </li>

            )
          })}
        </ul>
      </form>

    </div>
  );
}

export default App;