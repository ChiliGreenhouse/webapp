import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onItemSelect: (item: string) => void;
  color?: "success" | "danger" | "primary" | "secondary";
}

function ListGroup({ items, heading, onItemSelect, color = "success" }: Props) {
  const [index_selected, set_index_selected] = useState(-1);

  return (
    <>
      <div className="text-center">
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className={"list-group list-group-item-" + color}>
          {items.map((item, index) => (
            <li
              className={
                index === index_selected
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                set_index_selected(index);
                onItemSelect(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
