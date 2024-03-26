import React, { useContext,useEffect,useMemo,useRef,useCallback } from 'react';
import { MyContext } from './MyContext';

export default function MyComponent() {
    const { data } = useContext(MyContext);
    const inputRef = useRef(null);

    
    const handleFocus = useCallback(() => {
        console.log("handleFocus is called");
        inputRef.current.value = '1000';
      inputRef.current.focus();
      inputRef.current.style.color = 'red';
      }, []);
    useEffect(() =>{
       console.log("yo");
       return() =>{
        console.log("cleaning up...");
       }
    },[]);

    const costlyResult = useMemo(() =>{
        console.log("calculating up...");
        let result = 0;
        for(let i = 0; i<1000000; i++){
            result += i;
        }
        return result;
    },[])

    return (
        <div>
            <h1>{data}</h1>
            <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
      <h2>{costlyResult}</h2>
        </div>
    );
}
