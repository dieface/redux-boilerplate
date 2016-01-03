import React, { Component, PropTypes } from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

/* Redux */
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';

export default class App extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props

    return (
      <div>
        <AddTodo
          onAddClick={text => {
            console.log('add todo', text);
            dispatch(addTodo(text));
          }} />
        <TodoList
          todos={visibleTodos}
          onTodoClick={id => {
            console.log('todo clicked', id);
            dispatch(completeTodo(id));
          }} />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter => {
            console.log('filter change', nextFilter);
            dispatch(setVisibilityFilter(nextFilter));
          }} />
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

function selectTodos(todos, filter) {
  console.log("selectTodos: ", todos);

  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
