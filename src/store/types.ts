import { VehicleData } from '../app/types'; // Or wherever VehicleData is

export interface VehiclesState {
    data: VehicleData[];
    searchTerm: string;
    // Add more state slices as needed
}

export type RootState = {
    vehicles: VehiclesState;
    // Add more reducers as needed
};
