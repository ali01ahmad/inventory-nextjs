import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import InstrumentsPage from '../../pages/instruments';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { MockedProvider } from '@apollo/client/testing';
import { GET_INSTRUMENTS, ADD_INSTRUMENT } from '../../services/graphql/instruments';

// Sample data
const mockInstruments = [
  {
    id: 1,
    name: 'Oscilloscope',
    type: 'Electronics',
    quantity: 5,
    status: 'Available',
    placements: 'Lab A',
  },
];

// Mocks for Apollo
const mocks = [
  {
    request: {
      query: GET_INSTRUMENTS,
    },
    result: {
      data: {
        instruments: mockInstruments,
      },
    },
  },
  {
    request: {
      query: ADD_INSTRUMENT,
      variables: {
        name: 'Multimeter',
        type: 'Electronics',
        quantity: 2,
        status: 'Available',
        placements: 'Lab B',
      },
    },
    result: {
      data: {
        createInstrument: {
          id: 2,
          name: 'Multimeter',
          type: 'Electronics',
          quantity: 2,
          status: 'Available',
          placements: 'Lab B',
        },
      },
    },
  },
];

// Helper to render with providers
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Provider store={store}>{ui}</Provider>
    </MockedProvider>
  );
};

describe('Instruments Page', () => {
  it('renders instruments from GraphQL and allows adding new instrument', async () => {
    renderWithProviders(<InstrumentsPage />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Oscilloscope/i)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText('Name'), {
      target: { value: 'Multimeter' },
    });
    fireEvent.change(screen.getByPlaceholderText('Type'), {
      target: { value: 'Electronics' },
    });
    fireEvent.change(screen.getByPlaceholderText('Quantity'), {
      target: { value: '2' },
    });
    fireEvent.change(screen.getByPlaceholderText('Placement'), {
      target: { value: 'Lab B' },
    });

    fireEvent.click(screen.getByText('Add Instrument'));

    await waitFor(() => {
      expect(screen.getByText(/Multimeter/i)).toBeInTheDocument();
    });
  });
});
