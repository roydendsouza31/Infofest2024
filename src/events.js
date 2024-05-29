const events = [
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
  },
  {
    slug: "bgmi",
    title: "BGMI",
    codeName: "Cyber Strike",
    description: "Assemble your team and show your skills, teamwork, and strategies to beat the opponents.",
    image: "/BGMI.webp",
    rules: 'Members per Team : 4 \nCross college teams are allowed \nEach participant must have a valid BGMI account \nMaps : Erangel, Miramar, Sanhok, Livik \nAll participant are strictly required to be present at the venue',
    date: "2023-08-11",
    time: {
      from: "10:00 AM",
      to: "03:00 PM"
    },
    coordinators: [
      {
        name: "Suyog Chari",
        phone: "+91 7768984419",
        role: "Co-ordinator",
        image: "/images/coordinators/suyog.jpg"
      },
      {
        name: 'Aryan Kushwaha',
        phone: '+91 84119 32637',
        role: 'Co-ordinator',
        image: '/images/coordinators/aryan.jpg'
      }
    ],
    judgingCriteria: '',
    prize: "Rs 6000/-",
    entryFee: 'FREE',
    category: "Offline",
    venue: "Goa Business School (Annexure)",
    lat: 15.459461438680943,
    lng: 73.82432171434024,
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSeJs7ppSHcjucF0wtbUfyyCKPfSakmnfrdd_rtQVarQCjyYdg/viewform?usp=sf_link'
  },
  {
    slug: "missingPeripherals",
    title: "Missing Peripherals",
    codeName: "Astral coder",
    description: "Missing Peripherals is a technical competition designed to test participants' skills in working with computers and technology under challenging conditions. Participants must complete technical tasks within a set time limit using only the available peripherals and showcase technical proficiency under pressure.",
    image: "/missing peripherals.webp",
    rules: 'Members per team: 1-2 \nRounds: The contest will be divided into Three rounds and in each round one of the peripheral (Monitor/ ?/ ?) will be missing and participants will have to perform the given task. \nRound 1: Mind sight \nIn this round, The participant will have to code a problem with their monitor turned off. Points will be awarded based on the amount of completion of code within the time limit and the least number of errors. \nRound 2: Surprise \nRound 3: Surprise',
    date: "2023-08-10",
    time: {
      from: "10:00 AM",
      to: "01:00 PM"
    },
    coordinators: [
      {
        name: "Sandhya Chari",
        phone: "+91 8830736146",
        role: "Co-ordinator",
        image: "/images/coordinators/sandhya.jpg"
      },
      {
        name: "Shaun Barreto",
        phone: "+91 7720958269",
        role: "Co-ordinator",
        image: "/images/coordinators/shaun.jpg"
      }
    ],
    judgingCriteria: 'The submission will be evaluated based on the accuracy and completion time. The judges will also consider the overall performance. Participant with the highest points will be the winner.',
    prize: "Rs 3500/-",
    entryFee: 'FREE',
    category: "Offline",
    venue: "MCA Lab 2 (Block C, SEOAS)",
    lat: 15.46123667146104,
    lng: 73.83270525019185,
  },
  {
    slug: "UIUX",
    title: "UI / UX",
    codeName: "Interface Rumble",
    description: " It is an opportunity for designers to demonstrate their ability to create functional, visually appealing, and user-friendly designs that meet the specific requirements of the competition.",
    image: "/UI UX.webp",
    rules: 'Members per team: 1 \nParticipants are expected to bring their own devices but for some exceptions devices will be provided. \nFigma must be installed. \nParticipants should only use figma to design, No other platform will be allowed. \nNo copying of design or related stuff from the internet. Any malpractice detected will result in direct disqualification.',
    date: "2023-08-11",
    time: {
      from: "10:00 AM",
      to: "03:00 PM"
    },
    coordinators: [
      {
        name: "Udesh Arlekar",
        phone: "+91 9158807160",
        role: "Co-ordinator",
        image: "/images/coordinators/udesh.jpg"
      },
      {
        name: "Amay Gawas",
        phone: "+91 9168915331",
        role: "Co-ordinator",
        image: "/images/coordinators/amay.jpg"
      }
    ],
    judgingCriteria: "How creative and innovative the design is in solving the problem and meeting user needs. \nUser experience, including ease of usage, intuitive, and interactive. \nVisual appeal, aesthetics, and use of color, typography, imagery, and other graphic design elements. \nAdherence to the problem statement.",
    prize: "Rs 4000/-",
    entryFee: 'FREE',
    category: "Offline",
    venue: "Goa Buisness School (Lab 3)",
    lat: 15.459461438680943,
    lng: 73.82432171434024,
  },
  {
    slug: "reel-it",
    title: "Reel It",
    codeName: "Vid cred",
    description: "We are calling all aspiring content creators to showcase their creativity through reels.",
    image: "/vlogging.webp",
    rules: `Members per team: 1-3
    Reel should be of min 30sec to max 90sec
    Reel should cover glimpses of every event
    Team should shoot the events on the day 1 and submit it on the next day before 12pm
    Reel should contain 10-20sec of sponsor advertisement`,
    date: "2023-08-10",
    time: {
      from: "09:30 AM",
      to: "05:30 PM"
    },
    coordinators: [
      {
        name: "Nagesh Chari",
        phone: "+91 9067152654",
        role: "Co-ordinator",
        image: "/images/coordinators/nagesh.jpg"
      },
      {
        name: "Rutvik Sawant",
        phone: "+91 9518765805",
        role: "Co-ordinator",
        image: "/images/coordinators/rutvik.jpg"
      }
    ],
    judgingCriteria: 'Uniqueness, creativity and informative',
    prize: "Rs 4500/-",
    entryFee: 'FREE',
    category: "Offline",
    venue: "Outside Goa Business School Auditorium",
    lat: 15.459461438680943,
    lng: 73.82432171434024,
  },
  {
    slug: "FIFA23",
    title: "FIFA 23",
    codeName: "VirTUA-Ball",
    description: "FIFA is an Esports game simulating football at the highest level. Players will be competing with each other in FIFA 23.",
    image: "/fifa22.webp",
    rules: `Members per team: 1
    PS4
    Knockout rounds
    Standard settings
    5 mins half
    Game speed will be normal
    Club and Country Teams only`,
    date: "2023-08-10",
    time: {
      from: "10:00 AM",
      to: "04:30 PM"
    },
    coordinators: [
      {
        name: "Suyog Chari",
        phone: "+91 7768984419",
        role: "Co-ordinator",
        image: "/images/coordinators/suyog.jpg"
      },
      {
        name: "Aiwinraj K. S.",
        phone: "+91 7904895106",
        role: "Co-ordinator",
        image: "/images/coordinators/aiwinraj.jpg"
      }
    ],
    judgingCriteria: '',
    prize: "Rs 3000/-",
    entryFee: 'FREE',
    category: "Offline",
    venue: "Goa Buisness School (Lab 3)",
    lat: 15.459461438680943,
    lng: 73.82432171434024,
    form: "https://docs.google.com/forms/d/e/1FAIpQLSdQbRSFz9NSJuZ5m1obLcDvw6zkM05_kVwJ_1hE6D7CQ0UIqA/viewform?usp=sf_link",
    sponsorer: 'Goan Gamer',
    sponsorerLogo: '/goanGamer.png'
  },
  {
    slug: "quiz",
    title: "Quiz",
    codeName: "neuro query",
    description: "Do you think you are the smartest one in the room? test your knowledge in field of general knowledge.",
    image: "/quiz.webp",
    rules: 'Rounds : Qualifier, Elimination, FINAL \nMembers per team: 2 \nUse of mobile phones or any electronic device is prohibited. \nEach round would be explained during the quiz. \nThe quiz masters decision would be final and binding. \nTHEME : GENERAL KNOWLEDGE',
    date: "2023-08-11",
    time: {
      from: "10:00 AM",
      to: "03:00 PM"
    },
    coordinators: [
      {
        name: "Shaunak Perni",
        phone: "+91 8625946258",
        role: "Co-ordinator",
        image: "/images/coordinators/shaunak.png"
      },
      {
        name: "Minal Shirodkar",
        phone: "+91 7391944024",
        role: "Co-ordinator",
        image: "/images/coordinators/minal.jpeg"
      }
    ],
    judgingCriteria: '',
    prize: "Rs 3500/-",
    entryFee: 'FREE',
    category: "Offline",
    venue: "Goa Business School (Auditorium)",
    lat: 15.459461438680943,
    lng: 73.82432171434024,
  },
  {
    slug: "debate",
    title: "Debate",
    codeName: "Crossfire",
    description: "Get ready for an intense clash of ideas centred around the raging topics in the tech world. With strict time limits and rules in place, each team will present their arguments and counterarguments in a thought-provoking and engaging format.",
    image: "/tech debate.webp",
    rules: 'Members per team: 2 \nAll participants must engage in the debate with respect and professionalism towards their opponent. \nParticipants must strictly adhere to the time limits for each round. \nInterruptions or speaking out of turn are strictly prohibited during the debate.',
    date: "2023-08-10",
    time: {
      from: "10:00 AM",
      to: "03:00 PM"
    },
    coordinators: [
      {
        name: "Sneharsh",
        phone: "+91 9168581991",
        role: "Co-ordinator",
        image: "/images/coordinators/sneharsh.jpeg"
      },
      {
        name: "Om Prabhu",
        phone: "+91 8805564919",
        role: "Co-ordinator",
        image: "/images/coordinators/om.jpg"
      }
    ],
    judgingCriteria: 'Judging will be based on the strength of arguments, evidence presented, and effectiveness of rebuttals.',
    prize: "Rs 2000/-",
    entryFee: 'FREE',
    category: "Offline",
    venue: "Goa Business School (Auditorium)",
    lat: 15.459461438680943,
    lng: 73.82432171434024
  },
  {
    slug: "businessPitch",
    title: "Business Pitch",
    codeName: "biz-wiz",
    description: "Participants should present their business ideas or startups to a panel of judges, the presentation should  consist of several slides that provide an overview of the business, its market opportunity, revenue model, and any other relevant information.",
    image: "/businessPitch.webp",
    rules: `Members per team: 2
    The pitch must be original.
    Participants can submit a ppt/pdf and/or video file of their pitch presentation.
    The participants should adhere to a time limit of 10mins(8 mins presentation + 2 mins questions) and should not exceed the time limit.`,
    date: "2023-08-10",
    time: {
      from: "10:00 AM",
      to: "03:00 PM"
    },
    coordinators: [
      {
        name: "Ved Redkar",
        phone: "+91 9130614140",
        role: "Co-ordinator",
        image: "/images/coordinators/ved.jpg"
      },
      {
        name: "Dhruv Patil",
        phone: "+91 9011427354",
        role: "Co-ordinator",
        image: "/images/coordinators/dhruv.jpg"
      }
    ],
    judgingCriteria: 'Market opportunity. \nProblem statement and solution. \nBusiness model, strategy, and revenue. \nCompetitive advantage and differentiation. \nPitch delivery and effective use of visual aids.',
    prize: "Rs 4500/-",
    entryFee: 'FREE',
    category: "Offline",
    venue: "Goa Business School Lecture Hall 1 (old)",
    lat: 15.459461438680943,
    lng: 73.82432171434024,
  },
  {
    slug: "infotalks-1",
    title: "Pradhan Mantri TB Mukth Bharat Abhiyan | Ayushman Bharat Digital Mission | PCPNDT Act - Beti Bachao Beti Padao an Attempt to Gender Equality",
    codeName: "Infotalks 1",
    description: "Come and hear what's brewing in the world of tech from the people at the forefront of the storm.",
    image: "/ift1.jpeg",
    resourcePerson: "Dr. Manish Gaunekar, Dr. Shweta Kanekar, Dr. Uma Sadekar",
    date: "2023-08-10",
    time: {
      from: "10:00 AM",
      to: "11:00 AM"
    },
    category: "Offline",
    venue: "E Block Auditorium, Goa University, Taleigao Goa",
    lat: 15.458761291922496,
    lng: 73.82722857240648,
    coordinators: [
      {
        name: "Sandhya Chari",
        phone: "+91 8830736146",
        role: "Co-ordinator",
        image: "/images/coordinators/sandhya.jpg"
      },
      {
        name: "Mayuresh chodankar",
        phone: "+91 9167403608",
        role: "Co-ordinator",
        image: "/images/coordinators/mayuresh.jpg"
      },
      {
        name: "Ranjana Rajeev",
        phone: "+91 7887329445",
        role: "Co-ordinator",
        image: "/images/coordinators/ranjana.jpeg"
      },
    ],
  },
  {
    slug: "infotalks-2",
    title: "Nature Inspired Optimisation in Machine Learning",
    codeName: "Infotalks 2",
    description: "Come and hear what's brewing in the world of tech from the people at the forefront of the storm.",
    image: "/ift2.jpeg",
    resourcePerson: "Dr. Damodar Reddy",
    date: "2023-08-11",
    time: {
      from: "10:00 AM",
      to: "11:00 AM"
    },
    category: "Offline",
    venue: "Block F, GBS Auditorium, Goa University Taleigao, Goa",
    lat: 15.458761291922496,
    lng: 73.82722857240648,
    coordinators: [
      {
        name: "Sandhya Chari",
        phone: "+91 8830736146",
        role: "Co-ordinator",
        image: "/images/coordinators/sandhya.jpg"
      },
      {
        name: "Mayuresh chodankar",
        phone: "+91 9167403608",
        role: "Co-ordinator",
        image: "/images/coordinators/mayuresh.jpg"
      },
      {
        name: "Ranjana Rajeev",
        phone: "+91 7887329445",
        role: "Co-ordinator",
        image: "/images/coordinators/ranjana.jpeg"
      },
    ],
  },
  {
    slug: "workshop",
    title: "Kojo Workshop for H.S.S students",
    codeName: "workshop",
    description: "Unleash your inner tech guru in our immersive workshop, where innovation meets expertise and cutting-edge technologies pave the way to a limitless future.",
    image: "/workshop.webp",
    date: "2023-08-11",
    resourcePerson: "Anay Kamat (Lead Software Consultant - Equal Experts)",
    time: {
      from: "10:00 AM",
      to: "04:00 PM"
    },
    category: "Offline",
    venue: "Computer Science & Technology (Office Block Lab 1)",
    lat: 15.461918843356294,
    lng: 73.83334799103537,
    coordinators: [
      {
        name: "Vignesh Haldankar",
        phone: "+91 8796924987",
        role: "Co-ordinator",
        image: "/images/coordinators/vignesh.jpg"
      },
      {
        name: "Saish Sawant",
        phone: "+91 7796894249",
        role: "Co-ordinator",
        image: "/images/coordinators/saish.jpg"
      },
      {
        name: "Harshal Gosawi",
        phone: "+91 9359192032",
        role: "Co-ordinator",
        image: "/images/coordinators/harshal.jpg"
      },
    ],
  },
];

const getEvent = (slug) => events.find(event => event.slug === slug)

Object.assign(events, { get: getEvent })

export default events;
