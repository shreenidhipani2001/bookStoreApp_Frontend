import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios'

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();

     // Define the missing onSubmit function
    const onSubmit = async(data) => {
         // collect data from api call
         const userInfo=   {
            fullname:data.fullname,
            email:data.email,
            password:data.password
         }
        await axios.post("http://localhost:4001/user/signup",userInfo).then((res)=>{
            console.log(res.data);
            if(res.data){
                alert("signup successfull!!")

            }
            localStorage.setItem("Users",JSON.stringify(res.data.user))
         }).catch((err)=>{
            if(err.response){
                console.log(err)
            alert("Error"+err.response.data.message)
            }
         });

    };

  return (
    <>
        <div className="flex h-screen items-center justify-center  ">
        <div  className="w-[600px]  ">
             <div className="modal-box ">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                 {/* if there is a button in form, it will close the modal */}
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                
                <h3 className="font-bold text-lg">Sign Up</h3>
                <div className="mt-4 space-y-2">
                    <span>Name</span><br/>
                    <input type="text" placeholder="Enter Your Full Name" className="w-80 px-3 border rounded-md outline-none" {...register("fullname", { required: true })}></input>
                    <br/>
                        {errors.fullname && <p className="text-red-500 text-sm">Name is required</p>}
                </div>
                <div className="mt-4 space-y-2">
                    <span>Email</span><br/>
                    <input type="email" placeholder="Enter Your Email" className="w-80 px-3 border rounded-md outline-none" {...register("email", { required: true })}></input>
                    <br/>
                        {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                </div>
               {/* Password */}
               <div className="mt-4 space-y-2">
                    <span>Password</span><br/>
                    <input type="password" placeholder="Enter Your Password" className="w-80 px-3 border rounded-md outline-none" {...register("password", { required: true })}></input>
                    <br/>
                        {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
                </div>
                <div className="flex justify-around mt-4">
                    <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Sign Up</button>
                    <p className="text-xl">Already Registered?{""} <button to="/" className="underline text-blue-500 cursor-pointer "
                    onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>
                    {""}
                    <Login/>
                    </p>
                </div>
                </form>
            </div>
        </div>   
        </div>
    
    </>
  )
}

export default Signup
