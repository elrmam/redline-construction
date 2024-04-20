import { Link } from 'react-router-dom';

function Projects() {

    return (
        <div className="container my-5" id="projects">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                    <h5 className="text-danger">Our Projects</h5>
                    <h1>We Constructed</h1>
                    <h5><span className="text-danger">&gt;&nbsp;</span>Commercial Projects In Fifth Settlement</h5>
                    <h5><span className="text-danger">&gt;&nbsp;</span>More Than 7 Residential Buildings In Fifth Settlement</h5>
                    <h5><span className="text-danger">&gt;&nbsp;</span>More Than 3 Residential Buildings In New Capital</h5>
                    <h5><span className="text-danger">&gt;&nbsp;</span>Several Buildings Under Construction In Suez</h5>
                    <h5><span className="text-danger">&gt;&nbsp;</span>Educational Buildings In Maadi</h5>
                    <h5><span className="text-danger">&gt;&nbsp;</span>Finishing Works In Several Different Areas</h5>
                    <Link to="/gallery">
                        <button type="button" className="bg-black text-white py-2 my-3 rounded-3 button-red">LEARN MORE</button>
                    </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/projects.jpg" className="imghome card-img-top" alt="discribsion" />
                </div>
            </div>
        </div>
    )

}
export default Projects;