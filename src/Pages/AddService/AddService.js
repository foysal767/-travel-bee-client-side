import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const handleAddService = event => {
        event.preventDefault()
        const form = event.target;
        const service_name = form.service_name.value
        const price = form.price.value
        const img = form.img.value
        const details = form.details.value;
        console.log(service_name, price, img, details)

        const service = {
            service_name: service_name,
            price: price,
            img: img,
            details: details
        }
        fetch('https://travel-bee-server-eight.vercel.app/all-service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Service added successfully')
                form.reset()
            })
            .catch(err => console.error(err))
    }
    return (
        <section className="w-10/12 mx-auto p-6 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={handleAddService} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="grid grid-cols-6 gap-4 col-span-full">
                        <div className="w-1/2 mx-auto col-span-full sm:col-span-3">
                            <label className="text-sm">Service name</label>
                            <input id="servicename" name='service_name' type="text" placeholder="Service Name" className="w-full rounded-md input input-bordered input-accent" required />
                        </div>
                        <div className="w-1/2 mx-auto col-span-full sm:col-span-3">
                            <label className="text-sm">Price</label>
                            <input id="price" name='price' type="number" placeholder="price" className="w-full rounded-md input input-bordered input-accent" required />
                        </div>
                        <div className="w-1/2 mx-auto col-span-full sm:col-span-3">
                            <label className="text-sm">Email</label>
                            <input id="email" name='email' type="email" placeholder="Email" className="w-full rounded-md input input-bordered input-accent" readOnly />
                        </div>
                        <div className="w-1/2 mx-auto col-span-full sm:col-span-3">
                            <label className="text-sm">Image URL</label>
                            <input id="img" name='img' type="text" placeholder="Image URL" className="w-full rounded-md input input-bordered input-accent" required />
                        </div>
                        <div className='mx-auto col-span-full sm:col-span-3'>
                            <textarea className="textarea textarea-accent" name='details' placeholder="Details about this Service" required ></textarea>
                        </div>
                    </div>
                    <button type="submit" className='w-1/5 mx-auto btn btn-success'>Add Service</button>
                </div>
            </form>
        </section>
    );
};

export default AddService;