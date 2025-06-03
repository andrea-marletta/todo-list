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
      <div className={styles.taskInfo}>
        <input 
          type="checkbox" 
          id={id} 
          onChange={() => onToggle(id)} 
          aria-label={`Toggle completition status of "${text}"`} 
          checked={completed} 
          className={styles.checkbox}
        />
        <div className={styles.taskContent}>
          <span className={completed && styles.completed}>{text}</span>
          <button onClick={() => onDelete(id)} className={styles.delete}>Delete</button>
          <button onClick={() => setIsEditing(true)} ref={editButtonRef}>Edit</button>
        </div>
      </div>
      {isEditing && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsEditing(false);
            onSave(editText, id);
          }}
          className={styles.form}
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