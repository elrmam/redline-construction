import About from "../Components/About";
import Goals from "../Components/Goals";
import Herosectin from "../Components/Herosection";
import Projects from "../Components/Projects";
import Services from "../Components/Services";


function Homepage(){

    return(
        <>
            <Herosectin/>
            <Services/>
            <About/>
            <Goals/>
            <Projects/>
        </>
    )
}

export default Homepage;