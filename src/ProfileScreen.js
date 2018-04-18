import React from 'react';
import UserContainerComponent from './UserContainerComponent.js';


let ProfileScreen = ({match, users}) => {
    if (match.params.username === ':id' || match.params.username === '') {
        return (
            <div>
                <h2> No user specified please choose</h2>
                <UserContainerComponent />
            </div>
        );
    } else {
        return (

            <div>
                <h2>Profile Page {match.params.username}</h2>
        </div>
        );
    }
}


export default ProfileScreen;
