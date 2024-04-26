// app/page.tsx
import type { NextPage } from 'next';
import VehicleTable from '../components/VehicleTable';
import SearchForm from '../components/SearchForm';
import { VehicleData } from './vehicleData'; // Import the server component
import { Provider } from 'react-redux';
import { initializeStore } from '../store';

const HomePage: NextPage = async () => {
  const vehicleData = await VehicleData(); // Use the server component 
  const store = initializeStore();
  return (
    <Provider store={store}>
      <div>
        <SearchForm />
        <VehicleTable data={vehicleData} />
      </div>
    </Provider >
  );
};

export default HomePage;

