import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Define the missing onSubmit function
    const onSubmit = (data) => {
        console.log(data); // Log form data to the console (can be replaced with desired action)
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close button */}
                        <Link className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" to="/">✕</Link>
                    </form>
                    <h3 className="font-bold text-lg">Login!</h3>
                    <div className="mt-4 space-y-2">
                        <span>Email</span><br />
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="w-80 px-3 border rounded-md outline-none"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                    </div>
                    <div className="mt-4 space-y-2">
                        <span>Password</span><br />
                        <input
                            type="text"
                            placeholder="Enter Your Password"
                            className="w-80 px-3 border rounded-md outline-none"
                            {...register("password", { required: true })}
                        /><br/>
                        {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
                    </div>
                    <div className="flex justify-around mt-4">
                        <button
                            type="submit"
                            className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                        >
                            Login
                        </button>
                        <p>
                            Not Registered?{' '}
                            <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
