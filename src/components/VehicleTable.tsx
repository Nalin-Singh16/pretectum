'use client';

import React from 'react';
import { Button, Table } from 'antd';
import { useAppSelector } from '@/store/hook';
import { VehicleData } from '@/app/types';
import { ColumnsType, TableProps } from 'antd/es/table';
import { useDispatch } from 'react-redux';
import { setFilterInfo, setSorterInfo } from '@/store/slices/vehiclesSlice';
import { Key } from 'antd/es/table/interface';

type OnChange = NonNullable<TableProps['onChange']>;

const VehicleTable = () => {
    const filteredData = useAppSelector(state => state.vehicles.displayData)
    const filterInfo = useAppSelector(state => state.vehicles.filterInfo)
    const sorterInfo = useAppSelector(state => state.vehicles.sorterInfo)

    const dispatch = useDispatch();
    //add filters for model, type, manufacterer and seating

    const modelFilters = Array.from(new Set(filteredData.map(item => item.Model)))
        .map(type => ({ text: type, value: type }));
    const typeFilters = Array.from(new Set(filteredData.map(item => item.Type)))
        .map(type => ({ text: type, value: type }));
    const manufacturerFilters = Array.from(new Set(filteredData.map(item => item.Manufacturer)))
        .map(type => ({ text: type, value: type }));
    const seatingFilters = Array.from(new Set(filteredData.map(item => item.Seating)))
        .map(type => ({ text: type, value: type }));

    const handleChange: OnChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        dispatch(setFilterInfo(filters))
        dispatch(setSorterInfo(sorter))
    };

    const columns: ColumnsType<VehicleData> = [
        { title: 'Name', dataIndex: 'Name', key: 'Name' },
        { title: 'Model', dataIndex: 'Model', key: 'Model', filteredValue: filterInfo.Model ? [filterInfo.Model] : null, filters: modelFilters, filterSearch: true, onFilter: (value: boolean | Key, record: VehicleData) => record.Model.includes(String(value)) },
        { title: 'Type', dataIndex: 'Type', key: 'Type', filteredValue: filterInfo.Type ? [filterInfo.Type] : null, filters: typeFilters, filterSearch: true, onFilter: (value: boolean | Key, record: VehicleData) => record.Type.includes(String(value)) },
        { title: 'Manufacturer', dataIndex: 'Manufacturer', key: 'Manufacturer', filteredValue: filterInfo.Manufacturer ? [filterInfo.Manufacturer] : null, filters: manufacturerFilters, filterSearch: true, onFilter: (value: boolean | Key, record: VehicleData) => record.Manufacturer.includes(String(value)) },
        { title: 'Manufacturing Date', dataIndex: 'Manufacturing Date', key: 'Manufacturing Date', sorter: true },
        { title: 'Seating', dataIndex: 'Seating', key: 'Seating', filteredValue: filterInfo.Seating ? [filterInfo.Seating] : null, filters: seatingFilters, filterSearch: true, onFilter: (value: boolean | Key, record: VehicleData) => record.Seating === value }
    ];

    return (
        <>
            <Table
                onChange={handleChange}
                columns={columns}
                dataSource={filteredData}
                pagination={{
                    defaultCurrent: 1,
                    defaultPageSize: 14,
                    total: filteredData.length,
                }}
            />
        </>

    );
};

export default VehicleTable;
