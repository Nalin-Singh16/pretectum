import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './slices/vehiclesSlice';
import { RootState } from './types'; // Import your root state type

export function initializeStore(preloadedState?: RootState) {
    return configureStore({
        reducer: {
            vehicles: vehiclesReducer,
        },
        preloadedState,
    });
}