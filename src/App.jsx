import Header from './components/Header';
import { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      key: Date.now(),
      text: inputValue
    }

    setTodos(prevTodos => [...prevTodos, newTodo]);
    setInputValue(e.target.value);

    todos.map(todo => {
      <Todo 
        text={inputValue} 
        id={id} 
        key={key} 
      />
    })
  }

  return (
    <>
      <Header 
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAddTodo={addTodo}      
      />
      <ul>
        {todos}
      </ul>
    </>
  );
}

export default App