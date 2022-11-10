import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const ServiceCard = ({ service }) => {
    const { _id, img, price, service_name, details } = service;
    return (
        <div className="card card-compact w-80 mx-auto bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt='' />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p className='text-xl text-left text-teal-400 font-semibold'>Price: ${price}</p>
                <p className='text-left pb-4'>{details?.slice(0, 100)}...</p>
            </div>
            <div className='mx-auto mb-8'>
                <Link to={`/service/${_id}`}><button className="btn btn-outline btn-accent">Details</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;