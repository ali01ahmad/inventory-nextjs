import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useItem } from "../../../hooks/useItem";
import {
  selectAllItems,
  addItem,
  addItems,
  updateItem,
  removeItem,
} from "../../../store/slices/itemSlice";

export default function ItemPage() {
  const [newItem, setNewItem] = useState({
    id: 0,
    name: "",
    quantity: 1,
    shipmentId: 0,
  });
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { items: gqlItems, createItem } = useItem();
  const items = useSelector(selectAllItems);
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchShipments = async () => {
      const res = await fetch("/api/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: `{ shipments { id name } }` }),
      });
      const data = await res.json();
      setShipments(data.data.shipments);
    };
    fetchShipments();
  }, []);

  useEffect(() => {
    if (gqlItems.length > 0) {
      dispatch(addItems(gqlItems));
    }
  }, [gqlItems, dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.name || newItem.quantity <= 0 || newItem.shipmentId <= 0) {
      setError("Please fill in all fields correctly.");
      return;
    }

    try {
      if (editMode) {
        dispatch(updateItem({ id: newItem.id, changes: newItem }));
        setEditMode(false);
      } else {
        const created = await createItem({
          name: newItem.name,
          quantity: newItem.quantity,
          shipmentId: newItem.shipmentId,
        });
        const { __typename, ...cleanItem } = created;
        dispatch(addItem(cleanItem));
      }

      setNewItem({ id: 0, name: "", quantity: 1, shipmentId: 0 });
      setError("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEdit = (item: any) => {
    setNewItem(item);
    setEditMode(true);
  };

  const handleDelete = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items?.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}{" "}
            <button onClick={() => handleEdit(item)}>✏️ Edit</button>{" "}
            <button onClick={() => handleDelete(item.id)}>❌ Delete</button>
          </li>
        ))}
      </ul>

      <h2>{editMode ? "Edit Item" : "Add Item"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) =>
            setNewItem({ ...newItem, name: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) =>
            setNewItem({ ...newItem, quantity: Number(e.target.value) })
          }
          required
        />
        <select
          value={newItem.shipmentId}
          onChange={(e) =>
            setNewItem({
              ...newItem,
              shipmentId: Number(e.target.value),
            })
          }
          required
        >
          <option value={0}>Select Shipment</option>
          {shipments.map((shipment) => (
            <option key={shipment.id} value={shipment.id}>
              {shipment.name} (ID: {shipment.id})
            </option>
          ))}
        </select>
        <button type="submit">{editMode ? "Update" : "Add"}</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
