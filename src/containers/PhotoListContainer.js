import { connect } from 'react-redux';
import DogList from '../components/DogList';

const mapStateToProps = (state) => {
  return {
    dogData: state
  };
};

export default connect(mapStateToProps)(DogList);
