import React, { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";

type TodoType = {
  id: number;
  todo: string;
};

const TodoList = (): JSX.Element => {
  const [todoId, setTodoId] = useState<number>(1);
  const [todoText, setTodoText] = useState<string>("0");
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const updateTodoText = (event:ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.currentTarget.value);
  };

  const getToDoList = async () => {
    const {data} = await axios.get<TodoType[]>("http://localhost:5000/todos");
    setTodoList(data);
  };
  
  const registerTodo = async () => {
    await axios.post("  http://localhost:5000/todos", { todo: todoText});
    setTodoText("");
    await getToDoList();
    };
  
  const deleteTodo = async (id: number) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    await getToDoList();
  };
  
  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <section>
      <section>
        <input type="text" value={todoText} onChange={updateTodoText} />
        <button onClick={registerTodo}>등록</button>
      </section>
      <section>
        {todoList.map((todo) => {
          return (
            <section key = {todo.id}>
              {todo.todo}
              <button onClick={() => deleteTodo(todo.id)}>X</button>
            </section>
          );
        })}
      </section>
    </section>
  );
};
export default TodoList;
