// app/page.tsx
import type { NextPage } from 'next';
import VehicleTable from '../components/VehicleTable';
import SearchForm from '../components/SearchForm';
import { getVehicleData } from './vehicleData'; // Import the server component
import StoreProvider from './StoreProvider';
import { Flex } from 'antd';
import ClearFilter from '@/components/ClearFilter';

const HomePage: NextPage = async () => {
  const vehicleData = await getVehicleData(); // Use the server component 
  return (
    <StoreProvider vehicleData={vehicleData}>
      <Flex vertical={true} gap='large' className='w-full m-auto'>
        <SearchForm />
        <ClearFilter />
        <VehicleTable />
      </Flex>
    </StoreProvider >
  );
};

export default HomePage;

