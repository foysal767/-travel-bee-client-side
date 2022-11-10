import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MySingleReview from './MySingleReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`https://travel-bee-server-eight.vercel.app/my-reviews/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
                console.log(data)
            })

    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review')
        if (proceed) {
            fetch(`https://travel-bee-server-eight.vercel.app/my-reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remaining = myReviews.filter(rvw => rvw._id !== id)
                        setMyReviews(remaining)
                    }
                })
        }
    }
    return (
        <div className='mb-4'>
            <h1 className='text-5xl font-bold text-center'>My Reviews</h1>
            {
                (myReviews.length > 0) ?
                    <>
                        {
                            myReviews.map(myReview => <MySingleReview
                                key={myReview._id}
                                myReview={myReview}
                                handleDelete={handleDelete}
                            ></MySingleReview>)
                        }
                    </>
                    :
                    <>
                        <h1 className='w-10/12 mx-auto text-center text-xl font-medium my-12'>You have no reviews</h1>
                    </>
            }

        </div>
    );
};

export default MyReviews;