import { React } from 'react';
import { useSelector } from 'react-redux';
import Rockets from './Rockets';
import { getAllRockets } from './rocketsSlice';

const RocketsList = () => {
  const { rockets } = useSelector(getAllRockets);
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
