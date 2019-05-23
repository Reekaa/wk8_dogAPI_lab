import React from 'react';

const Image = (props) => {

  const {message} = props.dogData;

  return(
    <div>
    <img src={message} />
    </div>
  )

}

export default Image;
