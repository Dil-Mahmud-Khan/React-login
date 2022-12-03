import { async } from '@firebase/util';
import { useQueries } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data));
    },[user])

    
    
    // const { data: bookings = [] } = useQueries({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    return (
        <div>
            <h3 className='text-3xl mb-5'>My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>time</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {
                            bookings?.map((booking,i) => <tr>
                                <th>{i}</th>
                                <td>ddsfg</td>
                                <td>ddsfg</td>
                                <td>ddsfg</td>
                                <td>ddsfg</td>
                            </tr>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;