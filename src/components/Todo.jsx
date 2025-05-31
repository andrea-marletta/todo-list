import styles from './Todo.module.css';
import { useState, useRef, useEffect } from 'react';
import usePrevious from '../hooks/usePrevious';

function Todo( { text, id, onDelete, completed, onToggle, onSave } ) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const editButtonRef = useRef(null);
  const wasEditing = usePrevious(isEditing);

  useEffect(() => {
    if (wasEditing && !isEditing) {
      editButtonRef.current?.focus();
    }
  }, [wasEditing, isEditing]);

  return (
    <li>
      <input 
        type="checkbox" 
        id={id} 
        onChange={() => onToggle(id)} 
        aria-label={`Toggle completition status of "${text}"`} 
        checked={completed} 
        className={styles.checkbox}
      />
      <span className={completed && styles.completed}>{text}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => setIsEditing(true)} ref={editButtonRef}>Edit</button>
      {isEditing && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);
            onSave(editText, id);
          }}
        >
          <label htmlFor={`{editInput-${id}}`}>Edit task</label>
          <input id={`{editInput-${id}}`} type="text" value={editText} 
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