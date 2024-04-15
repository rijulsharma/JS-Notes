import React, { useState, useEffect, useMemo } from 'react';

// Higher Order Component for Loading Spinner
const withLoadingSpinner = (WrappedComponent) => {
  const idk = useMemo(() =>{
    
  },[])
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        // Simulate data fetching (e.g., from an API)
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2-second delay
        setIsLoading(false);
      };

      // Fetch data when component mounts
      fetchData();
    }, []);

    // Render the wrapped component with loading spinner if isLoading is true
    return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />;
  };
};

// Example component to be wrapped
const MyComponent = () => {
  return (
    <div>
      <h1>Welcome to My Component!</h1>
      <p>This component is wrapped with a loading spinner.</p>
    </div>
  );
};

// Apply the HOC to the component
const MyComponentWithLoading = withLoadingSpinner(MyComponent);

export default MyComponentWithLoading;
