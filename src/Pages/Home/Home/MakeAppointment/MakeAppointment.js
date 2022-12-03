import React from 'react';
import doc from '../../../../assets/images/doctor.png';
import appointment from '../../../../assets/images/appointment.png';
const MakeAppointment = () => {
    return (

        <section className='rounded-lg'
            style={
                {
                    background: `url(${appointment})`
                }
            }
        >
            <div className="hero mt-16">
                <div className="hero-content  flex-col lg:flex-row">
                    <img src={doc} alt="" className="-mt-36 hidden lg:block md:block max-w-sm lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h2 className='text-lg text-primary font-bold '>Appointment</h2>
                        <h1 className="text-5xl font-bold text-white">Make an Appointment Today</h1>
                        <p className="py-6 text-white">Provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis consequatur ad aliquid amet nihil! cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;