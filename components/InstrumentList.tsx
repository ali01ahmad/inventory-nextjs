import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function InstrumentList() {
  const instruments = useSelector((state: RootState) => state.instruments.items);

  return (
    <div>
      <h3>Instruments</h3>
      <ul>
        {instruments.map((item) => (
          <li key={item.id}>
            {item.name} - {item.type} ({item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}
