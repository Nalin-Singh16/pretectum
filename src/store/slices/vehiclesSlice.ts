import { createSlice } from '@reduxjs/toolkit';
import type { VehicleData } from '../../app/types';

interface VehiclesState {
    ogData: VehicleData[];
    displayData: VehicleData[]
    searchTerm: string;
    filterInfo: Partial<VehicleData>
    sorterInfo: Partial<VehicleData>
}

const initialState: VehiclesState = {
    ogData: [],
    displayData: [],
    searchTerm: '',
    filterInfo: {},
    sorterInfo: {}
};


const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        setVehiclesData(state, action) {
            state.ogData = action.payload;
            state.displayData = action.payload;
        },
        setFilterInfo(state, action) {
            state.filterInfo = action.payload
            //update the display data here according to the filter applied

        },
        setSorterInfo(state, action) {
            state.sorterInfo = action.payload
        },
        searchVehicles(state, action) {
            state.searchTerm = action.payload;
            const searchTerm = action.payload.toLowerCase();
            state.displayData = state.ogData.filter((vehicle) =>
                // Example: match Name against search term, adjust as needed
                vehicle.Name.toLowerCase().includes(searchTerm) ||
                vehicle.Model.toLowerCase().includes(searchTerm) ||
                vehicle.Type.toLowerCase().includes(searchTerm) ||
                vehicle.Manufacturer.toLowerCase().includes(searchTerm) ||
                vehicle['Manufacturing Date'].toLowerCase().includes(searchTerm) ||
                vehicle.Seating.toString().includes(searchTerm)
            );
        },
        clearFilters(state) {
            console.log("In the reducer clear filter")
            state.displayData = state.ogData; // Reset displayData to the original dataset
            state.searchTerm = ''; // Clear the search term
            state.filterInfo = {};
            state.sorterInfo = {}
        },

    },
});

export const { setVehiclesData, searchVehicles, clearFilters, setFilterInfo, setSorterInfo } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
