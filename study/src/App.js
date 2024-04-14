import React from 'react';
import MyProvider from './MyContext';
import MyComponent from './Components/MyComponent';
import MyComponentWithLoading from './hoc';
function App() {
    return (
        <MyProvider>
            <MyComponent />
            <MyComponentWithLoading></MyComponentWithLoading>
        </MyProvider>
        
    );
}

export default App;
