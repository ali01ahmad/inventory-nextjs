import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setAssignments, addAssignment } from '../../store/slices/assigmentSlice';
import { useAssignments } from '../../hooks/useAssignment';

export default function AssignmentPage() {
  const dispatch = useDispatch();
  const { assignments: gqlAssignments, loading, addAssignment: gqlAdd } = useAssignments();
  const assignments = useSelector((state: RootState) => state.assignments.items);
  const [users, setUsers] = useState([]);
  const [instruments, setInstruments] = useState([]);

useEffect(() => {
  const fetchLookups = async () => {
    const resUsers = await fetch('/api/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `{ users { id name } }` }),
    });
    const resInstruments = await fetch('/api/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `{ instruments { id name } }` }),
    });

    const userData = await resUsers?.json();
    const instrumentData = await resInstruments?.json();

    setUsers(userData?.data.users);
    setInstruments(instrumentData?.data.instruments);
  };

  fetchLookups();
}, []);

  const [form, setForm] = useState({
    userId: 0,
    instrumentId: 0,
    startDate: '',
    endDate: '',
    status: 'Available',
  });
 
useEffect(() => {
  if (gqlAssignments.length > 0) {
    dispatch(setAssignments(gqlAssignments));
  }
}, [gqlAssignments, dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Convert date strings to ISO 8601 format
  const newAssignment = {
    ...form,
    startDate: new Date(form.startDate).toISOString(),
    endDate: new Date(form.endDate).toISOString(),
  };

  try {
    // 🔁 Send to GraphQL backend via hook (mutation)
    const createdAssignment = await gqlAdd(newAssignment);

    // ✅ If backend returns result, update Redux + reset form
    if (createdAssignment) {
      dispatch(addAssignment(createdAssignment));
      setForm({
        userId: 0,
        instrumentId: 0,
        startDate: '',
        endDate: '',
        status: 'Available',
      });
    }
  } catch (err: any) {
    console.error('Error adding assignment:', err.message);
  }
};

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Assignments</h2>
      <ul>
        {assignments.map((a) => (
          <li key={a.id}>
            User {a.userId} assigned {a.instrumentId} from {a.startDate} to {a.endDate} - Status: {a.status}
          </li>
        ))}
      </ul>

      <h3>Add New Assignment</h3>
      <form onSubmit={handleSubmit}>
        <select
            value={form.userId}
            onChange={(e) => setForm({ ...form, userId: Number(e.target.value) })}
        >
        <option value={0}>Select User</option>
        {users.map((user) => (
            <option key={user.id} value={user.id}>
            {user.name} (ID: {user.id})
            </option>
        ))}
        </select>

        <select
            value={form.instrumentId}
            onChange={(e) => setForm({ ...form, instrumentId: Number(e.target.value) })}
        >
        <option value={0}>Select Instrument</option>
        {instruments.map((inst) => (
            <option key={inst.id} value={inst.id}>
            {inst.name} (ID: {inst.id})
            </option>
        ))}
        </select>
        <input
          type="datetime-local"
          placeholder="Start Date"
          value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
        />
        <input
          type="datetime-local"
          placeholder="End Date"
          value={form.endDate}
          onChange={(e) => setForm({ ...form, endDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        />

        <button type="submit">Add Assignment</button>
      </form>
    </div>
  );
}
