'use client';

import React, { useState, useEffect } from 'react';
import { Table, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/types'

interface VehicleData {
    Name: string;
    Model: string;
    Type: string;
    Manufacturer: string;
    'Manufacturing Date': string;
    Seating: number;
}

const VehicleTable: React.FC<{ data: VehicleData[] }> = ({ data }) => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: RootState) => state.vehicles.searchTerm); // getting error for state: 'state' is of type 'unknown'
    const [filteredData, setFilteredData] = useState<VehicleData[]>(data);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // Filter data based on search term
        const updatedData = data.filter((vehicle) =>
            // Example: match Name against search term, adjust as needed
            vehicle.Name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(updatedData);
    }, [data, searchTerm]);

    const columns = [
        { title: 'Name', dataIndex: 'Name', key: 'Name' },
        { title: 'Model', dataIndex: 'Model', key: 'Model' },
        { title: 'Type', dataIndex: 'Type', key: 'Type' },
        { title: 'Manufacturer', dataIndex: 'Manufacturer', key: 'Manufacturer' },
        { title: 'Manufacturing Date', dataIndex: 'Manufacturing Date', key: 'Manufacturing Date' },
        { title: 'Seating', dataIndex: 'Seating', key: 'Seating' },
    ];

    const handleTableChange = (pagination: any) => {
        setCurrentPage(pagination.current);
    };

    return (
        <Table
            columns={columns}
            dataSource={filteredData}
            pagination={{
                current: currentPage,
                onChange: handleTableChange,
                pageSize: 10, // Example: 10 items per page
                total: filteredData.length,
            }}
        />
    );
};

export default VehicleTable;
