import Header from './components/Header';
import { useState } from 'react';
import Todo from './components/Todo';
import styles from './App.module.css'; 

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo = {
      key: Date.now(),
      id: Date.now(),
      text: inputValue,
      completed: false
    }

    setTodos(prevTodos => [...prevTodos, newTodo]);
    setInputValue('');
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  } 

  const toggleTodo = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const handleSave = (newText, id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  return (
    <>
      <Header 
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAddTodo={addTodo}      
      />
      <main className={styles.main}>
        <article className={styles.article}>
          <header>
            <h2>Tasks list</h2>
          </header>
          <ul>
            {todos.map(todo => (
              <Todo
                key={todo.key}
                id={todo.id}
                text={todo.text}
                onDelete={deleteTodo}
                onToggle={toggleTodo}
                completed={todo.completed}
                onSave={handleSave}
              />
            ))}
          </ul>
        </article>
      </main>
    </>
  );
}

export default App