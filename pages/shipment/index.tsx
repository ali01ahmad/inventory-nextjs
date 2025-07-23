import { useEffect,useState } from "react";

export default function ShipmentPage() {
  const [shipments, setShipments] = useState([]);
  const [newShipment, setNewShipment] = useState({
        name: '',
        status: 'Pending',
        notes: '',
});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await fetch('/api/shipments');
        if (!response.ok) {
          throw new Error('Failed to fetch shipments');
        }
        const data = await response.json();
        setShipments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShipments();
  }, []);

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  const mutation = `
    mutation AddShipment($name: String!, $status: String!, $notes: String) {
      addShipment(name: $name, status: $status, notes: $notes) {
        id
        name
        status
        notes
        createdAt
      }
    }
  `;

  const variables = {
    name: newShipment.name,
    status: newShipment.status,
    notes: newShipment.notes,
  };

  try {
    const response = await fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: mutation,
        variables,
      }),
    });

    const { data, errors } = await response.json();

    if (errors) {
      console.error(errors);
      throw new Error('GraphQL error while adding shipment');
    }

    const addedShipment = data.addShipment;
    setShipments((prev) => [addedShipment, ...prev]);
    setNewShipment({ name: '', status: 'Pending', notes: '' });
  } catch (err: any) {
    setError(err.message);
  }
};


  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
    <div className="p-8">
      <h2 className="text-2xl mb-4">Shipments</h2>
      <ul>
        {shipments.map((shipment) => (
          <li key={shipment.id}>
            {shipment.name} - {shipment.status}
          </li>
        ))}
      </ul>
    </div>
    <h3>Add New Shipment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shipment Name"
          className="p-2 border rounded w-full mb-2"
          value={newShipment.name}
          onChange={(e) => setNewShipment({ ...newShipment, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Shipment Status"
          className="p-2 border rounded w-full mb-2"
          value={newShipment.status}
          onChange={(e) => setNewShipment({ ...newShipment, status: e.target.value })}
        />
        <input
          type="text"
          placeholder="Notes"
          className="p-2 border rounded w-full mb-2"
          value={newShipment.notes}
          onChange={(e) => setNewShipment({ ...newShipment, notes: e.target.value })}
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Add Shipment
        </button>
      </form>
    </>
  );
}