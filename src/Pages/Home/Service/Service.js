import React, { useEffect, useState } from 'react';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch()
    } , [])
    return (
        <div>
            <h1>This is service</h1>
        </div>
    );
};

export default Service;