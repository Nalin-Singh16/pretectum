'use client';

import React, { useState } from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { clearFilters } from '@/store/slices/vehiclesSlice';

const ClearFilter: React.FC = () => {
    const dispatch = useDispatch();
    // Function to clear local state and Redux state
    const clearAll = () => {
        dispatch(clearFilters()); // Dispatch the Redux action to clear filters
        console.log("All filters and sorts have been cleared");
    };

    return (
        <Button onClick={clearAll}>Reset all</Button>
    );
};

export default ClearFilter;
