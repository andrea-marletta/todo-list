function Todo( {text} ) {
  return (
    <li>
      {text}
      <button>Delete</button>
      <button>Edit</button>
    </li>
  )
}

export default Todo;