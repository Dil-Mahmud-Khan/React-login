import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast'

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate=useNavigate();

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("User Created Sucessfuly");
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));
                    navigate('/');
            })
            .catch(error =>{ console.log(error)
                setSignUpError(error.message);
            });
    }
    return (

        <div className='h-[800px]  flex justify-center items-center'>

            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label ">
                            <span className="label-text">Password</span>
                        </label>

                        <input type="password" {...register("password",
                            {
                                required: "Password is required"
                                ,
                                minLength: { value: 6, message: "Password must be 6 characters or longer" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-6' value="Sign Up" type="submit" />
                
                <div>
                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                </div>
                </form>
                <p>Already have an account? <Link className='text-secondary' to='/Login'>Please Login</Link></p>
                <div className='divider'>Or</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;