import React from 'react';
import css from './UserInput.css';

const UserInput = (props) => {
  return <input className="UserInput" type="text" onChange={props.changed} value={props.currentName}/>
}

export default UserInput;
