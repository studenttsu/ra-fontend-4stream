import React, { useState, useEffect, useContext } from 'react';
import { createContext } from "react";
import MastersApi from '../../api/masters-api';

export const MastersContext = createContext(null);

export function MastersProvider({ children }) {
    const [masters, setMasters] = useState([]);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        MastersApi.getMasters(search).then(setMasters);
    }, [search]);

    function removeMaster(masterId) {
        const filteredMasters = masters.filter((master) => master.id !== masterId);
        setMasters(filteredMasters);
    }

    return <MastersContext.Provider value={{ masters, removeMaster, search, setSearch }}>
        {children}
    </MastersContext.Provider>
}

export const useMasters = () => useContext(MastersContext);
