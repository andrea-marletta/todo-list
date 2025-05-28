function Todo( {text, id, onDelete} ) {
  return (
    <li>
      <input type="checkbox" id={id} />
      {text}
      <button onClick={() => onDelete(id)}>Delete</button>
      <button>Edit</button>
    </li>
  )
}

export default Todo;