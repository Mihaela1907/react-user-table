import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DeleteIcon from '../assets/x.svg';

import AddUserPopup from '../components/AddUserPopup.js';

const Users = () => {
    // Fetching data and setting it to 'users' variable
    const [users, setUsers] = useState([])

    const fetchData = () => {
      fetch("https://random-data-api.com/api/users/random_user?size=10")
        .then(response => {
          return response.json()
        })
  
        .then(data => {
          setUsers(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])

    // User detail page navigation
    const navigate = useNavigate();

    const handleRouter = () => {
        navigate('/user-detail', { state: { userData: users}});
    };

    // Delete user logic
    const deleteUser = (userId) => {
        const newUsers = [...users];

        const index = users.findIndex((user) => user.id === userId);

        newUsers.splice(index, 1);

        setUsers(newUsers);
    };

    return (
        <div className="users-container">
            <h1 onClick={handleRouter}>hello</h1>

            <div className="users-top-container">
                <input placeholder="Search table by name..." className="search-users"></input>

                <AddUserPopup/>
            </div>

            <table className="user-table">
                <thead>
                    <tr>
                        <th className="user-info">E-mail</th>
                        <th>Name</th>
                        <th>Job title</th>
                        <th>Location</th>
                        <th>Phone number</th>
                        <th></th>
                    </tr>
                </thead>

                {users.length > 0 && (
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className="user-info">
                                    <img src={user.avatar} className="user-avatar"></img>
                                    <div>
                                        <p className="email">{user.email}</p>
                                        <p className="username">@{user.username}</p>
                                    </div>
                                </td>
                                <td>{user.last_name} {user.first_name}</td>
                                <td>{user.employment.title}</td>
                                <td>{user.address.city}</td>
                                <td>{user.phone_number}</td>
                                <td className="remove-user">
                                    <button className="remove-user-button" onClick={() => deleteUser(user.id)}>
                                        <img src={DeleteIcon}></img>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    )
}

export default Users;