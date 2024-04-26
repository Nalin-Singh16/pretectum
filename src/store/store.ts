import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './slices/vehiclesSlice';

export function initializeStore() {
    return configureStore({
        reducer: {
            vehicles: vehiclesReducer,
        }
    });
}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof initializeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
