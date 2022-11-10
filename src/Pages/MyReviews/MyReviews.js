import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MySingleReview from './MySingleReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
                console.log(data)
            })

    }, [user?.email])
    return (
        <div className='mb-4'>
            <h1 className='text-5xl font-bold text-center'>My Reviews</h1>
            {
                myReviews.map(myReview => <MySingleReview
                key={myReview._id}
                myReview={myReview}
                ></MySingleReview>)
            }
        </div>
    );
};

export default MyReviews;