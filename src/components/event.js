const event = [
    {
      slug: "Hackathon",
      title: "Hackathon (24-hours)",
      codeName: "Hackathon",
      description: "Unleash your intelligence and make an impact at our hackathon - where innovation meets action!",
      image: "/Hackthon.webp",
      rules: `Members per team: 2-3 (cross college teams are allowed)
      No development may start before the actual date and time of the event. The development must start at the official start time of the event.
      The utilization of non-coding and AI assistive tools such as ChatGPT, Copilot, and Webflow are prohibited.
      To ensure a level field for all contestants, all code must be created only at the hackathon. You are permitted to use publicly developed and openly licensed APIs and SDKs for your project.
      A team can submit only one entry for the hackathon. Participation at the hackathon is subject to a “per-team” basis meaning you are not allowed to be on more than one team at the event.
      All intellectual property conceived and developed during the hackathon must adhere to the principles of open-source and be submitted through the Github platform.
      There may be an optional online screening round depending on the number of entries.
      The problem statements will be released at the venue.
      The problem statements will be centered around the theme of “Sustainable Development Goals”.
      Teams have to carry their own laptops/hardware.
      Wi-Fi access and power points will be available.
      Refreshments will be provided throughout the event.
      The teams are free to take breaks in between.
      Teams are not allowed to leave the venue until the end of the hackathon.`,
      date: "2023-08-10",
      end_date: "2023-08-11",
      time: {
        from: "10:00 AM",
        to: "10:00 AM"
      },
      coordinators: [
        {
          name: "Joseito Fernandes",
          phone: "+91 9637352760",
          role: "Co-ordinator",
          image: "/images/coordinators/joseito.jpg"
        },
        {
          name: "Savio Silvera",
          phone: "+91 9637196041",
          role: "Co-ordinator",
          image: "/images/coordinators/savio.jpg"
        }
      ],
      judgingCriteria: 'The judging process will be conducted in three rounds: \nThe first round will evaluate the ideation. \nThe second round will assess the progress made. \nThe final round will involve the presentation of the solution.',
      prize: "Rs 30000/-",
      entryFee: 'FREE',
      category: "Offline",
      venue: "Computer Science & Technology (Office Block Class)",
      lat: 15.461918843356294,
      lng: 73.83334799103537,
      form: "https://forms.gle/GNjSHw8vxUpeJVkq5",
    },
    {
      slug: "CTF",
      codeName: "CTF",
      title: "Capture The Flag",
      description: "Solve puzzles and find hidden clues to discover the flag. Clues can be hidden anywhere. Each flag will earn you points. So sharpen your minds and get ready to do some digging.",
      image: "/CTF.webp",
      rules: 'PREREQUISITES: Laptop/PC with a good internet connection, Python (may use online python compilers) Linux terminal. \nMembers per team: 1-3. \nCTF will be hosted online making it possible to participate from any location. \nTeam members must give their real names, usernames going to be used for competition, personal email id, and phone numbers in the registration form to verify their identities and to collect prizes. \nParticipants/Teams are not allowed to carry out any attacks on the CTF infrastructure or on other teams/individuals. \nNo DoS/DDoS/BruteForcing/Automated Scans or any other practice generating any large amount of traffic by any other means on any challenges and the contest infrastructure. It is not permitted and is never intended in any challenge. \nAny kind of malpractices against any challenge or against the platform will result in the disqualification of the team. \nSharing the flags/solutions/writeups with anyone outside of your team when the competition is live is strictly prohibited. \nCTF organizers retain the right to amend any existing rules or introduce new rules at any time before/during/after the contest. Any such rules must be followed by all the members of each team. \nIf you find any flaws in the CTF infrastructure, you have to report that to the organizing team immediately instead of exploiting it or sharing/disclosing it with others through any means. \nBy participating in this contest, you agree that you have read the above rules and fully agree to adhere to them. \nWe may add/remove/modify the challenges during the contest. \nAny further updates will also be shared through our official channels. \nThe decision of the organizing team will be final. \nIf anyone is found to break the above mentioned rules, the whole team will be disqualified and removed from the event. We may also disclose your team name, members, and IP if such malpractices happen.',
      date: "2023-08-10",
      time: {
        from: "11:00 AM",
        to: "09:00 PM"
      },
      coordinators: [
        {
          name: "Sanket Narvekar",
          phone: "+91 8975195781",
          role: "Co-ordinator",
          image: "/images/coordinators/sanketN.jpg"
        },
        {
          name: "Adroy Fernandes",
          phone: "+91 9623321113",
          role: "Co-ordinator",
          image: "/images/coordinators/adroy.jpg"
        }
      ],
      judgingCriteria: 'At the end of the CTF, the team with the highest score on the scoreboard will be declared the winner. \nIn case the score is equal, the first team (in a shorter time) to reach the score is considered as first.',
      prize: "Rs 8000/-",
      entryFee: 'FREE',
      category: "Online",
      venue: "Online",
    },
    {
      slug: "levelUpCoding",
      title: "Level Up Coding",
      codeName: "Cyber Trials",
      description: "Dare to crack the levels with increasing difficulty and show off your proficiency in diverse languages in this event. This is a fight against time to reach the top.",
      image: "/Level Up Coding.webp",
      rules: `Members per team: 1-2
      Each level of the competition will require the participant to complete a coding challenge using a different programming language. Offline documentation will be provided for each language.
      Every level will have elimination as well as a higher degree of difficulty.
      Participants are not allowed to communicate with anyone outside the team or use any other resource(internet/phones) during the competition. Any violation of this rule will result in disqualification`,
      date: "2023-08-11",
      time: {
        from: "10:00 AM",
        to: "03:00 PM"
      },
      coordinators: [
        {
          name: "Charlton Dias",
          phone: "+91 9763145456",
          role: "Co-ordinator",
          image: "/images/coordinators/charlton.jpg"
        },
        {
          name: "Baban Gawas",
          phone: "+91 8669054047",
          role: "Co-ordinator",
          image: "/images/coordinators/baban.jpg"
        }
      ],
      judgingCriteria: 'Selection will be based on the completion time and accuracy of the code.',
      prize: "Rs 5500/-",
      entryFee: 'FREE',
      category: "Offline",
      venue: "MCA Lab 2 (Block C, SEOAS)",
      lat: 15.46123667146104,
      lng: 73.83270525019185,
    },
    {
      slug: "LineFollower",
      title: "Line Follower",
      codeName: "Line Bot Strafe",
      description: "Teams must create an autonomous robot that can navigate a maze by following a black line and keeping track of directions. The bot must navigate the maze from the starting point to the ending point in the shortest amount of time while analyzing the path during the run.",
      image: "/LineFollower.webp",
      rules: `Members per team: 1-3 \nRobot must be submitted 1hr prior to the event to the volunteers. \nThe robot finishing the area in the least time will be declared the winner. \nMaximum 3 touches allowed (each touch +10 sec). \nOnly 1 skip from a checkpoint is allowed (+30 sec) in case of any issue. \nAny deviation from the main line will lead to placing the robot back to the previous checkpoint. 
      *ROUNDS: \nParticipants will enter 1 qualification round. \nQualifying teams will be selected for the final. 
      *ARENA: \nThe arena will have black stripes consisting of acute, obtuse, right angle, discontinuities and curves. \nThere will be multiple checkpoints. \nThe width of stripes will be 3cm. 
      *Bot Specifications: \nRobot must not exceed following specifications: Length:25cm, Width:25cm, Height:20cm, Weight:5kg, Max voltage: 12v, Microcontroller : Arduino or RaspberryPi.
      * ‎
      * ‎
      Readymade robots are not allowed. \nBots must be fully autonomous and must be started once with only 1 onboard switch. \nParticipants are expected to carry spare batteries, spare parts, repair kits etc. \nIncase of any issues with the robot during the race participants will be disqualified, however before the race they may fix any issues. \nInterfering with other participant's robots on and off the track, Damaging/Modifying the Arena as a participant or by a participant's robot or any action done towards harming the competition or other participants will be met with disqualification`,
      date: "2023-08-10",
      time: {
        from: "10:00 AM",
        to: "03:00 PM"
      },
      coordinators: [
        {
          name: "Shreevesh Naik",
          phone: "+91 9623215078",
          role: "Co-ordinator",
          image: "/images/coordinators/shreevesh.jpg"
        },
        {
          name: "Baban Gawas",
          phone: "+91 8669054047",
          role: "Co-ordinator",
          image: "/images/coordinators/baban.jpg"
        }
      ],
      judgingCriteria: '',
      prize: "Rs 4500/-",
      entryFee: 'FREE',
      category: "Offline",
      venue: "Goa Business School (Ground Floor)",
      lat: 15.459461438680943,
      lng: 73.82432171434024,
    }]

export default event