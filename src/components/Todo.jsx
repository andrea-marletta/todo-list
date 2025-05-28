import styles from './Todo.module.css';

function Todo( { text, id, onDelete, completed, onToggle } ) {
  return (
    <li className={completed ? styles.completed : styles.active}>
      <input type="checkbox" id={id} onClick={() => onToggle(id)} />
      {text}
      <button onClick={() => onDelete(id)}>Delete</button>
      <button>Edit</button>
    </li>
  )
}

export default Todo;