const TodoList = () => {
  const todos = ["Buy toothpaste", "Send message to HR", "Call Mr.Shyam"];

  return (
    <>
      <div className="todoList">
        <b>Todos: </b>

        <br />
        <div style={{ padding: "10px" }}>
          {todos.map((el) => (
            <>
              <div className="singleItem">
                <li>{el}</li>
              </div>
            </>
          ))}
        </div>
        <br />
      </div>
    </>
  );
};

export default TodoList;
