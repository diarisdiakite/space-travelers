import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveAction } from '../../redux/rockets/rocketsSlice';
import '../../assets/css/rockets.css';

const Rockets = ({
  id, rocketName, description, flickrImages, reserved = false,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <div className="rocket-card">
        <div className="rocket-image-container">
          <img src={flickrImages} alt="rocket" />
        </div>
        <div className="rocket-content-container">
          <h2 key={id}>{rocketName}</h2>
          <p>
            <span className={reserved ? 'reserved-badge' : ''}>{reserved ? 'Reserved' : ''}</span>
            {description}
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
