import React from 'react';
import bodyPartIcon from '../assets/assets/icons/body-part.png';
import targetIcon from '../assets/assets/icons/target.png';
import equipmentIcon from '../assets/assets/icons/equipment.png';

const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  return (
    <div className="container mt-4 py-4">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <img src={gifUrl} alt={`Exercise: ${name}`} className="img-fluid rounded mb-4" loading="lazy" style={{ maxHeight: '400px', width: '100%' }} />
        </div>
        <div className="col-lg-6">
          <h2 className='text-capitalize mb-4'>{name}</h2>
          <div className="mb-3">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <img src={bodyPartIcon} alt="Body Part Icon" className="me-2" style={{ width: '48px', height: '48px' }} />
              <span className="me-3 fw-bold text-primary fs-3">Body Part:</span>
              <span className='fs-5 text-capitalize'>{bodyPart}</span>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <img src={targetIcon} alt="Target Icon" className="me-2" style={{ width: '48px', height: '48px' }} />
              <span className="me-3 fw-bold text-primary fs-3">Target:</span>
              <span className='fs-5 text-capitalize'>{target}</span>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <img src={equipmentIcon} alt="Equipment Icon" className="me-2" style={{ width: '48px', height: '48px' }} />
              <span className="me-3 fw-bold text-primary fs-3">Equipment:</span>
              <span className='fs-5 text-capitalize'>{equipment}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
