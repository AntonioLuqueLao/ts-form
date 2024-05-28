import React, { useState } from "react";
import {emailTemplate, user} from "../types";

interface propTypes {
    addUser: (newUser:user) => void
}

const INITIAL_STATE = {
    name: "",
    username: "",
    password: "",
    email: "" as emailTemplate
}

const UserForm = ({addUser}: propTypes) => {

    const [userValues, setUserValues] = useState<user>(INITIAL_STATE);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target;
    
        setUserValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addUser(userValues);
        setUserValues(INITIAL_STATE);
    }

    return (
        <div className="user-form-container">
            <form className="user-form" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="name" />
            <input onChange={handleChange} type="text" name="username" />
            <input onChange={handleChange} type="text" name="password" />
            <input onChange={handleChange} type="text" name="description" />

            <button type="submit">Registrar usuario</button>
            </form>
        </div>
    )
}

export default UserForm;