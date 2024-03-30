import Footer from "../../Components/Footer/Footer";
import Renting from "../../Components/HomePage/Renting";
import WhatWeDo from "../../Components/HomePage/WhatWeDo";
import Volunteer from "../../Components/HomePage/Volunteer";
import Gallary from "../../Components/HomePage/Gallary";
import Blog from "../../Components/HomePage/Blog";
import Donate from "../../Components/HomePage/Donate";

function HomePage() {
  return (
    <>
      <div>
        <Donate />
        <Renting />
        <WhatWeDo />
        <Volunteer />
        <Gallary />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
