import DeleteIcon from '../assets/x.svg';

const AddUserPopup = () => {
    // Get the popup
    let popup = document.getElementById("add-user-popup");

    // Logic for opening and closing the popup
    const openPopup = () => {
        popup.style.display = "block";
    };

    const closePopup = () => {
        popup.style.display = "none";
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

                    <div className="add-user-popup-content">
                        <div className="user-full-name">
                            <input className="first-name" placeholder="First name"></input>
                            <input className="last-name" placeholder="Last name"></input>
                        </div>

                        <div className="user-email">
                            <input className="" placeholder="E-mail"></input>
                            <input className="" placeholder="Username"></input>
                        </div>
                        
                        <input className="" placeholder="Job title"></input>

                        <div className="user-info">
                            <input className="" placeholder="Location"></input>
                            <input className="" placeholder="Phone number"></input>
                        </div>
                    </div>

                    <div className="add-user-popup-footer">
                        <button>Add user</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserPopup;