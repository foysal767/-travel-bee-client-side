import React from 'react';

const Home = () => {
    return (
        <div className='text-center w-10/12 mx-auto'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")`, borderRadius: "10px" }}>
                <div className="hero-overlay bg-opacity-30 rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Travel Bee</h1>
                        <h1 className="mb-5 text-2xl font-semibold">A New Sky, A New Life</h1>
                        <p className="mb-5">I'm your travel guide. I have more than 5 years of experience in this field. You can purchase my services any time, anywhere.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;