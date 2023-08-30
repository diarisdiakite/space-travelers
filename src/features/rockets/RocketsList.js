import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';
import Rockets from './Rockets';

const RocketsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  },
  [dispatch]);
  const { rockets } = useSelector((store) => store.rockets);
  return (
    <div>
      <ul>
        {rockets.map((rocket) => (
          <Rockets
            key={rocket.id}
            id={rocket.id}
            rocketName={rocket.name}
            description={rocket.description}
            flickrImages={rocket.flickr_images}
            reserved={rocket.reserved}
          />
        ))}
      </ul>
    </div>
  );
};

export default RocketsList;
