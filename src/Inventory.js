import React, { useState } from "react";
import "./Inventory.css";

function Inventory({ products, initialInventory }) {
  const [inventory, setInventory] = useState(initialInventory);

  const updateInventory = (productId, amount) => {
    const newInventory = { ...inventory };
    newInventory[productId] += amount;
    setInventory(newInventory);
  };

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Inventory Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{inventory[product.id]}</td>
              <td>
                <button onClick={() => updateInventory(product.id, 1)}>
                  Receive Stock
                </button>
                <button onClick={() => updateInventory(product.id, -1)}>
                  Return Stock
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
