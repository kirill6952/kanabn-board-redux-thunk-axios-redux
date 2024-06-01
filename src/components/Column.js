import React from 'react';

const Column = (props) => {
    return (
        <div className="col">
             <h3>{props.status.title}</h3>
        </div>
    );
};

export default Column;