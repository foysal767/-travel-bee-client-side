import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const MySingleReview = ({ myReview }) => {
    const { service_name, review, userEmail } = myReview;
    const { user } = useContext(AuthContext)

    return (
        <div>
            {/* <div>
                <h1>Service Name: {service_name}</h1>
                <p>{review}</p>
                <p>{userEmail}</p>
            </div> */}
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md  bg-gray-200 mt-12">
                <div className="flex justify-between p-4">
                    <div className="flex items-center space-x-4">
                        <div className=''>
                            {
                                user?.photoURL ?
                                    <>
                                        <img src={user.photoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    </>
                                    :
                                    <>
                                        <p><FaUser /></p>
                                    </>
                            }

                        </div>
                        <div>
                            <h4 className="font-bold">{
                                user?.displayName ?
                                    <>
                                        {user.displayName}
                                    </>
                                    :
                                    <>
                                        User Name not found
                                    </>
                            }
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="p-4 dark:text-gray-400">
                    <p className='mb-4 text-base font-medium'>Service Name: {service_name}</p>
                    <p>{review}</p>
                </div>
                <Link className='mx-auto'><button className='btn btn-outline btn-error mt-4 text-center'>Delete</button></Link>
            </div>
        </div>
    );
};

export default MySingleReview;