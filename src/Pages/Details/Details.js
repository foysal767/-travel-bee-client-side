import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from './Review';

const Details = () => {
    const { user } = useContext(AuthContext);
    const { _id, service_name, img, price, details } = useLoaderData()
    const [reviews, setReviews] = useState([])
    console.log(user)
    useEffect( () => {
        fetch(`http://localhost:5000/reviews/${_id}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
            console.log(data)
        })
    }, [_id])
    const handleReviewSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const singleReview = form.review.value;
        console.log(singleReview)

        const review = {
            service_id: _id,
            review: singleReview,
            userEmail: user?.email,
            service_name: service_name,
            userName: user?.displayName,
            userPhotoURL: user?.photoURL
        }

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('Review Added Successfully!')
            form.reset()
        })
        .catch(err => console.error(err))
    }
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
                        <form onSubmit={handleReviewSubmit}>
                            <div className="w-full mt-4">
                                <textarea rows="12" placeholder="Give your opinion..." name='review' className="px-4 py-10 w-full h-9 mx-auto rounded-md resize-none input input-bordered input-accent"></textarea>
                            </div>
                            <button className='btn btn-accent text-center' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto'>
                {
                    reviews.map(singleReview => <Review
                    key={singleReview._id}
                    singleReview={singleReview}
                    ></Review>)
                }
                
            </div>
        </div>
    );
};

export default Details;