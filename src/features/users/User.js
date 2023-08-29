import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectUserById } from './usersSlice';
import { selectMissionsByUser } from '../missions/missionsSlice';

function User() {
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, Number(userId)));
  const userMissions = useSelector((state) => selectMissionsByUser(state, Number(userId)));

  const content = (
    <div>
      <h2 key={userId}>
        {user?.name}
      </h2>
      <h3>
        Missions
        (
        {userMissions.length}
        )
      </h3>
      {userMissions.map((mission) => (
        <li key={mission.id}>
          <Link to={`/missions/${mission.id}`}>{mission.title}</Link>
          {/* {' by '}
          {mission.author} */}
        </li>
      ))}
    </div>
  );

  return (
    <div className="main-container" key={`user-${userId}`}>
      {content}
    </div>
  );
}

export default User;
