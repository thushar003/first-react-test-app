import { MouseEvent, useState } from "react";

// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // { item: string } => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //items = [];

  // const message = items.length === 0 ? <p>No item found</p> : null;
  // using a const to store the message is one way to implement this.

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // }
  // using a function could be better since you can take inputs and change the message displayed accordingly.

  // But another way to do it is to use the ternary operator to check if the list is empty, and use && (the logical 'and' operator) to check if the list is empty. If it is, No item found is displayed. If the list has items, nothing will be rendered by that line of code.

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler function
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
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
