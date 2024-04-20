import { Link } from "react-router-dom";

function About() {

    return (
        <div className="container my-5" id="about">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                    <h5 className="text-danger">ABOUT US</h5>
                    <h1>WHY REDLINE</h1>
                    <h5> REDLINE CONSTRUCTION Is A Leading Company In
                        Engineering , Constructions And Finishing Works .
                        It Has Many Works That Has Been Implemented In
                        Several Places In Egypt .
                    </h5>
                <Link to="/aboutus">
                <button type="button" className="bg-black text-white w-25 py-2 my-3 rounded-3 button-red">LEARN MORE</button>
                </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/aboutus.jpg" className="imghome rounded" alt="discribsion" />
                </div>
            </div>
            <div className="row">
            </div>
        </div>
    )

}
export default About;