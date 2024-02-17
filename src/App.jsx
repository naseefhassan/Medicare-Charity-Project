import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonRouter from "./Routes/CommonPage";
import UserPage from "./Routes/UserPage";
import AdminPage from "./Routes/AdminPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<CommonRouter />}></Route>
          <Route path="/user/*" element={<UserPage />}></Route>
          <Route path="/admin/*" element={<AdminPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
