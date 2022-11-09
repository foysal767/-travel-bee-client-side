import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const Details = () => {
    const { service_name, img, price, details } = useLoaderData()
    return (
        <div>
            <div className="w-8/12 mx-auto shadow-md dark:bg-gray-900 dark:text-gray-100 mb-10">
                <div className="my-8 border-bottom text-center">
                    <h1 className='text-teal-600 text-3xl font-bold'>{service_name}</h1>
                </div>
                <div className="">
                    <div className="">
                        <img src={img} alt={service_name} className="w-3/4 mx-auto rounded-md h-72 dark:bg-gray-500" />
                    </div>
                    <div className="w-3/4 mx-auto space-y-2 text-center mt-8 mb-8">
                        <p className="leading-snug text-teal-600 text-xl font-medium mb-4">Price: ${price}</p>
                        <p className='text-left pb-10 text-lg'>{details}</p>
                    </div>
                </div>
            </div>
            {/* Reviews */}
            <div className='w-6/12 mx-auto '>
                <div className="p-8 shadow-sm rounded-xl">
                    <div className="w-full">
                        <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                        <div className="w-full">
                            <textarea rows="12" placeholder="Give your opinion..." className="p-4 w-full mx-auto rounded-md resize-none input input-bordered input-accent" spellcheck="false"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto'>
                <Review></Review>
            </div>
        </div>
    );
};

export default Details;