import { Route, Routes } from 'react-router-dom'
import NursePage from '../Pages/AdminPages/NursePage'
import AdminPage from '../Pages/AdminPages/AdminPage'
import EditNurse from '../Components/AdminComponents/EditNurse'
import AddMobilityAids from '../Components/AdminComponents/AddMobilityAids'
import ShowNurse from '../Components/AdminComponents/ShowNurse'

function AdminPages() {
  return (
    <Routes>
        <Route path='/adminhome/*' element={<AdminPage/>} ></Route>
        <Route path='/adminnurse/*' element={<NursePage/>} ></Route>
        <Route path='/editnurse/*' element={<EditNurse/>}></Route>
        <Route path='/showNurse/*' element={<ShowNurse/>}></Route>
        <Route path='/mobilityAids/*' element={<AddMobilityAids/>}></Route>

    </Routes>
  )
}

export default AdminPages