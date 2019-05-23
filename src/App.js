import React, { Component } from 'react';
import FormContainer from './containers/FormContainer.js';
import PhotoListContainer from './containers/PhotoListContainer';
import ErrorContainer from './containers/ErrorContainer';

class App extends Component{



  render(){
    return(
     <>
      <h1>Dog List</h1>
      <FormContainer />
      <ErrorContainer />
      <PhotoListContainer />
     </>
   )
  }

}



export default App;
