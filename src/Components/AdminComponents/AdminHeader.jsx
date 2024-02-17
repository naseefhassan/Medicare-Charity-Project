
import React from "react"

function AdminHeader() {
  return (
        <div className="flex items-center justify-around p-2 bg-gray-400 ">
        <h1 className="font-bold sm:text-3xl">Nurse Page</h1>
        <div className="flex gap-1 sm:gap-3">
          <button className="bg-[#FF9D2B] p-2 sm:p-4 flex justify-center items-center hover:scale-[1.05] ">
            Show Nurse
          </button>
          <button className="bg-[#FF9D2B] p-2 sm:p-4 flex justify-center items-center hover:scale-[1.05] ">
            Add Nurse
          </button>
          <button className="bg-[#FF9D2B] p-2 sm:p-4 flex justify-center items-center hover:scale-[1.05]  ">
            Edit Nurse
          </button>
        </div>
      </div>
  )
}

export default AdminHeader