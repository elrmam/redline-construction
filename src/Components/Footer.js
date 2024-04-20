import React from 'react';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className='container-fluid bg-black text-start pt-5'>
      <div className='row mx-2'>
        <div className='col-lg-4 col-md-5 col-sm-12 ms-3 me-4 mb-4'>
          <img src="/logo.png" alt="location" height={'60rem'} width={'60rem'}/>
          <p className='text-secondary mt-2 footpar'> REDLINE CONSTRUCTION Is A Leading Company In
            Engineering , Constructions And Finishing Works .
            It Has Many Works That Has Been Implemented In
            Several Places In Egypt .
          </p>
          <a href="https://www.facebook.com/redlineconstruction.elhadidy?mibextid=ZbWKwL" target="_blank" rel="noreferrer noopener">
            <img src="/facebook.png" alt="Facebook" height={40} width={40} />
          </a>
        </div>
        <div className='col-lg-1 col-md-6 col-sm-12 me-4 mb-4'>
          <h5 className='text-white mb-5'>Links</h5>
          <h6 className='mb-3'><Link className="text-secondary footlink" to="/#Services">Services</Link></h6>
          <h6 className='mb-3'><Link className="text-secondary footlink" to="/#About">About us</Link></h6>
          <h6 className='mb-3'><Link className="text-secondary footlink" to="/#Goals"> Goals</Link></h6>
          <h6 className='mb-3'><Link className="text-secondary footlink" to="/gallery">Projects</Link></h6>
          <h6 className='mb-3'><Link className="text-secondary footlink" to="/#Licenses">Licenses</Link></h6>
        </div>
        <div className='col-lg-3 col-md-5 col-sm-12 me-4 mb-4'>
          <h5 className='text-white mb-5'>Get in Touch</h5>
          <div className='row'>
            <div className='col-1'>
              <img src="/location.png" alt="location" height={'22rem'} width={'17rem'} />
            </div>
            <div className='col-11'>
              <h6 className="text-secondary footpar ms-2">6/2 Al Shatr Al Sabaa - Al Orouba Street From Algeria Street - New Maadi</h6>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-1'>
              <img src="/email.png" alt="email" height={'22rem'} width={'22rem'} />
            </div>
            <div className='col-11'>
              <h6 className="text-secondary ms-2">Redlineconst.elhadidy@gmail.com</h6>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-1'>
              <img src="/mobile.png" alt="mobile" height={'22rem'} width={'22rem'} />
            </div>
            <div className='col-11'>
              <h6 className="text-secondary ms-2">01000413605 - 01000432884</h6>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-1'>
              <img src="/telephone.png" alt="telephone" height={'22rem'} width={'27rem'} />
            </div>
            <div className='col-11'>
              <h6 className="text-secondary ms-2">02-27032195</h6>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
          <h5 className='text-white mb-5'>Location</h5>
          <iframe title="Company Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.2242275720527!2d31.274030!3d29.982590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_COMPANY_ADDRESS_HERE!5e0!3m2!1sen!2sus!4v1641534423335!5m2!1sen!2sus"
            width="290" height="200" style={{ border: '0' }} allowfullscreen loading="lazy"></iframe>
        </div>
      </div>
      <div className='row'>
        <hr className='text-white' />
      </div>
      <div className='row'>
        <h6 className='text-center text-secondary'>&copy;2024 Redline Construction Company.All rights reserved.</h6>
      </div>
    </div>
  );
}

export default Footer;