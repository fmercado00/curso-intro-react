import React from "react";

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
      }, 3000);
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

   export { useLocalStorage };