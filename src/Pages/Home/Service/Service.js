import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-12'>
            <div className='text-center'>
                <h2 className="text-5xl font-semibold mb-4">My Services</h2>
                <p className='w-3/4 mx-auto py-6'>Chance are if you're traveling to Bangladesh, you may be up for a bit of adventure. Known around the world as a nation prone to tragedy and misfortune, this resilient, feisty and beautiful country may well surprise you. Come explore its beaches, old growth forests, tea plantations and swarming cities on a private Bangladesh tour with a friendly local guide. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link><button className='btn btn-outline btn-accent'>See All</button></Link>
        </div>
    );
};

export default Service;