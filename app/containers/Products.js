import { connect } from 'react-redux';
import { create } from '../actions/products';
import Products from '../components/Products';

function mapStateToProps(state) {
  return {...state};
}

function mapDispatchToProps(dispatch) {
  return {
    onCreate: (product) => {
      dispatch(create(product));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
