import { connect } from 'react-redux';
import Form from '../components/Form.js';

const mapDispatchToProps = (dispatch) => ({
  getDogData(breed) {
    dispatch(() => {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(dogData => {
        if(dogData.status === 'success'){
        dispatch({
          type: 'DOG_DATA',
          dogData
        })
      }else {
        dispatch({
          type: 'ERROR'
        })
      }
      })
    })

  }
})

export default connect(null, mapDispatchToProps)(Form);
