import React, { useState } from "react";



const Home = () => {


    const [newtask, setNewtask] = useState("");

    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { label: newtask, done: false }]);
		setNewtask('')
    };

    const handleChange = (e) => setNewtask(e.target.value);

    const handleDelete = (i) => {
        let aux = todos;
        aux = aux.filter((el, index) => i !== index);
        setTodos(aux);
    };

    const handleEdit = (i) => {
        let aux = todos;
        aux 
    };


    return (
		
        <div className="text-center mt-5">
            <form className="wrapper form-control" onSubmit={handleSubmit}>
                <h1 className="head">Things to complete Pronto!</h1>
                <input  className="insert rounded" type="text"  placeholder="type in something" value={newtask} onChange={handleChange} />
                <button className="btn btn-danger ms-2 mb-2" type="submit">Submit</button>
                <ul className="ul-list" >
                    {todos.length >= 1 ? todos.map((el, i) => (
                        <li className=" list-style list-group-item border-dark mb-2 mt-3 rounded" key={i}>
                            {el.label}
                            <span className="ms-2 myClass"  onClick={() => handleDelete(i)}><i class="fa-solid fa-trash trash"></i></span>

                            <span className="ms-3"><i class="fa-solid fa-pen-to-square edit"></i></span>
                        </li>
						
                    )) : null}
                </ul>
                    <span className=" d-flex d-flex-start ">{todos.length >=0 ? todos.length :  ""} item left</span>
            </form>
        </div>
    );
};


export default Home;