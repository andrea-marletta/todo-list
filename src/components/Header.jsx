import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <h1 className={styles.title}>TODO LIST</h1>
      <form className={styles.form}>
        <p><label for="addTasks">Add a task</label></p>
        <p>
          <input type="text" id="addTasks" name="task" className={styles.input}></input>
          <button type="button" className={styles.button}>+ Add</button>
        </p>
      </form>
    </header>
  );
}

export default Header