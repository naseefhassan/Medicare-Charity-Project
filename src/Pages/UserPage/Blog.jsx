import React from 'react'
import Blogs from '../../Components/Blog/Blogs'
import blog_1 from "../../assets/Images/blog_2.png"
import blog_2 from "../../assets/Images/blog_4.jpg"
import blog_3 from "../../assets/Images/blog_3.jpg"





function Blog() {
  return (
    <div className='flex flex-col justify-center items-center'  >
        <h1 className='text-center text-5xl mt-1'>Next Generation for the Kingdom of God</h1>
        <div className='  my-8  sm:flex gap-3  ml-[90px] sm:ml-0  '>
            <Blogs  img={blog_1} head="Worlds Need Water" title="Water is vital for life, health, and various human activities, including agriculture and the industry. It sustains the ecosystems, regulates climate, and has historical and recreational significance."/>
            <Blogs  img={blog_2} head="Worlds Need Water" title="Water is vital for life, health, and various human activities, including agriculture and the industry. It sustains the ecosystems, regulates climate, and has historical and recreational significance."/>
            <Blogs  img={blog_3} head="Worlds Need Water" title="Water is vital for life, health, and various human activities, including agriculture and the industry. It sustains the ecosystems, regulates climate, and has historical and recreational significance."/>
           

        </div>
    </div>
  )
}

export default Blog