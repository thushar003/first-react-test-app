import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //items = [];

  // const message = items.length === 0 ? <p>No item found</p> : null;
  // using a const to store the message is one way to implement this.

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // }
  // using a function could be better since you can take inputs and change the message displayed accordingly.

  // But another way to do it is to use the ternary operator to check if the list is empty, and use && (the logical 'and' operator) to check if the list is empty. If it is, No item found is displayed. If the list has items, nothing will be rendered by that line of code.

  const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
  //empty <> and </> tells React to wrap the elements using Fragment
}

export default ListGroup;
