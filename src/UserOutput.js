import React from 'react';

const userOutput = (props) => {
    const style = {
        backgroundColor: 'magenta',
        color: 'white'
    }
    return(
        <div style={style}>
            <p>Username: {props.arg1}</p>
            <p>Fullname: {props.arg2}</p>
        </div>
    );
}

export default userOutput;