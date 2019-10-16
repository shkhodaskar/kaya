import React from 'react'

const IconButton = ({img, name}) => {
    return (
        <article className="icon">
            <img src={img} alt="icon"></img>
            <h4>{name}</h4>
        </article>
    );
}

export default IconButton