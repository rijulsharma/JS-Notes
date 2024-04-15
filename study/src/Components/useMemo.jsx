import React, { useState, useMemo } from 'react';

const FactorialCalculator = () => {
  const [number, setNumber] = useState(0);

  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]); // Memoize when 'number' changes

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setNumber(value);
  };

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <input type="number" value={number} onChange={handleChange} />
      <p>
        Factorial of {number} is <strong>{factorial}</strong>
      </p>
    </div>
  );
};

export default FactorialCalculator;
