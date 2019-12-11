import React from 'react';

const UserOutput = (props) => {
  const style = {
    background: 'yellow'
  }
  return (
  <div style={style}>
    <p>{props.name}, what is your hobby?</p>
    <p>Playing games!</p>
  </div>
)
}

export default UserOutput;
