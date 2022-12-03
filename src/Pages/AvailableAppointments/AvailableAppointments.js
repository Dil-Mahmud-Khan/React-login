import React, { useEffect, useState } from 'react';
import format from 'date-fns/format';
import AppointmentOption from '../Appointment/AppointmentOption';
import BookingModal from '../Appointment/BookingModal/BookingModal';
import {useQuery} from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date=format(selectedDate,'PP');

    const{data:appointmentOptions=[],refetch,isLoading}=useQuery({
        queryKey:['appointmentOptions',date],
        queryFn:()=> fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res => res.json())

    });
    
    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))

    // }, [])


    return (
        <section className='mt-16'>


            <p className='text-center text-secondary font-bold'>Available Apointments on {format(selectedDate, 'PP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6' >
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    treatment={treatment}
                    refetch={refetch}
                    >
                </BookingModal>
            }

        </section>
    );
};

export default AvailableAppointments;