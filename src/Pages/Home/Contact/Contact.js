import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {

    return (
        <section
            className='rounded-lg'
            style={
                {
                    background: `url(${appointment})`
                }
            }>

            <div className='text-center mt-16 pb-6'>
                <h4 className='text-xl pt-6 text-primary uppercase font-bold'>Contact Us</h4>
                <h5 className='text-3xl text-white'>Stay Connected With Us</h5>

                <div>
                    <div className="hero ">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">

                                        </label>
                                        <input type="text" placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">

                                        </label>
                                        <input type="text" placeholder="Subject" className="input input-bordered" />
                                        <textarea name="" id="" cols="20" rows="5" placeholder='Write here..' className='mt-2 border rounded-lg pl-2 pt-2 '></textarea>
                                        <button className=" mt-2 btn btn-primary">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;