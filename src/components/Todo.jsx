import styles from './Todo.module.css';

function Todo( {text, id, onDelete} ) {
  return (
    <li className={styles.active}>
      <input type="checkbox" id={id} />
      {text}
      <button onClick={() => onDelete(id)}>Delete</button>
      <button>Edit</button>
    </li>
  )
}

export default Todo;