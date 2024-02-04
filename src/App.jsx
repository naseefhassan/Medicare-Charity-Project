import Footer from "./Components/Footer/Footer";
import Blog from "./Pages/UserPage/Blog";
import Gallery from "./Pages/UserPage/Gallery";
import HomePage from "./Pages/UserPage/HomePage";
import RentNurse from "./Pages/UserPage/RentNurse";
import Volunteer from "./Pages/UserPage/Volunteer";
import WhatWeDo from "./Pages/UserPage/WhatWeDo";

function App() {
  return (
    <>
      <HomePage />
      <RentNurse/>
      <WhatWeDo/>
      <Volunteer/>
      <Gallery/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
