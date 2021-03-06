import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as TodoActions from './TodoActions';
import './App.css';
const App = ({ actions, todos }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const todo = form.querySelector('[name="todo"]').value;
    if(!todo){
      return
    }
    actions.addTodo(todo);
    e.target.querySelector('[name="todo"]').value = '';
  }

  const handleDelete = id => actions.deleteTodo(id);

  const handleCompleted = id => actions.toggleCompleted(id);


  const checkCompleted = value => {
    if (value) {
      return {
        textDecoration: 'line-through'
      }
    }
    return null;
  }

  return (
    <div className="root">
      <div>
        <h3> TODO APP</h3>
      </div>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" placeholder="Add a new todo...." name="todo" />
        <button>ADD</button>
      </form>
      <ul className="ul-styling">
        {todos.map(todo => (
          <li key={todo.id}>
            <div className="list-item">
              <input type="checkbox" name="todoCheck" onChange={() => handleCompleted(todo.id)} />
              <h5 style={checkCompleted(todo.completed)}>{todo.todo}</h5>
              <button onClick={() => handleDelete(todo.id)}>X</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => actions.clearCompleted()} className="complete-button">CLEAR COMPLETED</button>
      </div>
    </div>
  );
}

const mapState = state => ({ todos: state.todos });

const mapDispatch = dispatch => ({ actions: bindActionCreators(TodoActions, dispatch) });

export default connect(mapState, mapDispatch)(App);
