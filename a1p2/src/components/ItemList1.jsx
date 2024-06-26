// src/components/ItemList1.jsx

import React from "react";

function ItemList1() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <li>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </li>
    </div>
  );
}

export default ItemList1;
