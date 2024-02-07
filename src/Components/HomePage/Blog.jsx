import React, { useState } from "react";
import blog_1 from "../../assets/Images/blog_2.png";
import blog_2 from "../../assets/Images/blog_4.jpg";
import blog_3 from "../../assets/Images/blog_3.jpg";
import RightArrow from "../../assets/Images/right-arrow.png";
import LeftArrow from "../../assets/Images/left-arrow.png";

function Blog() {
  const blogs = [
    {
      img: blog_1,
      head: "Worlds Need Water",
      title:
        "Water is vital for life, health, and various human activities, including agriculture and the industry. It sustains the ecosystems, regulates climate, and has historical and recreational significance.",
    },
    {
      img: blog_2,
      head: "Childrens Need Education",
      title:
        "Education is essential for children as it equips them with knowledge, skills, and critical thinking abilities necessary for personal and societal development. It empowers them to navigate the world, and contribute meaningfully to their communities.",
    },
    {
      img: blog_3,
      head: "Refugees Need Food",
      title:
        "Refugees require food to meet their basic nutritional needs and sustain their health during displacement. Adequate food supply is crucial for their survival and well-being as they face the challenges of resettlement.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % blogs.length);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + blogs.length) % blogs.length);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-5xl mt-1">
        Next Generation for the Kingdom of God
      </h1>
      <div className="my-8 sm:flex flex-wrap gap-3 ml-[90px] sm:ml-0">
        <div className="flex sm:gap-10 mt-4 w-[450px] sm:w-full justify-around my-10 items-center ">
          <img
            className="w-8 h-8"
            onClick={handleNext}
            src={LeftArrow}
            alt=""
          />

          <div className=" w-[600px] flex items-center   bg-slate-200 rounded-lg">
            <div className="w-1/2">
              <img
              onClick={handlePrev}
                src={blogs[currentPage].img}
                className="w-[380px] h-[300px]  rounded-t-lg bg-no-repeat bg-cover bg-center"
              />
            </div>
            <div className=" my-4 w-1/2">
              <h1 className="text-2xl text-center mb-3">
                {blogs[currentPage].head}
              </h1>
              <h1 className=" text-center">{blogs[currentPage].title}</h1>
            </div>
          </div>

          <img
            className="w-8 h-8"
            onClick={handleNext}
            src={RightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
