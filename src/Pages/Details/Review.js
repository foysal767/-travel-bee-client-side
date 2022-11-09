import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa'

const Review = ({ singleReview }) => {
    const { userEmail, review, userName, userPhotoURL } = singleReview;
    const { user } = useContext(AuthContext)
    return (
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4 items-center">
                    <div>
                        {
                            userPhotoURL ?
                                <>
                                    <img src={userPhotoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </>
                                :
                                <>
                                <p><FaUser /></p>
                                </>
                        }

                    </div>
                    <div>
                        <h4 className="">{userEmail}</h4>
                        {
                            userName ?
                            <>
                                <h1 className=''>{userName}</h1>
                            </>
                            :
                            <>
                                <p>No User Name Found</p>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className="p-4 text-sm dark:text-gray-400">
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;