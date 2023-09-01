import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import { reserveAction } from './rocketsSlice';
import '../../assets/css/rockets.css';
import imageError from '../../assets/images/image_not_available.png';

const Rockets = ({
  id, rocketName, description, flickrImages, reserved = false,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <div className="rocket-card">
        <div className="rocket-image-container">
          <img onError={(e) => { e.target.src = imageError; }} src={flickrImages} alt="rocket" />
        </div>
        <div className="rocket-content-container">
          <h2 key={id}>{rocketName}</h2>
          <p>
            {reserved && (
              <Badge bg="success">Reserved</Badge>
            )}
            <span>{description}</span>
          </p>
          {reserved && (
            <button type="button" className="cancel-button" onClick={() => dispatch(reserveAction(id))}>Cancel Reservation</button>
          )}
          {!reserved && (
            <button type="button" className="reserve-button" onClick={() => dispatch(reserveAction(id))}>Reserve Rocket</button>
          )}
        </div>
      </div>
    </div>
  );
};

Rockets.propTypes = {
  id: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Rockets;
