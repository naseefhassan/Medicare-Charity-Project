import { Route, Routes } from 'react-router-dom'
import NursePage from '../Pages/AdminPages/NursePage'
import AdminPage from '../Pages/AdminPages/AdminPage'
import EditNurse from '../Components/AdminComponents/EditNurse'
import AddMobilityAids from '../Components/AdminComponents/AddMobilityAids'
import ShowNurse from '../Components/AdminComponents/ShowNurse'
import ShowMobilityAids from '../Components/AdminComponents/ShowMobilityAids'
import EditMobility from '../Components/AdminComponents/EditMobility'
import ShowVolunteer from '../Components/AdminComponents/ShowVolunteer'
import UserProfile from '../Components/AdminComponents/UserProfile'
import ShowVehicle from '../Components/AdminComponents/ShowVehicle'
import AdminChats from '../Components/AdminComponents/AdminChats'
import AuthGraud from '../RouteGurad/AuthGraud'


function AdminPages() {
  return (
    <Routes>
        <Route path="/" element={<AuthGraud/>}>
        <Route path='/adminhome/*' element={<AdminPage/>} ></Route>
        <Route path='/adminnurse/*' element={<NursePage/>} ></Route>
        <Route path='/editnurse/:nurseId' element={<EditNurse/>}></Route>
        <Route path='/showNurse/*' element={<ShowNurse/>}></Route>
        <Route path='/mobilityAids/*' element={<AddMobilityAids/>}></Route>
        <Route path='/showMobilityAids/*' element={<ShowMobilityAids/>}></Route>
        <Route path='/editMobilityAids/:toolsId/*' element={<EditMobility/>}></Route>
        <Route path='/showVolunteer/*' element={<ShowVolunteer/>}></Route>
        <Route path='/userProfile/*' element={<UserProfile/>}></Route>
        <Route path='/showVehicle/*' element={<ShowVehicle/>}></Route>
        <Route path='/chats' element={<AdminChats/>}></Route>
        </Route>


    </Routes>
  )
}

export default AdminPages