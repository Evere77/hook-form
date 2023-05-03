// Worked with Mann and Kevin
import React, { useState } from  'react';


const UserForm = (props) => {
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {userFirstName, userLastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange = { (e) => setUserFirstName(e.target.value) }/>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange = { (e) => setUserLastName(e.target.value) }/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange = { (e) => setEmail(e.target.value) }/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange = { (e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange = { (e) => setConfirmPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Create User" />

            <h3>First Name: {userFirstName}</h3>
            <h3>Last Name: {userLastName}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
            <h3>confirmPassword: {confirmPassword}</h3>
        </form>
    );
};
    
export default UserForm;