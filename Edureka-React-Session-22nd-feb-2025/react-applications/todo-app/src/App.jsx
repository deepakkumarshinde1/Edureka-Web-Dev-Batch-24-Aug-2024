import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
// import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <section className="flex flex-col items-center">
        <Header />
        <TodoInput />
      </section>
    </>
  );
}

export default App;

// start with <> </> => fragment
// class => className
// for => htmlFor
// self-closing tags
// must have closing tags
// {} => JavaScript expression

// Bricks (component) to build wall
// wall (component) to build room
// room (component) to build house
