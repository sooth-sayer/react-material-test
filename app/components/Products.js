import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

import styles from './Products/styles';

import { productPath } from '../router/routes';

const header = [
  { name: 'id', tooltip: 'The ID' },
  { name: 'name', tooltip: 'Name' },
  { name: 'price', tooltip: 'Price' },
];

class Products extends React.Component {
  handleHeaderCellClick = (event, row, column) => {
    this.props.onSort(header[column - 1].name);
  }

  handleProductClose = () => {
    const productOpen = this.props.children !== null;
    if (productOpen) {
      this.context.router.goBack();
    }
  }

  handleRowClick = (row) => {
    const { products } = this.props;
    const product = products[row];
    this.context.router.push(productPath(product.id));
  }

  handleClose = () => {
    this.context.router.goBack();
  }

  render() {
    const { products } = this.props;
    const productOpen = this.props.children !== null;

    return <div className='page-container'>
      <Table
        selectable={false}
        onCellClick={this.handleRowClick}
      >
        <TableHeader>
          <TableRow onCellClick={this.handleHeaderCellClick}>
            {header.map((col, index) => (
              <TableHeaderColumn
                key={index}
                tooltip={col.tooltip}
                className='table-header-column-sort'
              >
                {col.name}
              </TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody
          showRowHover={true}
          stripedRows={true}
        >
          {products.map((product, index) => (
            <TableRow key={index} hoverable={true}>
              <TableRowColumn>{product.id}</TableRowColumn>
              <TableRowColumn>{product.name}</TableRowColumn>
              <TableRowColumn>{product.price}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
        actions={[<FlatButton label='Close' onTouchTap={this.handleClose} />]}
        title='Product description'
        open={productOpen}
        onRequestClose={this.handleProductClose}
        bodyStyle={styles.dialogBody}
      >
        {this.props.children}
      </Dialog>
    </div>;
  }
}

Products.contextTypes = {
  router: React.PropTypes.object,
};

export default Products;
