import React from 'react'

const Rules = () => {
  return (
    <>
    <h1 className='text-white font-audiowide text-center text-3xl mt-24'>General Rules</h1>
    <div className='text-white font-chakra p-5 px-10 border-2 border-orange-400 my-5 mx-2 md:mx-4 rounded-md bg-[#000000ab]'>
    <ul className='text-justify space-y-2 list-disc '>
            <li>Registration link for the events will be available on the website.</li>
            <li>Participants must adhere to the event's code of conduct, which outlines the expected behavior and ethical standards that all attendees must follow.</li>
            <li>Each participant is requested to carry their college ID card, failure of which shall restrict their participation in any event.</li>
            <li>Participants that want to avail accommodation should inform the organizers about the same on or before 5th August 2023.</li>
            <li>All participants are expected to attend the sessions on time and adhere to the schedule. Latecomers may not be allowed to enter once a session has started.</li>
            <li>Participants must not engage in plagiarism or any other form of academic dishonesty during the event.</li>

            <li>
              <h4 style={{ marginBottom: '4px' }}>Rules for registration of teams:</h4>
              <ul>
                <li>Participating teams must produce a letter from their department/college stating the names of all the participants in the team.</li>
                <li>Each team can register up to 25 participants (excluding hackathon and gaming).</li>
                <li>Each team can register a maximum of 2 entries per competition.</li>
                <li>Each participant from a team can participate in a maximum of 2 competitions (excluding hackathon and gaming).</li>
              </ul>
            </li>

            <li>
              <h4 style={{ marginBottom: '4px' }}>Winning a competition will earn the team a predefined number of points which will contribute to the final tally (apart from gaming events and hackathon)</h4>
              <ul>
                <li>1st place : 1000 points</li>
                <li>2nd place : 500 points</li>
                <li>Participation : 100 points per entry</li>
              </ul>
            </li>

            <li>Participants must not tamper with or disrupt any equipment provided by the event organizers or at the event venue.</li>
            <li>Participants forming a team should be from the same Educational Institute (excluding hackathon and gaming events).</li>
            <li>The decision of the judges and organizing committee will be final and binding.</li>
            <li>The organizing committee reserves every right to make necessary changes in the rules and schedule without any prior notice. The changes will be updated on the website and will be conveyed to the participants through appropriate channels.</li>
          </ul>
    </div>
    </>
  )
}

export default Rules