import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer py-4 bg-primary text-white ">
      <div className="container-fluid ">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <p className="mb-2 fs-5">Contact Us </p>
            <div>
              <a href="mailto:shadyjosephabadeer2003@gmail.com" className="text-white me-3">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                shadyjosephabadeer2003@gmail.com
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              Egypt, Cairo
            </div>
          </div>
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <p className="mb-0">GET IN TOUCH</p>
            <p className="mb-0">About us</p>
            <p className="mb-0">Privacy Policy</p>
            <p className="mb-0">Terms and Conditions</p>
          </div>
          <div className="col-md-4 text-center">
            <p className='fs-5'>Social Media </p>
            <div>
              <a href="https://www.instagram.com/" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="me-2" />
                Instagram
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="me-2" />
                YouTube
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="me-2" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
