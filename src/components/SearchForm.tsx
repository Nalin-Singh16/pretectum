'use client';

import React, { useState } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { searchVehicles } from '../store/slices/vehiclesSlice';
import { useAppSelector } from '@/store/hook';

const SearchForm: React.FC = () => {
    const searchTerm = useAppSelector(state => state.vehicles.searchTerm)
    const dispatch = useDispatch();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchVehicles(e.target.value));
    };

    return <Input
        placeholder="Search Vehicles"
        value={searchTerm}
        onChange={handleSearchChange}
        allowClear />;
};

export default SearchForm;
