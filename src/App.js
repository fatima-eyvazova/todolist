import AdTodo from "./components/Adtodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
function App() {
  const valueLocalStorage = JSON.parse(localStorage.getItem('value'));

  const [todo, setTodo] = useState([]);
  console.log(todo, valueLocalStorage);



  useEffect(() => {
    if (todo.length === 0 && valueLocalStorage) {
      setTodo(valueLocalStorage);
    } else {
      localStorage.setItem('value', JSON.stringify(todo));
    }
  }, [todo.length])

  useEffect(() => {
    if (todo === 0 && valueLocalStorage) {
      setTodo(valueLocalStorage);
    } else {
      localStorage.setItem('value', JSON.stringify(todo));
    }
  }, [todo])

  return (
    <div className="App">
      <Header />
      <AdTodo setTodo={setTodo} todo={todo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
