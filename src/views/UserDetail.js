import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const UserDetail = (userData) => {
    const navigate = useNavigate();

    const handleRouter = () => {
        navigate('/');
    }

    const { state } = useLocation();
    console.log(state)

    return (
        <div>
            <h1 onClick={handleRouter}>UserDetail</h1>
        </div>
    );
};
  
export default UserDetail;