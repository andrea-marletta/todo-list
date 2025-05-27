function Todo( {id, key, inputValue} ) {
  return (
    <li id={id} key={key}>{inputValue}</li>
  )
}

export default Todo;