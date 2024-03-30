import React from 'react';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className='container-fluid bg-black text-start pt-4'>
      <div className='row mx-2'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <img src="/logo.png" alt="location" height={'100rem'} width={'100rem'}/>
          <table className='mt-3'>
            <tr>
              <td>
                <h6 className='text-danger'>Commercial Register Number : </h6>
              </td>
              <td>
                <h6 className='text-white'>18823</h6>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className='text-danger'>Tax Card : </h6>
              </td>
              <td>
                <h6 className='text-white'>648-293-009</h6>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className='text-danger'>Egyptian Federation Membership Number For Construction and Building Contractors : </h6>
              </td>
              <td>
                <h6 className='text-white'>80462</h6>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className='text-danger'>Company Type : </h6>
              </td>
              <td>
                <h6 className='text-white'>Simple Recommendation</h6>
              </td>
            </tr>
          </table>
        </div>
        <div className='col-lg-2 col-md-6 col-sm-12'>
          <h5 className='text-white'>Links</h5>
          <h6><Link className="text-secondary footlink" to="/#services">Services</Link></h6>
          <h6><Link className="text-secondary footlink" to="/#about">About us</Link></h6>
          <h6><Link className="text-secondary footlink" to="/#Goals"> Goals</Link></h6>
          <h6><Link className="text-secondary footlink" to="/#services">Projects</Link></h6>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <h5 className='text-white'>Get in Touch</h5>
          <table className='mb-2'>
            <tr>
              <td>
                <img src="/location.png" alt="location" height={'25rem'} width={'20rem'}/>
              </td>
              <td>
              <h6 className="text-secondary ms-2">6/2 Al Shatr Al Sabaa - Al Orouba Street From Algeria Street - New Maadi</h6>
              </td>
            </tr>
            <br/>
            <tr>
              <td>
                <img src="/email.png" alt="email" height={'25rem'} width={'25rem'}/>
              </td>
              <td>
                <h6 className="text-secondary ms-2">Redlineconst.elhadidy@gmail.com</h6>
              </td>
            </tr>
            <br/>
            <tr>
              <td>
                <img src="/mobile.png" alt="mobile" height={'25rem'} width={'25rem'}/>
              </td>
              <td>
                <h6 className="text-secondary ms-2">01000413605 - 01000432884</h6>
              </td>
            </tr>
            <br/>
            <tr>
              <td>
                <img src="/telephone.png" alt="telephone" height={'25rem'} width={'30rem'}/>
              </td>
              <td>
                <h6 className="text-secondary ms-2">02-27032195</h6>
              </td>
            </tr>
          </table>           
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <h5 className='text-white'>Location</h5>
          <iframe title="Company Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.2242275720527!2d31.274030!3d29.982590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_COMPANY_ADDRESS_HERE!5e0!3m2!1sen!2sus!4v1641534423335!5m2!1sen!2sus" 
              width="200" height="120" style={{ border:'0' }} allowfullscreen loading="lazy"></iframe>
        </div>
      </div>
      <div className='row'>
        <hr/>
      </div>
      <div className='row'>
        <h6 className='text-center text-secondary'>&copy;2024 Redline Construction Company.All rights reserved.</h6>
      </div>
    </div>
  );
}

export default Footer;