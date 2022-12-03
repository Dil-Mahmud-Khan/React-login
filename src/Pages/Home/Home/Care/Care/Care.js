import React from 'react';
import care from '../../../../../assets/images/treatment.png';
const Care = () => {
    return (
        <div className="hero mt-16">
            <div className=" mt-3 hero-content flex-col lg:flex-row-reverse">
                <img src={care} className=" rounded-lg lg:w-2/5 shadow-2xl" alt='' />
                <div>
                    
                    <h1 className="text-5xl font-bold">Treat you health and be Happy in Life</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Care;