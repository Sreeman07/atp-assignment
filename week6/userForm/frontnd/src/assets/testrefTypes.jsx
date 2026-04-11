import { useState } from "react";
function testreftypes(){
    const [user,setUser]=useState({username:"nithish",age:22,city:"hyderabad"})
    const [marks,setMarks]=useState([10,20,30])
    const updateUser=()=>{
        setUser({...user,username:"bhanu"})
    }
    const updatemarks=()=>{
        setUser([...marks,40])
    }
    return (
        <div>
            <p>Username:{user.username}</p>
            <p>Username:{user.age}</p>
            <p>Username:{user.city}</p>



        </div>
    )
}
export default testreftypes