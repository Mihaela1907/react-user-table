import React from "react";
import { useNavigate } from 'react-router-dom';

import "./styles/users.scss";

const Users = () => {
    const navigate = useNavigate();

    const handleRouter = () => {
        navigate('/user-detail', { state: { title: '', slide: null }});
    }

    return (
        <div class="user-table-container">
            <h1 onClick={handleRouter}>hello</h1>
            <table class="user-table">
                <thead>
                    <tr>
                        <th>E-mail</th>
                        <th>Name</th>
                        <th>Job title</th>
                        <th>Location</th>
                        <th>Phone number</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <p>name@domain.ab</p>
                            <p>@username123</p>
                        </td>
                        <td>Doe John</td>
                        <td>Frontend developer</td>
                        <td>Osijek</td>
                        <td>+385 99 123 1223</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Users;