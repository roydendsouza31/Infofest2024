import React, { useEffect, useState } from 'react';
import teamData from '../assets/json/coreteam.json';
import bestoimage from '../assets/images/core-team/user.png'
const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTeams(teamData);
    }, 1000); 
  }, []);

  return (
      <div className="mt-32 grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        {teams.length > 0 ? (
          teams.map((team, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                className="object-cover w-24 h-24 rounded-full shadow mx-auto"
                src={team.image ? team.image : bestoimage}
                alt={team.name}
              />
              <div className="flex flex-col justify-center mt-4 text-center">
                <p className="text-lg font-bold text-gray-100">{team.name}</p>
                <div className="mb-4 text-xs text-gray-400">
                  {Array.isArray(team.position) ? (
                    team.position.map((pos, idx) => (
                      <p key={idx}>{pos}</p>
                    ))
                  ) : (
                    <p>{team.position}</p>
                  )}
                </div>
                <p className="text-sm tracking-wide text-gray-300">
                  {team.contact}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-100">Loading...</div>
        )}
      </div>
  );
};

export default Teams;
