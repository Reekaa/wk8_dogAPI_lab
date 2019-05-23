import React from 'react';
import Image from './Image';

const DogList = (props) => {

  const singleDog = props.dogData.map((dog, index) => {
    return (
      <Image
    dogData = {dog}
    key = {index}

    />
    )
  })




  return (
    <div>
      
      {singleDog}
    </div>
  )

}






export default DogList;
