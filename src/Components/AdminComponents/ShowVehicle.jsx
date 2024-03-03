import React from 'react'
import AdminHeader from './AdminHeader'

function ShowVehicle() {
  return (
    <div>
         <AdminHeader
        title={"Ambulance List"}
        Home={"Home"}
        Homeroute={"/admin/adminhome"}
      />
    </div>
  )
}

export default ShowVehicle