import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Moment from 'moment';

const UserDetail = (userData) => {
    const navigate = useNavigate();

    const handleRouter = () => {
        navigate('/');
    }

    const { state } = useLocation();
    const user = state.UserData

    console.log(state.userData)

    return (
        <div className="user-detail-container">
            <div className="user-detail-header">
                <div className="back-button-container">
                    <button className="back-to-users-button" onClick={handleRouter}>User overview</button>
                </div>

                <div className="user-detail-header-top-container">
                </div>

                <img src={state.userData.avatar} className="user-avatar"></img>

                <div className="user-name">
                    <h2 className="name">{state.userData.first_name} {state.userData.last_name}</h2>
                    <h3 className="username">@{state.userData.username}</h3>
                </div>
            </div>

            <div className="user-detail-content">
                <div className="user-detail-top-container">
                    <div>
                        <h3>GENERAL INFO</h3>
                        <p>{state.userData.email}</p>
                        <p>{state.userData.phone_number}</p>
                        <p>JOB TITLE: {state.userData.employment.title}</p>
                        <p>KEY SKILL: {state.userData.employment.key_skill}</p>
                    </div>

                    <div className="address">
                        <h3>ADDRESS</h3>
                        <p>{state.userData.address.street_address}</p>
                        <p>{state.userData.address.street_name}</p>
                        <p>{state.userData.address.zip_code} {state.userData.address.city}</p>
                        <p>{state.userData.address.state}, {state.userData.address.country}</p>
                    </div>
                </div>

                <div className="user-detail-bottom-container">
                    <div>
                        <h3>PERSONAL INFO</h3>
                        <p>BIRTHDAY: {Moment(state.userData.date_of_birth).format("MMM Do YY")}</p>
                        <p>GENDER: {state.userData.gender}</p>
                    </div>       

                    <div className="subscription">
                        <h3>SUBSCRIPTION INFO</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>SUBSCRIPTION PLAN:</td>
                                    <td>{state.userData.subscription.plan}</td>
                                </tr>
                                <tr>
                                    <td>STATUS:</td>
                                    <td>{state.userData.subscription.status}</td>
                                </tr>
                                <tr>
                                    <td>PAYMENT METHOD:</td>
                                    <td>{state.userData.subscription.payment_method}</td>
                                </tr>
                                <tr>
                                    <td>TERM:</td>
                                    <td>{state.userData.subscription.term}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="user-detail-footer">

            </div>
        </div>
    );
};
  
export default UserDetail;