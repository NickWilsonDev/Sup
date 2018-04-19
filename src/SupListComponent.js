import React, { Component } from 'react';

import SupComponent from './SupComponent.js';

let suplist = [
    {id: 1, username: 'Nick', title: 'Greeting', content: 'Hello all'},
    {id: 2, username: 'Ashley', title: 'Greeting', content: 'Hello '},
    {id: 3, username: 'Ben', title: 'Greeting', content: 'Hey'},
    {id: 4, username: 'Nick', title: 'Sup', content: 'Wassuupp'},
    {id: 5, username: 'Ashley', title: 'Sup', content: 'Wassssssuuuppp'},
    {id: 6, username: 'Ben', title: 'Sup', content: 'Wasaup'},
];

class SupListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supList: [],
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState(state => ({supList: data}));
            });

    }

    render() {
        
        return this.state.supList.map((data) => {
            return (
                <SupComponent key={data.id} username={data.username} title={data.title} content={data.body} />
            )
        });
    }
}

export default SupListComponent;
