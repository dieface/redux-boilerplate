import React from 'react';
import App from './containers/App';

/* Redux */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp  from './reducers';
import { render } from 'react-dom'

/* FixedDataTable */
// import FilterTable from './components/FilterTable';
// require('./fixed-data-table.css');

/* ReactDataGrid */
const ReactDataGrid = require('react-data-grid');

let store = createStore(todoApp);
let rootElement = document.getElementById('root');

const _rows = [];
for (let i = 1; i < 1000; i++) {
  _rows.push({
    id: i,
    title: 'Title ' + i,
    count: i * 1000
  });
}

//A rowGetter function is required by the grid to retrieve a row for a given index
const rowGetter = function(i){
  return _rows[i];
};

const columns = [
  {
    key: 'id',
    name: 'ID'
  },
  {
    key: 'title',
    name: 'Title'
  },
  {
    key: 'count',
    name: 'Count'
  }
];

render(
  <Provider store={store}>
    <ReactDataGrid
    columns={columns}
    rowGetter={rowGetter}
    rowsCount={_rows.length}
    minHeight={500} />
    {/*<FilterTable />*/}
    {/*<App />*/}
  </Provider>,
  rootElement
);
