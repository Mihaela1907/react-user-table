import DeleteIcon from '../assets/x.svg';

const AddUserPopup = ({formFunction, addUserFunction}) => {
    // Get the popup
    let popup = document.getElementById("add-user-popup");

    // Logic for opening and closing the popup
    const openPopup = () => {
        popup.style.display = "block";
    };

    const closePopup = () => {
        // var isValid = true;
        // document.getElementById("add-user-form").querySelectorAll("[required]").forEach(function(i) {
        //     if ( i.value === '' )
        //         isValid = false;
        // });

        // if(isValid) {
        //     popup.style.display = "none";
        //     document.getElementById("add-user-form").reset();
        // };
        popup.style.display = "none";
        document.getElementById("add-user-form").reset();
    };


    return (
        <div>
            <button className="add-user-button" onClick={openPopup}>Add user</button>

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
                                placeholder="First name"
                                onChange={formFunction}
                                required="required"
                            ></input>
                            <input className="last-name" 
                                type="text" 
                                name="last_name" 
                                placeholder="Last name"
                                onChange={formFunction}
                                required="required"
                            ></input>
                        </div>

                        <div className="user-email">
                            <input className="" 
                                type="text" 
                                name="email" 
                                placeholder="E-mail"
                                onChange={formFunction}
                                required="required"
                            ></input>
                            <input className="" 
                                type="text" 
                                name="username" 
                                placeholder="Username"
                                onChange={formFunction}
                                required="required"
                            ></input>
                        </div>
                        
                        <input className="" 
                            type="text" 
                            name="title" 
                            placeholder="Job title"
                            onChange={formFunction}
                            required="required"
                        ></input>

                        <div className="user-info">
                            <input className="" 
                                type="text" 
                                name="city" 
                                placeholder="Location"
                                onChange={formFunction}
                                required="required"
                            ></input>
                            <input className="" 
                                type="number" 
                                name="phone_number" 
                                placeholder="Phone number"
                                onChange={formFunction}
                                required="required"
                            ></input>
                        </div>

                        <button type="submit" onClick={closePopup}>Add user</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUserPopup;