import styles from './Todo.module.css';
import { useState } from 'react';

function Todo( { text, id, onDelete, completed, onToggle, onSave } ) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  return (
    <li className={completed ? styles.completed : styles.active}>
      <input type="checkbox" id={id} onClick={() => onToggle(id)} />
      {text}
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      {isEditing && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);
            onSave(editText, id);
          }}
        >
          <label htmlFor="editInput">Edit task</label>
          <input id="editInput" type="text" value={editText} 
            onChange={(e) =>
              setEditText(e.target.value)
            } />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}
    </li>
  )
}

export default Todo;