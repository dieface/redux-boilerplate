require('./fixed-data-table.css');

import React from 'react';
import App from './containers/App';

/* Redux */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp  from './reducers';
import { render } from 'react-dom'

/* Table */
import { Table, Cell, Column, ColumnGroup } from 'fixed-data-table';

let store = createStore(todoApp);
let rootElement = document.getElementById('root');

// Table data as a list of array.
const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  // .... and more
];

render(
  <Provider store={store}>
    <Table
      rowHeight={50}
      rowsCount={rows.length}
      width={5000}
      height={5000}
      headerHeight={50}>
      <Column
        header={<Cell>Col 1</Cell>}
        cell={<Cell>Column 1 static content</Cell>}
        width={2000}
      />
      <Column
        header={<Cell>Col 3</Cell>}
        cell={({rowIndex, ...props}) => (
          <Cell {...props}>
            Data for column 3: {rows[rowIndex][2]}
          </Cell>
        )}
        width={2000}
      />
    </Table>
  </Provider>,
  rootElement
);
