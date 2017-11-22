// External Dependencies
import React from 'react';
import { string } from 'prop-types';


//Our Dependancies
import Emoji from './Emoji';

const Effect = ({icon, screenWidth, transitionActive}) => {

  let emoticons = [];
  let emotiWidth = 128;
  let emotiCount = screenWidth / emotiWidth;
  let emotiObjectArray = [];

  for (let i = 0; i < emotiCount.toFixed(); i++){

    let animationTimes =( Math.random() * (1.0000 - 4.000) + 4.000).toFixed(4);

    let styles = {
      animationDuration: animationTimes +'s'
    }

    emotiObjectArray.push({
      id: i,
      img: icon,
      styles: styles,
    });

  }

  emoticons = emotiObjectArray.map(function(emoti){
    return(
      <Emoji
        key = {emoti.id}
        icon={emoti.img}
        styles={emoti.styles}
        transitionActive={transitionActive}
       />
    )
  })

  return (
    <div className="emoji-effect">
        <div className='emoji-row'>
          {emoticons}
        </div>
    </div>
  )
}

export default Effect;
