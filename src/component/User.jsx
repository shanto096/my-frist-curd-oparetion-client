import React, { useState } from 'react';
import { Link, json, useLoaderData } from 'react-router-dom';

const User = () => {
    const data = useLoaderData()
    const [users, setUser]=useState(data)

    const handleDelete =(_id)=>{
        console.log('delete',_id);

        fetch(`http://localhost:5000/user/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.deletedCount>0) {
                alert("successfully")

                const remainingUser = users.filter(u => u._id  !== _id)
                setUser(remainingUser)
            }
        })

    }
    return (
        <div>
            <h1>user:{data.length}</h1>
            <Link to='/'><button>add user</button></Link>
            {
                users.map(user=><p key={user._id}>{user.name} {user.email}{user._id}
                <Link to={`/update/${user._id}`}><button>Update User</button></Link>
                <button onClick={()=>handleDelete(user._id)}>x</button></p>)
            }
        </div>
    );
};

export default User; 