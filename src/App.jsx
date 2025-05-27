import Header from './components/Header';
import { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue
    }

    setTodos(prevTodos => [...prevTodos, newTodo]);
    setInputValue('');
  };
  

  return (
    <>
      <Header 
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAddTodo={addTodo}      
      />
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </>
  );
}

export default App