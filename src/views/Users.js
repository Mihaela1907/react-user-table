import React from "react";
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();

    const handleRouter = () => {
        navigate('/user-detail', { state: { title: '', slide: null }});
    }

    return (
        <>
            <h1 onClick={handleRouter}>User</h1>
        </>
    )
}

export default Users;