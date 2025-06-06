import styles from './CustomCheckbox.module.css';

function CustomCheckbox ({ id, onToggle, completed, text }) {
  return (
    <label 
      htmlFor={id} 
      className={styles["checkbox-wrapper"]} 
      aria-label={`Toggle completition status of "${text}"`}>
      <input
        id={id}
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        className={styles["checkbox-input"]} 
      />
      <span aria-hidden="true" className={styles["checkbox-custom"]}></span>
    </label>
  )
}

export default CustomCheckbox;