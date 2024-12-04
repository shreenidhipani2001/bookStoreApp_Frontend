import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";  
function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Define the missing onSubmit function
    const onSubmit = (data) => {
        console.log(data); // Log form data to the console (can be replaced with desired action)
    };
  return (
    <div>
        <Navbar/>
        <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 ">
            <div className="flex h-screen items-center justify-center  ">
            <div  className="w-[600px]  ">
             <div className="modal-box ">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                 {/* if there is a button in form, it will close the modal */}
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                
                <h3 className="font-bold text-lg">Contact Us</h3>
                <div className="mt-4 space-y-2">
                    <span>Name</span><br/>
                    <input type="text" placeholder="Enter Your Full Name" className="w-80 px-3 border rounded-md outline-none" {...register("name", { required: true })}></input>
                    <br/>
                        {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                </div>
                <div className="mt-4 space-y-2">
                    <span>Email</span><br/>
                    <input type="email" placeholder="Enter Your Email" className="w-80 px-3 border rounded-md outline-none" {...register("email", { required: true })}></input>
                    <br/>
                        {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                </div>
               {/* Password */}
               <div className="mt-4 space-y-2">
                    <span>Message</span><br/>
                    <textarea rows="4" cols="50" name="comment" form="usrform">
                        Enter text here...
                    </textarea>
                </div>
                
                <div className="flex justify-left mt-4">
                <button className="bg-blue-400 justify text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Sign Up</button>    
                </div>
                </form>
            </div>
        </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
