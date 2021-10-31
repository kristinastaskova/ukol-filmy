import React from 'react';

const Actor = ({ name, as }) => {
    return (
        <div className="actor">
            <p><span>{name}</span></p>
            <p>jako: {as}</p>
        </div>
    )
}

export default Actor

