import React from 'react';

const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '1rem',
        textAlign: 'center',
        margin: '1rem',
        border: '0.0625rem solid black'
    };

    return (
        <div style={style} onClick={props.clicked}>
            <p>{props.letter}</p>
        </div>
    )
}
export default Char;