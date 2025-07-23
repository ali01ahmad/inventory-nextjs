import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setInstruments, addInstrument } from '../../store/slices/instrumentSlice';
import { useInstruments } from '../../hooks/useInstruments';

export default function InstrumentsPage() {
  const dispatch = useDispatch();
  const { instruments: gqlInstruments, loading, addInstrument: gqlAdd } = useInstruments();
  const instruments = useSelector((state: RootState) => state.instruments.items);

  const [form, setForm] = useState({
    name: '',
    type: '',
    quantity: 1,
    status: 'Available',
    placements: '',
  });
useEffect(() => {
  if (gqlInstruments.length > 0) {
    dispatch(setInstruments(gqlInstruments));
  }
}, [gqlInstruments, dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newInstrument = await gqlAdd(form);
    if (newInstrument) {
      dispatch(addInstrument(newInstrument));
      setForm({ name: '', type: '', quantity: 1, status: 'Available', placements: '' });
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Instruments</h2>
      <ul>
        {instruments.map((i) => (
          <li key={i.id}>
            {i.name} - {i.type} ({i.quantity}) in {i.placements}
          </li>
        ))}
      </ul>

      <h3>Add New Instrument</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: Number(e.target.value) })}
        />
        <input
          type="text"
          placeholder="Status"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        />
        <input
          type="text"
          placeholder="Placements"
          value={form.placements}
          onChange={(e) => setForm({ ...form, placements: e.target.value })}
        />
        <button type="submit">Add Instrument</button>
      </form>
    </div>
  );
}
