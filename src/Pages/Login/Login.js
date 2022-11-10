import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { login, providerLogin } = useContext(AuthContext);
    useTitle('Login')
    const googleProvider = new GoogleAuthProvider()
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))

    }

    const handleGoogleLogIn = () => {
        providerLogin(googleProvider)
        .then(res => {
            const user = res.user;
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="hero w-full my-20">
            <div className="w-10/12 hero-content">
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Log In</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Log In" />
                        </div>
                    </form>
                    <p className='text-center'>New to Travel Bee? <Link className='text-teal-600 font-bold' to='/signup'>Sign Up</Link></p>

                    <div className='w-full text-center mx-auto mt-8'>
                        <p className='mb-4 text-lg font-medium'>Continue With</p>
                        <button onClick={handleGoogleLogIn} className="btn btn-outline btn-accent px-12">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;