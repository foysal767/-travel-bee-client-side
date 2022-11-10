import React from 'react';

const AnotherSection = () => {
    return (
        <section className=" mx-auto bg-gray-100 rounded-xl p-6 my-12">
            <div className="container items-center grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                    <h1 className="text-3xl font-extrabold dark:text-gray-50 mb-2">Choice Which Service You Want</h1>
                    <p>A person who guides visitors in the language of their choice and interprets the cultural and natural heritage of an area which person normally possesses an area-specific qualification usually issued and/or recognised by the appropriate authority.</p>
                </div>
                <img src="https://backstageviral.com/wp-content/uploads/2021/09/tourist-attractions-of-canada.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
            </div>
        </section>
    );
};

export default AnotherSection;