// External Dependencies
import React from 'react';

const Emoji = ({icon, name, onClick, styles, transitionActive, width}) => {
  let activeClass = '';

  if(transitionActive){
    activeClass = 'active';
  }

  return (
    <div className={"emoji " + activeClass} style={styles}>
      <img src={icon} onClick={onClick} name={name} width={width} alt={name}/>
    </div>
  )
}

export default Emoji;
