import React from 'react';

export const ListGroup = props => {
    return(
        <ul className="list-group">
            {props.items.map(item => <li key={item._id} className="list-group-item">{item.name}</li>)}
        </ul>
    )
}
