import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function useLocalStorage(itemName, initalValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initalValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
      let parsedItems; 
    
      if (!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initalValue));
        parsedItems = initalValue;
      } else {
        parsedItems = JSON.parse(localStorageItem);
      }

      setItem(parsedItems);
      setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });
  

  
  
  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (error){
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
 };

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
      loading={loading}
      error={error}
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
