'use client';

import React, { useState } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { searchVehicles } from '../store/slices/vehiclesSlice';

const SearchForm: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        dispatch(searchVehicles(e.target.value));
    };

    return <Input placeholder="Search Vehicles" onChange={handleSearchChange} />;
};

export default SearchForm;
