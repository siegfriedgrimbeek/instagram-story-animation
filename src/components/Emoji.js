// External Dependencies
import React from 'react';
import { string } from 'prop-types';

const Emoji = ({icon, name, onClick, styles, transitionActive, width}) => {
  let activeClass = '';

  if(transitionActive){
    activeClass = 'active';
  }

  return (
    <div className={"emoji " + activeClass} style={styles}>
      <img src={icon} onClick={onClick} name={name} width={width}/>
    </div>
  )
}

export default Emoji;
