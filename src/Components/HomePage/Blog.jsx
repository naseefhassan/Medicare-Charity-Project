import React, { useState } from 'react'
import Blogs from '../../Components/Blog/Blogs'
import blog_1 from "../../assets/Images/blog_2.png"
import blog_2 from "../../assets/Images/blog_4.jpg"
import blog_3 from "../../assets/Images/blog_3.jpg"


function Blog() {
  const blogs = [
    {
      img: blog_1,
      head: "Worlds Need Water",
      title: "Water is vital for life, health, and various human activities, including agriculture and the industry. It sustains the ecosystems, regulates climate, and has historical and recreational significance."
    },
    {
      img: blog_2,
      head: "Worlds Need Water",
      title: "Water is vital for life, health, and various human activities, including agriculture and the industry. It sustains the ecosystems, regulates climate, and has historical and recreational significance."
    },
    {
      img: blog_3,
      head: "Worlds Need Water",
      title: "Water is vital for life, health, and various human activities, including agriculture and the industry. It sustains the ecosystems, regulates climate, and has historical and recreational significance."
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % blogs.length);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + blogs.length) % blogs.length);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center text-5xl mt-1'>Next Generation for the Kingdom of God</h1>
      <div className='my-8 sm:flex flex-wrap gap-3 ml-[90px] sm:ml-0'>
        
        <div className='flex mt-4 justify-around bg-red-300 items-center '>
          <button onClick={handlePrev} className='mr-2'>Previous</button>
          <div className=" w-[600px] flex   bg-slate-200 rounded-lg"> 
      <div  className='w-1/2'>
        <img src={blogs[currentPage].img}   className="w-[380px] h-[300px]  rounded-t-lg bg-no-repeat bg-cover bg-center" />
      </div>
      <div className=" my-4 w-1/2">
        <h1  className="text-2xl text-center mb-3">{blogs[currentPage].head}</h1>
        <h1 className=" text-center">{blogs[currentPage].title}</h1>
      </div>
    </div>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

  
export default Blog