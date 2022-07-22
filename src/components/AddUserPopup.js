import { useEffect } from 'react';
import ReactTooltip from "react-tooltip";

import DeleteIcon from '../assets/x.svg';

const AddUserPopup = ({formFunction, addUserFunction}) => {
    // Get the popup
    let popup = document.getElementById("add-user-popup");

    // Logic for opening and closing the popup
    const openPopup = () => {
        popup.style.display = "block";
    };

    const closePopup = () => {
        popup.style.display = "none";
        document.getElementById("add-user-form").reset();
        document.getElementById("user-form-submit").disabled = true;
    };
      
    // Logic for validating email
    const validateEmail = () => {
        let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const emailInput = document.getElementById("email-input");
        const emailValidationMessage = document.getElementById("email");
      
        if (emailInput.value.match(validRegex)) {
            emailValidationMessage.classList.add("hidden");
        } else {
            emailValidationMessage.classList.remove("hidden");
        };
        
        validateForm()
    };

    // Logic for validating username
    const validateLength = event => {
        const inputElement = event.target;
        const messageId = event.target.dataset.id;
        const validationMessage = document.getElementById(messageId);
      
        if (inputElement.value.length >= 8) {
            validationMessage.classList.add("hidden");
        } else {
            validationMessage.classList.remove("hidden");
        };

        validateForm(event)
    };

    // Logic for validating phone number
    const validateNumber = () => {
        var validRegex = /^\d+$/;

        const numberInput = document.getElementById("phone-number-input");
        const numberValidationMessage = document.getElementById("phone-number");

        if (numberInput.value.match(validRegex) && numberInput.value.length >= 10) {
            numberValidationMessage.classList.add("hidden");
        } else {
            numberValidationMessage.classList.remove("hidden");
        };

        validateForm()
    };

    // Logic for validating form
    useEffect(() => {
        // Disabling form button
        document.getElementById("user-form-submit").disabled = true;
    }, []);

    let validateForm = event => {
        let allAreFilled = true;

        const formGroup = document.querySelectorAll('.validation-error-messages.hidden')

        let formValid = false;

        if(formGroup.length == 3) {
            formValid = true;
        }

        document.getElementById("add-user-form").querySelectorAll("input:not([type='file'])").forEach(function(i) {
            if(!allAreFilled) return;
            if(!i.value) allAreFilled = false;
        });


        if(allAreFilled && formValid) {
            document.getElementById("user-form-submit").disabled = false;
        } else {
            document.getElementById("user-form-submit").disabled = true;
        };
    };
    
    return (
        <div>
            <button className="add-user-button" 
                onClick={openPopup}
                data-tip data-for="addUserTip"
            >
                <img src={DeleteIcon}></img>
            </button>

            <ReactTooltip id="addUserTip" place="bottom" effect="solid">
                Add user to table
            </ReactTooltip>

            <div id="add-user-popup" className="add-user-popup-container">
                <div className="add-user-popup">
                    <div className="add-user-popup-header">
                        <p>Add user</p>
                        <button className="close-button" onClick={closePopup}>
                            <img src={DeleteIcon}></img>
                        </button>
                    </div>

                    <form id="add-user-form" className="add-user-popup-content" onSubmit={addUserFunction}>
                        <label className="avatar-upload">
                            <p>Click to upload avatar</p>
                            <input
                                type="file" 
                                name="avatar"
                                onChange={formFunction}
                            ></input>
                        </label>

                        <div className="user-full-name">
                            <input className="first-name" 
                                type="text" 
                                name="first_name" 
                                placeholder="*First name"
                                onChange={formFunction}
                            ></input>
                            <input className="last-name" 
                                type="text" 
                                name="last_name" 
                                placeholder="*Last name"
                                onChange={formFunction}
                            ></input>
                        </div>

                        <div className="username-email-container">
                            <div className="user-email">
                                <input id="email-input" 
                                    type="text" 
                                    name="email" 
                                    placeholder="*E-mail"
                                    onChange={e => { formFunction(e); validateEmail() }}
                                ></input>
                                <p id="email" className="hidden validation-error-messages">
                                    *Enter valid e-mail!
                                </p>
                            </div>
                            <div className="user-username">
                                <input id="username-input" 
                                    type="text" 
                                    name="username" 
                                    placeholder="*Username"
                                    onChange={event => { formFunction(event); validateLength(event)}}
                                    data-id="username"
                                ></input>
                                <p id="username" className="hidden validation-error-messages">
                                    *Username must be at least 8 characters.
                                </p>
                            </div>
                        </div>
                        
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="*Job title"
                            onChange={formFunction}
                        ></input>

                        <div className="user-info">
                            <input 
                                type="text" 
                                name="city" 
                                placeholder="*Location"
                                onChange={formFunction}
                            ></input>

                            <div className="phone-number-container">
                                <input id="phone-number-input"
                                    type="number" 
                                    name="phone_number" 
                                    placeholder="*Phone number"
                                    onChange={e => { formFunction(e); validateNumber()}}
                                    data-id="phone-number"
                                ></input>
                                <p id="phone-number" className="hidden validation-error-messages">
                                    *Enter phone number - only numbers and at least 10 numbers.
                                </p>
                            </div>
                        </div>

                        <p className="required">*Required</p>
                        <button 
                            id="user-form-submit" 
                            type="submit" 
                            onClick={closePopup}
                        >
                            Add user
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUserPopup;