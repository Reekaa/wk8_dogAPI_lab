import { connect } from 'react-redux';
import Error from '../components/Error.js';

const mapDispatchToProps = (dispatch) =>{
  return{
    error: () => {
      dispatch({
        type:'ERROR'

      })
    }
  }
};

export default connect(null, mapDispatchToProps)(Error);
