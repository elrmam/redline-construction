import About from "../Components/About";
import Herosectin from "../Components/Herosection";
import Services from "../Components/sevices";


function Homepage(){

    return(
        <>
            <Herosectin/>
            <Services id='services'/>
            <About/>
        </>
    )
}

export default Homepage;