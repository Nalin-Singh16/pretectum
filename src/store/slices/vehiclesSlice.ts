import { createSlice } from '@reduxjs/toolkit';
import type { VehicleData } from '../../app/types';

interface VehiclesState {
    ogData: VehicleData[];
    displayData: VehicleData[]
    searchTerm: string;
}

const initialState: VehiclesState = {
    ogData: [],
    displayData: [],
    searchTerm: '',
};

const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        setVehiclesData(state, action) {
            state.ogData = action.payload;
            state.displayData = action.payload;
        },
        searchVehicles(state, action) {
            const searchTerm = action.payload.toLowerCase();
            state.searchTerm = action.payload;
            state.displayData = state.ogData.filter((vehicle) =>
                // Example: match Name against search term, adjust as needed
                vehicle.Name.toLowerCase().includes(searchTerm)
            );
        },
    },
});

export const { setVehiclesData, searchVehicles } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
