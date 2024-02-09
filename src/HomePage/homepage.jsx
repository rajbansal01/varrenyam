import Banner from "./Banner/banner";
import { useEffect } from "react";
import AboutUs from "./aboutUs"
import Expertise from "./expertise"
import Strengths from "./strengths"
import OurRecords from "./ourRecords"
import Clients from "./clientsServed"

function Homepage(){
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])
    return(
        <>
            <Banner />
            <AboutUs/>
            <Expertise/>
            <Strengths/>
            <OurRecords/>
            <Clients/>
        </>
    )
}

export default Homepage