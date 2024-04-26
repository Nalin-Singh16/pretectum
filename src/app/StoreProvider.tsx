'use client'
import { AppStore, initializeStore } from '@/store/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { VehicleData } from './types'
import { setVehiclesData } from '@/store/slices/vehiclesSlice'

export default function StoreProvider({
    vehicleData,
    children
}: {
    vehicleData: VehicleData[]
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = initializeStore()
        storeRef.current.dispatch(setVehiclesData(vehicleData))
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}