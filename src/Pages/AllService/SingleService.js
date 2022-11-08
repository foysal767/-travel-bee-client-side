import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ singleService }) => {
    const { _id, img, service_name, price, details } = singleService;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl mt-8">
            <figure><img src={img} alt={service_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p className='text-xl text-left text-teal-400 font-semibold'>Price: ${price}</p>
                <p className='text-left pb-4'>{details.slice(0, 100)}...</p>
            </div>
            <div className='mx-auto mb-8'>
                <Link to={`/service/${_id}`}><button className="btn btn-outline btn-accent">Details</button></Link>
            </div>

        </div>
    );
};

export default SingleService;