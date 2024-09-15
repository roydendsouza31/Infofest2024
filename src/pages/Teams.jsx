import React, { useState } from 'react';
import events from '../events';
import bestoimage from '../assets/images/core-team/user.png';
import { getImageURL } from '../utils/image-util';

const Teams = () => {
  const [teams] = useState(events);

  return (
    <div className="mt-32 grid gap-10 mx-auto p-10 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
      {teams.length > 0 ? (
        teams.map((team, teamIndex) =>
          team.coordinators.map((coordinator, index) => (
            <div key={`${teamIndex}-${index}`} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                className="object-cover w-24 h-24 rounded-full shadow mx-auto"
                src={coordinator.image ?getImageURL(`core-team${coordinator.image}`) : bestoimage}
                alt={coordinator.name}
              />
              <div className="flex flex-col justify-center mt-4 text-center">
                <p className="text-lg font-bold text-gray-100">{coordinator.name}</p>
                <p className="text-sm text-gray-400">{coordinator.role}</p>
                <p className="text-sm text-gray-300">{coordinator.phoneNumber}</p>
              </div>
            </div>
          ))
        )
      ) : (
        <div className="text-center text-gray-100">Loading...</div>
      )}
    </div>
  );
};

export default Teams;
