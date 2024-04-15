import React, { useState, useEffect } from 'react';

const hc = (WrappedComponent) =>{
   const [isLoading,setIsLoading] = useState(true);
   return (props) =>{
    useEffect(() =>{
    
        const fetchData = async () =>{
            await new Promise((resolve) => setTimeout(resolve,5000) );
            setIsLoading(false);
        }
        fetchData();
    
       },[])
   }
   
}