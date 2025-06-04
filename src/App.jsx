import Header from './components/Header';
import { useState, useRef, useEffect } from 'react';
import Todo from './components/Todo';
import styles from './App.module.css'; 
import usePrevious from './hooks/usePrevious';
import Footer from './components/Footer';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem('todos');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const taskListHeadingRef = useRef(null);
  const prevTodosLength = usePrevious(todos.length);

  const addTodo = () => {
    if (!inputValue.trim()) return;

    const newTodo = {
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

  useEffect(() => {
    if (prevTodosLength > todos.length) {
      taskListHeadingRef.current?.focus();
    }
  }, [prevTodosLength, todos.length]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  useEffect(() => {
    const saveOnUnload = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };
    window.addEventListener('beforeunload', saveOnUnload);
    return () => window.removeEventListener('beforeunload', saveOnUnload);
  }, [todos]);

  return (
    <>
      <Header 
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAddTodo={addTodo}      
      />
      <main className={styles.main}>
        <section>
          <header>
            <h2 ref={taskListHeadingRef} tabIndex="-1">Tasks list</h2>
          </header>
          <ul>
            {todos.map(todo => (
              <Todo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                onDelete={deleteTodo}
                onToggle={toggleTodo}
                completed={todo.completed}
                onSave={handleSave}
              />
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App