'use client';

import React from 'react';
import { Button, Pagination, Table } from 'antd';
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
        console.log('filteredData', filteredData)
        dispatch(setFilterInfo(filters))
        dispatch(setSorterInfo(sorter))
        //update pagination object, according to the filters, the pagination.size should change
    };

    const columns: ColumnsType<VehicleData> = [
        { title: 'Name', dataIndex: 'Name', key: 'Name' },
        { title: 'Model', dataIndex: 'Model', key: 'Model', filteredValue: Array.isArray(filterInfo.Model) ? filterInfo.Model : [], filters: modelFilters, filterSearch: true, onFilter: (value: boolean | Key, record: VehicleData) => record.Model.includes(String(value)) },
        { title: 'Type', dataIndex: 'Type', key: 'Type', filteredValue: Array.isArray(filterInfo.Type) ? filterInfo.Type : [], filters: typeFilters, filterSearch: true, onFilter: (value: boolean | Key, record: VehicleData) => record.Type.includes(String(value)) },
        { title: 'Manufacturer', dataIndex: 'Manufacturer', key: 'Manufacturer', filteredValue: Array.isArray(filterInfo.Manufacturer) ? filterInfo.Manufacturer : [], filters: manufacturerFilters, filterSearch: true, onFilter: (value: boolean | Key, record: VehicleData) => record.Manufacturer.includes(String(value)) },
        {
            title: 'Manufacturing Date', dataIndex: 'Manufacturing Date', key: 'Manufacturing Date', sorter: (a, b) => {
                const dateA = new Date(a['Manufacturing Date']).getTime();
                const dateB = new Date(b['Manufacturing Date']).getTime();
                return dateA - dateB;
            }
        },
        { title: 'Seating', dataIndex: 'Seating', key: 'Seating', filteredValue: Array.isArray(filterInfo.Seating) ? filterInfo.Seating : [], filters: seatingFilters, filterSearch: true, onFilter: (value: boolean | Key, record: VehicleData) => record.Seating === value }
    ];

    return (
        <>
            <Table
                onChange={handleChange}
                columns={columns}
                dataSource={filteredData}
                bordered
                pagination={{
                    defaultPageSize: 13,
                }}
            />
        </>

    );
};

export default VehicleTable;
