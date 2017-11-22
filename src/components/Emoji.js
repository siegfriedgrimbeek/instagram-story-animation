// External Dependencies
import React from 'react';
import { string } from 'prop-types';

const Emoji = ({icon, name, onClick, styles, transitionActive}) => {
  let activeClass = '';

  if(transitionActive){
    activeClass = 'active'
  }

  return (
    <div className={"emoji " + activeClass} style={styles}>
      <img src={icon} onClick={onClick} name={name}/>
    </div>
  )
}

export default Emoji;
