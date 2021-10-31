import React from 'react';

const Actor = ({ name, as }) => {
    return (
        <>
            <p><span>{name}</span></p>
            <p>{as}</p>
        </>
    )
}

export default Actor

