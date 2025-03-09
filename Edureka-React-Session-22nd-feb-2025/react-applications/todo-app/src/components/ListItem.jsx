function ListItem(props) {
  return (
    <li className="flex justify-between items-center p-2 border">
      <section>
        <input type="checkbox" name="" id="" className="mr-4" />
        <span>{props.todoText}</span>
      </section>
      <section>
        <button className="bg-red-600 text-white px-2 mx-2 hover:bg-red-700 cursor-pointer">
          X
        </button>
        <button className="bg-green-600 text-white px-2 mx-2 hover:bg-green-700 cursor-pointer">
          Edit
        </button>
      </section>
    </li>
  );
}

export default ListItem;
{
  /* 
    <section></section>
    <article></article>
    <header></header>
    <footer></footer>
    <main></main>
    <aside></aside>
    <nav></nav>

    <div></div> 
*/
}
