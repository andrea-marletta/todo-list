import styles from './Header.module.css';

function Header({ inputValue, setInputValue, onAddTodo }) {
  return (
    <header>
      <h1 className={styles.title}>TODO LIST</h1>
      <form 
        className={styles.form} 
        onSubmit={(e) => {
          e.preventDefault();
          onAddTodo();
          }
        }
      >
        <label htmlFor="addTasks">Add a task</label>
        <input 
          type="text" 
          id="addTasks" 
          name="task" 
          value={inputValue}
          className={styles.input} 
          onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit" className={styles.button}>
          + Add
        </button>
      </form>
    </header>
  );
}

export default Header