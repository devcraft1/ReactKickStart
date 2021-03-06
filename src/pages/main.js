import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Slide from '../component/Page1'
// import { useRouter } from "../util/router.js";

function MainPage(props) {
  // const router = useRouter();

  return (
    <>
      <Navbar color="info" spaced={true} logo="/image/logos/logo512.png"/>

      <Slide/>
      
      <Footer
        color="info"
        size="medium"
        logo="/image/logos/logo512.png"
        description="GACS programming team react project"
      />

     
    </>
  );
}

export default MainPage;
