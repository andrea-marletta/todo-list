import styles from './Todo.module.css';
import { useState, useRef, useEffect } from 'react';

function Todo( { text, id, onDelete, completed, onToggle, onSave } ) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const editButtonRef = useRef(null);
  const wasEditing = usePrevious(isEditing);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  useEffect(() => {
    if (wasEditing && !isEditing) {
      editButtonRef.current?.focus();
    }
  }, [wasEditing, isEditing]);

  return (
    <li className={completed ? styles.completed : styles.active}>
      <input type="checkbox" id={id} onChange={() => onToggle(id)} />
      {text}
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