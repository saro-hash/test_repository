import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return(
        <div>
            <input className="inputs" type="text" onChange={props.change} value={props.userName}/>
        </div>
    );
}

export default userInput;