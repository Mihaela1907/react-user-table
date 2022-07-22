import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import axios from 'axios';
import ReactTooltip from "react-tooltip";

import DeleteIcon from '../assets/x.svg';
import SearchIcon from '../assets/search.svg';
import Avatar from '../assets/avatar.svg';

import AddUserPopup from '../components/AddUserPopup.js';

const Users = () => {
    // Fetching data and setting it to 'users' variable
    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState(false);

    const fetchData = () => {
        setLoader(true);

        fetch("https://random-data-api.com/api/users/random_user?size=20")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
          setLoader(false);
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])

    // User detail page navigation
    const navigate = useNavigate();

    const goToUserDetail = (userId) => {
        // Find user object by id in users array
        const userDetail = users.find(user => user.id === userId)

        if(userDetail.gender) {
            navigate('/user-detail', { state: { userData: userDetail}});
        } else {
            alert('You clicked a new user which is missing user details.')
        }
    };

    // Delete user logic
    const deleteUser = (userId) => {
        const newUsers = [...users];
        // Find user index and use it to remove user object from users array
        const index = users.findIndex((user) => user.id === userId);

        newUsers.splice(index, 1);
        setUsers(newUsers);
    };

    // Logic for adding user
    const [formData, setFormData] = useState({
        avatar: '',
        email: '',
        username: '',
        last_name: '',
        first_name: '',
        title: '',
        city: '',
        phone_number: ''
    });

    // Detecting changes in form
    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...formData};
        
        // Avatar upload
        if(fieldName == 'avatar') {
            const url = 'http://localhost:3000/uploadFile';

            newFormData['avatar'] = event.target.files[0];

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };

            axios.post(url, formData, config)
        } else {
            // Other form data
            newFormData[fieldName] = fieldValue;
        }

        setFormData(newFormData);
    };

    const handleAddUser = (event) => {
        event.preventDefault();

        const newUser = {
            id: nanoid(),
            // Creating an URL that we can use in image src
            avatar: formData.avatar ? URL.createObjectURL(formData.avatar) : Avatar,
            email: formData.email,
            username: formData.username,
            last_name: formData.last_name,
            first_name: formData.first_name,
            employment: {
                title: formData.title
            },
            address: {
                city: formData.city
            },
            phone_number: formData.phone_number
        };
        
        const newUsers = [...users, newUser];
        setUsers(newUsers);

        document.getElementById("add-user-popup").style.display = "none";
        document.getElementById("add-user-form").reset();
        document.getElementById("user-form-submit").disabled = true;
    };

    // Logic for filtering by name
    const handleTableFilter = () => {
        let input, filter, table, tr, td, i, txtValue;

        table = document.getElementById("user-table");
        tr = table.getElementsByTagName("tr");
        input = document.getElementById("table-filter-input");
        filter = input.value.toUpperCase();

        // Loop through all table name rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];

            if (td) {
                txtValue = td.textContent || td.innerText;

                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    };

    const openSearchBar = () => {
        const searchBar = document.getElementById("table-filter-input");

        searchBar.classList.toggle("closed");
    };
    
    return (
        <div className="users-container">
                <div className="users-header">
                </div>

            {loader && (
                <div className="data-loader">
                    <div className="loader">
                        Loading...
                    </div>
                </div>
            )}

            <div className="users-top-container">
                <div className="search-bar-container">
                    <input id="table-filter-input" placeholder="Search table by name..." className="search-users closed" 
                        onChange={handleTableFilter}
                    >
                    </input>

                    <img src={SearchIcon} onClick={openSearchBar}
                        data-tip data-for="searchTip"
                    ></img>
                    <ReactTooltip id="searchTip" place="top" effect="solid">
                        Click to toggle search bar
                    </ReactTooltip>
                </div>

                <AddUserPopup formFunction={handleAddFormChange} addUserFunction={handleAddUser}/>
            </div>

            <table id="user-table" className="user-table">
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
                                <td className="user-info" onClick={() => goToUserDetail(user.id)}>
                                    <img src={user.avatar} className="user-avatar"></img>
                                    <div>
                                        <p className="email">{user.email}</p>
                                        <p className="username">@{user.username}</p>
                                    </div>
                                </td>
                                <td  onClick={() => goToUserDetail(user.id)}>{user.last_name} {user.first_name}</td>
                                <td  onClick={() => goToUserDetail(user.id)}>{user.employment.title}</td>
                                <td  onClick={() => goToUserDetail(user.id)}>{user.address.city}</td>
                                <td  onClick={() => goToUserDetail(user.id)}>{user.phone_number}</td>
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