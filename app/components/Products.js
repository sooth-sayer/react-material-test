import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import TextField from 'material-ui/lib/text-field';

const header = [
  { name: 'id', tooltip: 'The ID' },
  { name: 'name', tooltip: 'Name' },
  { name: 'price', tooltip: 'Price' },
];

class Products extends React.Component {
  handleHeaderCellClick = (event, row, column) => {
    this.props.onSort(header[column - 1].name);
  }

  render() {
    const { products } = this.props;

    return <div className='page-container'>
      <Table selectable={false}>
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
        <TableBody showRowHover={true} stripedRows={true}>
          {products.map((product, index) => (
            <TableRow key={index} hoverable={true}>
              <TableRowColumn>{product.id}</TableRowColumn>
              <TableRowColumn>{product.name}</TableRowColumn>
              <TableRowColumn>{product.price}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>;
  }
}

export default Products;
