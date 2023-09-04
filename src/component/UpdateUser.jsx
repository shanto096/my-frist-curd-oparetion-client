import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateUser = () => {

    const data = useLoaderData()

    const handelUpdate = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name= form.name.value;
        const email= form.email.value;
        console.log(name,email);   
        const user = {name, email}
        fetch(`http://localhost:5000/user/${data._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);

            if (data.modifiedCount>0) {
                alert("Update successfully")
                
            }
        })
    }
    return (
        <div>
            <h1>user update name:{data.name}</h1>

            <form onSubmit={handelUpdate}>
               <input type="text" name='name' defaultValue={data.name} /><br />
               <input type="email" name='email' defaultValue={data.email} /><br />
               <input type="submit" value='Update User' /><br />
               <Link to='/user'><button>Go Back</button></Link>
            </form>
        </div>
    );
};

export default UpdateUser;