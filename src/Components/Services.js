function Services() {

    return (
        <div className="container my-5" id='services'>
            <div className="row text-center">
                <div className="col-12">
                    <h5 className="text-danger">OUR SERVICES</h5>
                    <h1>SERVICES WE PROVIDE</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2 col-md-5 col-sm-12 mb-3 card-container">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/plan.jpeg" className="card-img-top" alt="engineering plans" height={'235rem'} />
                        <div >
                            <img
                                src="/logo.jpeg"
                                width="90rem"
                                className="logo border border-black"
                                style={{ maxWidth: '60%', borderRadius: '60%' }}
                                alt="logo"
                            />
                        </div>
                        <div className="card-body" style={{ height: '15rem' }} >
                            <h5 className="card-title text-center"><br /><br />Architrctural And Structural Designs</h5>
                            <p className="card-text">
                                Creative architectural design and integrated executive plans in accordance with engineering regulations and
                                building code.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-lg-2 col-md-5 col-sm-12 mb-3 card-container">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/permit.jpg" className="card-img-top border border-bottom" alt="Building permits" height={'235rem'} />
                        <div>
                            <img
                                src="/logo.jpeg"
                                width="90rem"
                                className="logo border border-black"
                                style={{ maxWidth: '60%', borderRadius: '60%' }}
                                alt="logo"
                            />
                        </div>
                        <div className="card-body" style={{ height: '15rem' }} >
                            <h5 className="card-title text-center"><br /><br />Building permits</h5>
                            <p className="card-text">
                                Issuance of building permit + renovation permit + fencing permit + property transfer + renewal
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-lg-2 col-md-5 col-sm-12 mb-3 card-container">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/supervision.jpg" className="card-img-top" alt="Engineering supervision" height={'235rem'} />
                        <div>
                            <img
                                src="/logo.jpeg"
                                width="90rem"
                                className="logo border border-black"
                                style={{ maxWidth: '60%', borderRadius: '60%' }}
                                alt="logo"
                            />
                        </div>
                        <div className="card-body" style={{ height: '15rem' }} >
                            <h5 className="card-title text-center"><br /><br />Engineering supervision</h5>
                            <p className="card-text">
                                Comprehensive supervision over all stages of construction
                                By an outstanding elite of supervising engineers
                                Structural works + Finishing works
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-lg-2 col-md-5 col-sm-12 mb-3 card-container">
                    <div className="card position-relative" style={{ width: '17rem' }}>
                        <img src="/interior.jpg" className="card-img-top" alt="Interior Design" height={'235rem'} />
                        <div>
                            <img
                                src="/logo.jpeg"
                                width="90rem"
                                className="logo border border-blackS"
                                style={{ maxWidth: '60%', borderRadius: '60%' }}
                                alt="logo"
                            />
                        </div>
                        <div className="card-body" style={{ height: '15rem' }} >
                            <h5 className="card-title text-center"><br /><br />Interior Design</h5>
                            <p className="card-text">
                                Distinctive interior decor design tailored to your requirements to provide complete comfort for your family members.
                                3D designs to illustrate ideas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Services;