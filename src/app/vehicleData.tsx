import fs from 'fs/promises';
import path from 'path';
import type { VehicleData } from './types'; // Import your interface

export async function VehicleData() {
    const filePath = path.join(process.cwd(), 'public', 'vehicle_data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const vehicleData: VehicleData[] = JSON.parse(jsonData);

    return vehicleData;
}