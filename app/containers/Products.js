import _ from 'lodash';
import { connect } from 'react-redux';
import { create, sort } from '../actions/products';
import Products from '../components/Products';

function sortProducts(products, column, order) {
  return _.orderBy(products, [column], [order]);
}

function mapStateToProps(state) {
  const { products, sortColumn, sortOrder } = state.products;
  return {
    products: sortProducts(products, sortColumn, sortOrder),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCreate: (product) => {
      dispatch(create(product));
    },
    onSort: (column, order) => {
      dispatch(sort(column, order));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
