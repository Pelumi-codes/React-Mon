import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=100x80`}/>
        <h2> {props.monster.name } </h2>
        <h1> {props.monster.email } </h1>
    </div>
)


