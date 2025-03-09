import ListItem from "./ListItem";

function TodoList(props) {
  return (
    <ul className="mt-4 w-[30rem]">
      {props.list.map((todo, index) => {
        return <ListItem key={index} todoText={todo} index={index} />;
      })}
    </ul>
  );
}

export default TodoList;

//
