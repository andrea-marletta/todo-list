function Todo( {text} ) {
  return (
    <li>
      <input type="checkbox" />
      {text}
      <button>Delete</button>
      <button>Edit</button>
    </li>
  )
}

export default Todo;