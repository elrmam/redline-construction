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
            <Goals />
            <Projects />
            <License />
        </>
    )
}

export default Homepage;