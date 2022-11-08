import React from 'react';


const ServiceCard = ({ service }) => {
    const {_id, img, price, service_name, details} = service;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={img} alt='' /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p className='text-xl text-left text-teal-400 font-semibold'>Price: ${price}</p>
                <p className='text-left pb-4'>{details.slice(0, 100)}...</p>
            </div>
        </div>
    );
};

export default ServiceCard;