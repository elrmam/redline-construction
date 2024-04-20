import React, { useEffect } from 'react';

function Gallery() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container-fluid bg-dark">
            <div className="row mb-5">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                    <img src="/gallery/21.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                    <img src="/gallery/20.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                    <img src="/gallery/19.jpg" className="gallery" alt="gallery" />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/18.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/17.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/16.jpg" className="gallery" alt="gallery" />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/1.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/15.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/14.jpg" className="gallery" alt="gallery" />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/13.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/12.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/11.jpg" className="gallery" alt="gallery" />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/10.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/9.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/8.jpg" className="gallery" alt="gallery" />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/7.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/6.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src="/gallery/5.jpg" className="gallery" alt="gallery" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <img src="/gallery/4.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <img src="/gallery/3.jpg" className="gallery" alt="gallery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <img src="/gallery/2.jpg" className="gallery" alt="gallery" />
                </div>
            </div>
        </div>

    )
}

export default Gallery;