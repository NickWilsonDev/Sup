import React, { Component } from 'react';

import UserComponent from './UserComponent.js';

class UserContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
        };
    }

    componentDidMount() {
        //this.setState({supList: suplist});
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({userList: data});
            });

    }

    render() {
        
        return this.state.userList.map((data) => {
            return (
                <UserComponent key={data.id} username={data.username} email={data.email} phone={data.phone} />
            )
        });
    }
}

export default UserContainerComponent;
