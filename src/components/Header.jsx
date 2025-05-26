import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.div}>
        <h1>TODO LIST</h1>
      </div>
      <form className={styles.form}>
        <p><label for="addTasks">Add a task</label></p>
        <p>
          <input type="text" id="addTasks" name="task" className={styles.input}></input>
          <button className={styles.button}>+ Add</button>
        </p>
      </form>
    </header>
  );
}

export default Header