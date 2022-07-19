import React from "react";
import { useNavigate } from 'react-router-dom';

const UserDetail = () => {
    const navigate = useNavigate();

    const handleRouter = () => {
        navigate('/', { state: { title: '', slide: null }});
    }

    return (
        <div>
            <h1 onClick={handleRouter}>UserDetail</h1>
        </div>
    );
};
  
export default UserDetail;