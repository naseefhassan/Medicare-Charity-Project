import { BrowserRouter } from "react-router-dom";
import CommonRouter from "./Routes/CommonPage";
import UserPage from "./Routes/UserPage";
import OTP from "./Components/OTP/OTP";

function App() {
  return (
    <>
      <BrowserRouter>
        <CommonRouter />
        <UserPage/>
        {/* <OTP/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
