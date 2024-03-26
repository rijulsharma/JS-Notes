import React, { useState, createContext } from 'react';

export const MyContext = createContext();

function MyProvider({ children }) {
    const [data, setData] = useState('default');

    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyProvider;

