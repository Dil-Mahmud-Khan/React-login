import React from 'react';
import flouride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const servicesData =
        [
            {
                id: 1,
                name: "Flouride Treatment",
                description: " sdlkg akdsg askdgadsig a ksdhfaii el sdil shfg asgkha sdlkghdasg kdsa galkgalgha",
                img: flouride
            },
            {
                id: 2,
                name: "Cavity Filling",
                description: " sdlkg akdsg askdgadsig a ksdhfaii el sdil shfg asgkha sdlkghdasg kdsa galkgalgha",
                img: cavity
            },
            {
                id: 3,
                name: "Teeth Whitening",
                description: " sdlkg akdsg askdgadsig a ksdhfaii el sdil shfg asgkha sdlkghdasg kdsa galkgalgha",
                img: whitening
            },
        ]
    return (
        <div className='mt-16 '>
            <div className='text-center'>
                <h4 className='text-xl font-bold text-primary uppercase'>Our Service</h4>
                <h1 className='text-3xl '>Services We Provide</h1>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 lg:grid-cols-3'>
                {
                    servicesData.map(service=><Service
                    key={service.id}
                    service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;