'use client';

import React from 'react';
import { Table } from 'antd';
import { useAppSelector } from '@/store/hook';

const VehicleTable = () => {
    const filteredData = useAppSelector(state => state.vehicles.displayData)

    const columns = [
        { title: 'Name', dataIndex: 'Name', key: 'Name' },
        { title: 'Model', dataIndex: 'Model', key: 'Model' },
        { title: 'Type', dataIndex: 'Type', key: 'Type' },
        { title: 'Manufacturer', dataIndex: 'Manufacturer', key: 'Manufacturer' },
        { title: 'Manufacturing Date', dataIndex: 'Manufacturing Date', key: 'Manufacturing Date' },
        { title: 'Seating', dataIndex: 'Seating', key: 'Seating' },
    ];

    return (
        <Table
            columns={columns}
            dataSource={filteredData}
            pagination={{
                defaultCurrent: 1,
                defaultPageSize: 14,
                total: filteredData.length,
            }}
        />
    );
};

export default VehicleTable;
