import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const[searchValue, setSearchValue]=React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  // Lógica para filtrar
  searchedTodos = todos;
  if (searchValue.length >= 1) {
      searchedTodos = todos.filter
      (todo => 
        {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        }
      );
  }

  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI 
      totalTodos =  { totalTodos }
      completedTodos = { completedTodos }
      searchValue = {searchValue} 
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = { completeTodo }
      deleteTodo = { deleteTodo }

    />
  );
}

export default App;
