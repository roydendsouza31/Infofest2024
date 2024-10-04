import React, { useState } from 'react';
import events from '../assets/json/coreteam.json';
import bestoimage from '../assets/images/core-team/user.png';
import { getImageURL } from '../utils/image-util';

const Teams = () => {
  const [teams] = useState(events);
  
  return (
    <div className="mt-32 grid gap-10 mx-auto p-10 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
      {teams.length > 0 ? (
        teams.map((member, teamIndex) => (
            <div key={`${member}-${teamIndex}`} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                className="object-cover w-24 h-24 rounded-full shadow mx-auto"
                src={member.image ?getImageURL(`core-member${member.image}`) : bestoimage}
                alt={member.name}
              />
              <div className="flex flex-col justify-center mt-4 text-center">
                <p className="text-lg font-bold text-gray-100">{member.name}</p>
                <p className="text-sm text-gray-400">{member.position}</p>
                <p className="text-sm text-gray-300">{member.phoneNumber}</p>
              </div>
            </div>
          )
        )
      ) : (
        <div className="text-center text-gray-100">Loading...</div>
      )}
    </div>
  );
};

export default Teams;
