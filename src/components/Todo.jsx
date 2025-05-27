function Todo( {id, text} ) {
  return (
    <li id={id}>
      {text}
      <button>Delete</button>
      <button>Edit</button>
    </li>
  )
}

export default Todo;