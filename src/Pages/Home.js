import About from "../Components/About";
import Goals from "../Components/Goals";
import Herosectin from "../Components/Herosection";
import License from "../Components/License";
import Projects from "../Components/Projects";
import Services from "../Components/Services";


function Homepage() {

    return (
        <>
            <Herosectin />
            <Services />
            <About />
            <hr className="border border-danger border-1 opacity-25"/>
            <Goals />
            <hr className="border border-danger border-1 opacity-25"/>
            <Projects />
            <hr className="border border-danger border-1 opacity-25"/>
            <License />
        </>
    )
}

export default Homepage;