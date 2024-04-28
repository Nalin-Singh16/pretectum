import fs from 'fs/promises';
import path from 'path';
import type { VehicleData } from './types'; // Import your interface

export async function getVehicleData() {
    const filePath = path.join(process.cwd(), 'public', 'vehicle_data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const vehicleData: VehicleData[] = JSON.parse(jsonData);

    vehicleData.forEach((vehicle, index) => {
        vehicle.key = index.toString(); // Set a unique key
        const date = new Date(vehicle['Manufacturing Date']);
        vehicle['Manufacturing Date'] = date.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
    });

    return vehicleData;
}