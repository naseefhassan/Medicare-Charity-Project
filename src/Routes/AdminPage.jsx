import { Route, Routes } from 'react-router-dom'
import NursePage from '../Pages/AdminPages/NursePage'
import AdminPage from '../Pages/AdminPages/AdminPage'

function AdminPages() {
  return (
    <Routes>
        <Route path='/adminhome/*' element={<AdminPage/>} ></Route>
        <Route path='/adminnurse/*' element={<NursePage/>} ></Route>

    </Routes>
  )
}

export default AdminPages