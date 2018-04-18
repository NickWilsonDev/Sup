import React from 'react';
import './Sup.css';

let SupComponent = (props) => {
    return (
        <div className="sup-container">
            <div className="sup-header">
                {props.username} :: {props.title}
            </div>
            <div className="sup-content">
                {props.content}
            </div>
        </div>
   );
}
export default SupComponent;

