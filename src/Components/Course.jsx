import React from 'react'
import Cards from './Cards'
import list from "../../src/Components/list.json"
import {Link} from "react-router-dom"


function Course() {
  return (
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">We Are Delighted To Have You <span className="text-pink-500">Here!!!</span></h1>  
          <p className="mt-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                et totam. Tempora amet atque expedita, quae corrupti totam sed
                pariatur corporis at veniam est voluptas animi!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                et totam. Tempora amet atque expedita, quae corrupti totam sed
                pariatur corporis at veniam est voluptas animi!</p>
          <Link to={"/"}>
          <button className="mt-6 bg-pink-500 text-white rounded-md  px-4 py-2 hover:bg-pink-700 duration-200">Back</button>
          </Link>
        </div>  
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
              list.map((item)=>(
                <Cards key={item.id} item={item}/>
              ))
          }
        </div> 
    </div>
  )
}

export default Course
