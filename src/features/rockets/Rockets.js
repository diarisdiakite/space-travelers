import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/rockets.css';
import imageError from '../../assets/images/image_not_available.png';

const Rockets = ({
  id, rocketName, description, flickrImages,
}) => (
  <div className="main-container">
    <div className="rocket-card">
      <div className="rocket-image-container">
        <img onError={(e) => { e.target.src = imageError; }} src={flickrImages} alt="rocket" />
      </div>
      <div className="rocket-content-container">
        <h2 key={id}>{rocketName}</h2>
        <p>{description}</p>
        <button type="button" className="reserve-button">Reserve Rocket</button>
      </div>
    </div>
  </div>
);

Rockets.propTypes = {
  id: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};
export default Rockets;
