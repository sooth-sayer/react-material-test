import _ from 'lodash';
import { connect } from 'react-redux';
import Product from '../../components/Products/Product';

function getProduct(products, id) {
  return _.find(products, { id: id });
}

function mapStateToProps(state, props) {
  const { products } = state.products;
  const { id } = props.routeParams;
  return {
    product: getProduct(products, parseInt(id)),
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
