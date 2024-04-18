function About() {

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                    <h5 className="text-danger">ABOUT US</h5>
                    <h1>WHY REDLINE</h1>
                    <p> REDLINE CONSTRUCTION Is A Leading Company In
                        Engineering , Constructions And Finishing Works .
                        It Has Many Works That Has Been Implemented In
                        Several Places In Egypt .
                    </p>
                    <br /><button type="button" className="bg-black text-white w-25 py-2">LEARN MORE</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="/aboutus.jpg" className="card-img-top" alt="discribsion" />
                </div>
            </div>
        </div>
    )

}
export default About;