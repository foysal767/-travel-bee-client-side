import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const AllService = () => {
    const [allService, setAllService] = useState([]);
    useEffect( ()=>{
        fetch('https://travel-bee-server-eight.vercel.app/all-service')
        .then(res => res.json())
        .then(data => setAllService(data))
    }, [])
    return (
        <div className='w-10/12 my-12 mx-auto'>
            <div className='text-center'>
                <h2 className="text-5xl text-teal-500 font-semibold mb-4">My All Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
                {
                    allService.map(singleService => <SingleService
                    key={singleService._id}
                    singleService={singleService}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default AllService;