import { createSlice } from '@reduxjs/toolkit';
import type { VehicleData } from '../../app/types';

interface VehiclesState {
    data: VehicleData[];
    searchTerm: string;
}

const initialState: VehiclesState = {
    data: [],
    searchTerm: '',
};

const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        setVehiclesData(state, action) {
            state.data = action.payload;
        },
        searchVehicles(state, action) {
            state.searchTerm = action.payload;
        },
    },
});

export const { setVehiclesData, searchVehicles } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
