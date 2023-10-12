import React from 'react';

function Avatar(props) {
    return (
        <div>
            <img src={props.image} alt={`${props.firstName} ${props.lastName}`} />
            <h2>{props.firstName} {props.lastName}</h2>
        </div>
    );
}

export default Avatar;