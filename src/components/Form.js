import React, { Component } from 'react';


class Form extends Component {

  constructor(props){
    super(props)
    this.state = {
      breedInput: ''
    }

    this.handleBreedSearch = this.handleBreedSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBreedSearch(event){
    const breedInput = event.target.value
    this.setState({breedInput: breedInput})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.getDogData(this.state.breedInput)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search for a breed</label>
            <input
              type='text'
              value={this.state.breedInput}
              onChange={this.handleBreedSearch}>
            </input>
        </form>
      </div>
    )
  }

}

export default Form;
