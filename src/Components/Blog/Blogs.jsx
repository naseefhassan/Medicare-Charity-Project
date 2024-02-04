import React from "react";

function Blogs({img,alt,head,title}) {
  return (
    <div className="w-[380px]   bg-slate-200 rounded-lg"> 
      <div>
        <img src={img} alt={alt}  className="w-[380px] h-[300px]  rounded-t-lg bg-no-repeat bg-cover bg-center" />
      </div>
      <div className=" my-4">
        <h1  className="text-2xl text-center mb-3">{head}</h1>
        <h1 className=" text-center">{title}</h1>
      </div>
    </div>
  );
}

export default Blogs;
