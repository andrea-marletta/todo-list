function Todo( {text, id} ) {
  return (
    <li>
      <input type="checkbox" id={id} />
      {text}
      <button>Delete</button>
      <button>Edit</button>
    </li>
  )
}

export default Todo;