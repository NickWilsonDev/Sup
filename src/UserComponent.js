import React from 'react';
//import './Sup.css';

let UserComponent = (props) => {
    return (
        <div>
            <div>
                Username: {props.username} | email: {props.email}
            </div>
            <div>
                Phone# {props.phone}
            </div>
        </div>
   );
}
export default UserComponent;

