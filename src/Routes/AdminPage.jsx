import { Route, Routes } from 'react-router-dom'
import NursePage from '../Pages/AdminPages/NursePage'
import AdminPage from '../Pages/AdminPages/AdminPage'
import EditNurse from '../Components/AdminComponents/EditNurse'
import AddMobilityAids from '../Components/AdminComponents/AddMobilityAids'
import ShowNurse from '../Components/AdminComponents/ShowNurse'
import ShowMobilityAids from '../Components/AdminComponents/ShowMobilityAids'
import EditMobility from '../Components/AdminComponents/EditMobility'
import ShowVolunteer from '../Components/AdminComponents/ShowVolunteer'


function AdminPages() {
  return (
    <Routes>
        <Route path='/adminhome/*' element={<AdminPage/>} ></Route>
        <Route path='/adminnurse/*' element={<NursePage/>} ></Route>
        <Route path='/editnurse/:nurseId' element={<EditNurse/>}></Route>
        <Route path='/showNurse/*' element={<ShowNurse/>}></Route>
        <Route path='/mobilityAids/*' element={<AddMobilityAids/>}></Route>
        <Route path='/showMobilityAids/*' element={<ShowMobilityAids/>}></Route>
        <Route path='/editMobilityAids/:toolsId/*' element={<EditMobility/>}></Route>
        <Route path='/showVolunteer/*' element={<ShowVolunteer/>}></Route>
    </Routes>
  )
}

export default AdminPages