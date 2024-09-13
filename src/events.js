// NOTE : THE PHONE NUMBERS , DATES, VENUES , TIME  , PRICES NEEDS TO BE CHANGED
const events = [
  {
    slug: "hackathon",
    title: "Hackathon - Hacking for a Resilient Future",
    codeName: "Hackathon",
    description: "This hackathon aims to foster innovative solutions for a resilient future. Participants will work in teams to develop open-source projects that address sustainability challenges.",
    image: "/Hackthon.webp",
    rules: `Teams of 2-3 members (cross-college teams allowed).
\n Only one entry per team is allowed.
\n Participants must bring their own laptops/hardware.
\n Participants cannot be on more than one team.
\n No development can start before the event's official start time.
\n All intellectual property developed during the hackathon must be open-source and submitted via GitHub.
\n All code must be created at the hackathon, with the exception of publicly developed and openly  licensed APIs and SDKs.
\n An online screening round may be conducted depending on the number of entries.
\n Problem statements will be released at the venue.
\n Teams cannot leave the venue until the end of the hackathon.
\n Wi-Fi access and power points will be available.
\n The concerned authority is not responsible for any belongings lost or stolen.
`,
    date: "2024-12-10",
    end_date: "2024-12-11",
    time: {
      from: "10:00 AM",
      to: "10:00 AM"
    },
    coordinators: [
      {
        name: "Divij Pirankar",
        phoneNumber: "1234567890",
        role: "Lead Coordinator",
        image: "/divij_pirankar.webp"
      },
      {
        name: "Samson Surin",
        phoneNumber: "1234567891",
        role: "Co-Coordinator",
        image: "/samson_surin.webp"
      },
      {
        name: "Prajwath Gowda",
        phoneNumber: "1234567892",
        role: "Co-Coordinator",
        image: "/prajwath_gowda.webp"
      }
    ],
    judgingCriteria: 'The judging process will be conducted in three rounds: \nThe first round will evaluate the ideation. \nThe second round will assess the progress made. \nThe final round will involve the presentation of the solution.',
    prize: "Rs 30000/-",
    entryFee: 'FREE',
    category: "Offline",
    venue: "GBS",
    form: "Provided soon",
  },
  {
    slug: "CTF",
    codeName: "CyberQuest",
    title: "Capture The Flag",
    description: "An engaging online Capture The Flag (CTF) competition designed to test participants' cybersecurity skills. Participants will solve challenges across various categories, aiming to unmask the elusive ShadowNet.",
    image: "/CTF.webp",
    rules: `Participants must have a basic understanding of programming and cybersecurity
concepts. Open to first time CTF players as well.
\nPoints are awarded based on the difficulty of the challenges solved and the
number of flags captured. The team with the most solves and highest points
wins. Decision of coordinators will be considered final.
\n Teams must submit their solutions within the given time frame. Late submissions
will not be considered.
\n Teams can ask for hints with each hint leading to a specified deduction of points
from the team’s total score.
\n Collaboration with other teams is strictly prohibited. Any form of
communication between teams regarding the challenges will result in
disqualification.
\n Teams are expected to compete ethically. Any form of cheating, such as using
unauthorized tools or scripts or performing DOS or DDOS, will result in
immediate disqualification.
\n In case of technical difficulties, teams must report immediately to the event
coordinator. The coordinator's decision on any disputes or issues will be final.`,
    date: "2024-12-10",
    time: {
      from: "11:00 AM",
      to: "09:00 PM"
    },
    coordinators: [
      {
        name: "Shannon Sequeira ",
        phone: "+91 7249369779",
        role: "Co-ordinator",
        image: "/images/coordinators/shannon.jpg"
      },
      {
        name: "Allieah Ferrao ",
        phone: "+91 7507652568",
        role: "Co-ordinator",
        image: "/images/coordinators/.jpg"
      }
    ],
    judgingCriteria: 'At the end of the CTF, the team with the highest score on the scoreboard will be declared the winner. \nIn case the score is equal, the first team (in a shorter time) to reach the score is considered as first.',
    prize: "Rs 8000/-",
    entryFee: 'FREE',
    category: "Online",
    venue: "BGS 1",
  },
  {
    slug: "LevelUpCoding",
    title: "Level Up Coding",
    codeName: "LevelUpCoding",
    description: "Embark on a thrilling coding adventure with Level Up Coding, an event designed to push your programming skills to new heights. In this immersive experience, you'll face a series of challenges that increase in difficulty, each utilizing a different programming language. From solving foundational problems to tackling complex scenarios, you'll need to adapt and showcase your expertise across a diverse set of languages.",
    image: "/LevelUpCoding.webp", // Replace with actual image path
    rules: `
      * Each team should have 1 or 2 members.
      * Each level of the event will consist of three stages. Each step will contribute to the bigger picture of the problem (e.g., hangman, for the first step set up the game with a target word, guessed letters, and remaining attempts. Then, implement functionality to process letter guesses, update the display with correct guesses, and track attempts. And at last, create a game loop to handle user input, check win/loss conditions, and manage multiple rounds of play.)
      * Offline documentation will be provided for each language. No internet will be provided during the event hours.
      * Participants can progress to a higher level if they have at least completed the first 2 steps from the previous level.
      * Participants are not allowed to communicate with anyone outside the team. Any violation of this rule will result in disqualification.`,
    date: "2024-12-10", // Assuming a different date for this event
    time: {
      from: "10:00 AM",
      to: "05:00 PM"
    },
    coordinators: [
      {
        name: "Vijay Kumar Oli",
        phone: "", // Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/vijay_kumar_oli.webp" // Replace with actual image path
      },
      {
        name: "Shreyas Bhagkar",
        phone: "", // Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/shreyas_bhagkar.webp" // Replace with actual image path
      }
    ],
    judgingCriteria: `
      * Correctness: Accuracy of the solution
      * Code quality: Clarity, readability, and adherence to best practices
      * Robustness: Handling of edge cases and potential errors
      * Time remaining: In case of a tie, time taken to complete all the challenges will be taken into account.`,
    venue: "GBS 2",
    prize: "Not Applicable", // No prizes for info talks
    category: "Offline"
  },
  {
    slug: "LineFollower",
    title: "Line Follower",
    codeName: "LineFollower",
    description: "Teams must create an autonomous robot that can navigate a maze by following a white line and keeping track of directions. The bot must navigate the maze  from the starting point to the ending point in the shortest amount of time while analyzing the path during the run.",
    image: "/LineFollower.webp", // Replace with actual image path
    rules: `
      * Team Members: 1-3
      * Submission: Robot must be submitted 1 hour prior to the event to the volunteers.
      * Winner: The robot finishing the maze in the least time will be declared the winner.
      * Touch Penalty: Maximum of 3 touches allowed, each touch adds 10 seconds to the total time.
      * Skip Penalty: Only 1 skip from a checkpoint is allowed, adding 30 seconds to the total time, in case of any issue.
      * Deviation Penalty: Any deviation from the main line will lead to placing the robot back to the previous checkpoint.`,
    date: "2024-12-11", // Assuming a different date for this event
    end_date: "2024-12-11", // Assuming a single day event
    time: {
      from: "10:00 AM",
      to: "05:00 PM"
    },
    coordinators: [
      {
        name: "Raunak Haldankar",
        phone: "", // Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/raunak_haldankar.webp" // Replace with actual image path
      },
      {
        name: "Gajanan Mathkar",
        phone: "", // Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/gajanan_mathkar.webp" // Replace with actual image path
      }
    ],
    judgingCriteria: `
      * The robot finishing the maze in the least time will be declared the winner.`,
    prize: "Not provided", // No prizes for info talks
    venue: "GBS 2",
    category: "Offline"
  },
  {
    slug: "DesignDuel",
    title: "Design Duel",
    codeName: "DesignDuel",
    description: "The event has 3 levels: *Level 1:* Css battle Users will be provided with reference CSS designs and its upto them to mimic it as closely as possible through HTML,CSS Responsive Design in Figma Objective: Test participants’ ability to design for different screen sizes and understand responsive design principles using Figma. Level 2:Debug CSS code. The quickest to solve the issues progresses to the next round. (Time limit: 30 minutes) Level 3:Rapid Prototyping. Participants have a very limited time (e.g., 30 minutes) to create a quick prototype based on a surprise prompt. This tests their ability to think quickly and efficiently.",
    image: "/DesignDuel.webp", // Replace with actual image path
    rules: `
      1. Maximum 2 teams from each College and 2 members in a team
      2. Laptops need to be carried.
      3. Figma and VS Code should be installed
      4. No internet connection will be provided for the coding sections.
      5. You cannot use code generated by Figma.
      6. Elimination will take place after the second round.
      7. Judging criteria:
        - Design relevance to the problem statement
        - Use of proper design principles
        - Usability of the website
        - Clean and readable code
        - Responsiveness and adaptability of the design
      8. Bonus points for including appropriate animations, styling, and effects in your design.
      9. The use of external libraries or frameworks is not permitted; only vanilla HTML, CSS`,
    date: "2024-12-10", // Assuming a different date for this event
    time: {
      from: "10:00 AM",
      to: "05:00 PM"
    },
    coordinators: [
      {
        name: "Alishka Fernandes",
        phone: "", // Random 10 digit phone number
        role: "Lead Coordinator",
        image: "/alishka_fernandes.webp" // Replace with actual image path
      },
      {
        name: "Mark Fernandes",
        phone: "", // Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/mark_fernandes.webp" // Replace with actual image path
      },
      {
        name: "Rahul Bandekar",
        phone: "", // Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/rahul_bandekar.webp" // Replace with actual image path
      },
      {
        name: "Sachin Kumar",
        phone: "",
        image: "/images/coordinators/amay.jpg"
      }
    ],
    judgingCriteria: "not provided",
    prize: "Rs 4000/-",
    entryFee: 'FREE',
    category: "Offline",
    venue: "Goa Buisness School (Lab 3)",
  },
  {
    slug: "SciFiReelChallenge",
    title: "Sci-Fi Reel Challenge",
    codeName: "SciFiReelChallenge",
    description: "Showcase your creativity and craft a science fiction story in just 90 seconds. Tell a compelling story that captures the essence of sci-fi. Use VFX to enhance your reel.",
    image: "/SciFiReelChallenge.webp", // Replace with actual image path
    rules: `
      * Theme: Science Fiction.
      * Duration: Maximum of 90 seconds.
      * Objective: Tell a compelling story that captures the essence of sci-fi. It should feel like a mini-movie.
      * VFX: The use of visual effects (VFX) is allowed and encouraged to enhance your reel.
      * Originality: Your story must be original. Any copied or plagiarized content will result in immediate disqualification.
      * Format: Instagram Reel Format
      * Submission: Post your reel on Instagram and collaborate with the Infofest page. Make sure your reel includes the event name and your reel's title.`,
    date: "2024-12-21", // Assuming a different date for this event
    end_date: "2024-12-21", // Assuming a single day event
    time: {
      from: "10:00 AM",
      to: "05:00 PM"
    },
    coordinators: [
      // No coordinators mentioned for this event
    ],
    judgingCriteria: "Not provided", // No judging criteria for info talks
    prize: "Not provided", // No prizes for info talks
    category: "Online",
    venue: "Outside Goa Business School Auditorium",
  },
  {
    slug: "FIFA",
    title: "FIFA",
    codeName: "FIFA",
    description: "The whole event will be knockout based wherein each participant will have to win their spot in the next knockout round. The Knockout round will include the Round of 16, Quarter Finals, Semi Finals and then followed by the Finals. Prior this if the number of participants exceed 16 than elimination matches will be held to select 16 players for the round of 16 judging for this elimination round will be done on the basis of goal difference That is (Goal For - Goals Against).",
    image: "/FIFA.webp", // Replace with actual image path
    rules: `
      * Game will be FIFA-23
      * Console used: Play Station 4
      * Single-elimination.
      * Game time will be 4 minutes per half till Quarter-Final matches and 6 minutes for Semi-final and the Final.
      * Game pace will be normal.
      * No re-entry.
      * Only official club and country teams allowed (Soccer-aid and Adidas all-star not allowed).
      * Same team should be used once chosen throughout the tournament.
      * Custom tactics are allowed.
      * One minute will be given for team management before the start of the match, at half-time .
      * In between matches only during Throw-in's, Corner, Player injury or Red card, The player will be allowed to pause to make any changes.
      * If match is drawn until the 90th minute then direct penalties. No extra-time will be given.`,
    date: "2024-12-10", // Assuming a different date for this event
    time: {
      from: "10:00 AM",
      to: "05:00 PM"
    },
    coordinators: [
      {
        name: "Mark Fernandes",
        phone: "", // Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/mark_fernandes.webp" // Replace with actual image path
      },
      {
        name: "Ankur Falari",
        phone: "", // Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/ankur_falari.webp" // Replace with actual image path
      }
    ],
    judgingCriteria: `
      * The judging for the elimination round will be done on the basis of goal difference (Goal For - Goals Against).`,
    prize: "Not provided", // No prizes for info talks
    venue: "GBS hall",
    category: "Offline"
  },
  {
    slug: "Quiz",
    title: "Quiz",
    codeName: "Quiz",
    description: "Think beyond the code!!While computer science is important, this quiz will challenge you across a broad spectrum of topics.Show off your wide-ranging knowledge and test your overall versatility, compete with peers from various disciplines, and prove that you're more than just a tech whiz. Come prepared for a well-rounded intellectual challenge!",
    image: "/Quiz.webp", // Replace with actual image path
    rules: `Participants must be current students of the participating colleges.
\n Each college can send a maximum of two teams and each team should consist of a maximum 2 members .
\n The quiz will consist of two elimination rounds
\n In the event of a tie, tie-breaker questions will be used to determine the winner.
\n Correct answers will be awarded points. The point value for each question will be announced before the round begins.
\n The quiz will consist of multiple rounds.
\n Participants must adhere to the quizmaster’s instructions at all times.
\n Use of mobile phones, smart devices, or any other means of cheating is strictly prohibited.
\n Any form of misconduct may lead to disqualification of the team.
\n The quizmaster’s decision is final and binding in all matters related to the quiz.
\n Any team found to be using unfair means will be disqualified.
The Judging criteria will be explained prior to each round as it will differ based on the rounds .
`,
    date: "2024-12-10", // Assuming a different date for this event
    time: {
      from: "10:00 AM",
      to: "05:00 PM"
    },
    coordinators: [
      {
        name: "Ratna Mandre",
        phone: "", // Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/ratna_mandre.webp" // Replace with actual image path
      },
      {
        name: "Shreya Gavli",
        phone: "",// Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/shreya_gavli.webp" // Replace with actual image path
      }
    ],
    judgingCriteria: "Not provided", // No judging criteria for info talks
    venue: "GBS 4",
    prize: "Not provided", // No prizes for info talks
  },
  {
    slug: "Debate",
    title: "Debate",
    codeName: "Debate",
    description: "Debate is an exciting platform for students to showcase their knowledge, critical thinking, and public speaking skills. There will be stimulating conversations among participants about current technological problems, innovations, and trends. This event seeks to promote varied perspectives on tech-related issues, improve communication skills, and cultivate an intellectually curious spirit.",
    image: "/Debate.webp", // Replace with actual image path
    rules: `Each team will consist of two members.
\n Topics will be tech-related and provided to the teams just before their turn.
\n Each debate will follow this structure:
\n- Opening Statement (For the motion): 3 minutes
\n- Opening Statement (Against the motion): 3 minutes
\n- Rebuttal (For the motion): 2 minutes
\n- Rebuttal (Against the motion): 2 minutes
\n- Closing Statements (Both sides): 1 minutes each
\n A brief Q&A session may follow each debate, where judges  can ask questions.
\n Participants must maintain decorum and respect at all times.
\n Personal attacks, offensive language, or disrespectful behavior will result in disqualification.
\n Judges decision will be final
\n Electronic devices are not allowed during the debate.
`,
    date: "2024-12-11", // Assuming a different date for this event
    time: {
      from: "10:00 AM",
      to: "05:00 PM"
    },
    coordinators: [
      {
        name: "Minal Shirodkar",
        phone: "",// Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/minal_shirodkar.webp" // Replace with actual image path
      },
      {
        name: "Shivani Deshpande",
        phone: "",
        role: "Co-Coordinator",
        image: "/shivani_deshpande.webp" // Replace with actual image path
      }
    ],
    judgingCriteria: "Not given", // No judging criteria for info talks
    prize: "Not provided", // No prizes for info talks
    venue: "GBS 5",
  },
  {
    slug: "BizWiz",
    title: "Biz Wiz",
    codeName: "BizWiz",
    description: "Get ready to dive into the ultimate entrepreneurial challenge! Our Biz Wiz event is your chance to pitch your innovative ideas, products, or services to a panel of seasoned investors and industry experts, just like on Shark Tank! Showcase your creativity, passion, and business acumen to secure funding, mentorship, and take your venture to the next level. Will you emerge as the next Biz Wiz?",
    image: "/BizWiz.webp", // Replace with actual image path
    rules: `
      **Pitch Guidelines:**
        1. Pitches must be 20 minutes long, followed by 5-10 minutes of Q&A.
        2. Visual aids like slides, videos, or props are allowed.
        3. Pitches should cover:
          - Problem statement
          - Solution
          - Market potential
          - Business model
          - Competitive advantage
          - Financial projections (if applicable)
      **Event/Participation Rules:**
        1. Each team should consist of 2 members.
        2. Participants must arrive and report 30 minutes before their scheduled pitch time.
        3. Avoid having the same team for another parallel ongoing event to avoid clash.
        4. Each team can submit only one pitch.
        5. Pitches must be original and owned by the participants.`,
    date: "2024-12-10", // Assuming a different date for this event
    time: {
      from: "10:00 AM",
      to: "05:00 PM"
    },
    coordinators: [
      {
        name: "Adriella Vaz",
        phone: "",// Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/adriella_vaz.webp" // Replace with actual image path
      },
      {
        name: "Ayushi Kamrani",
        phone: "",// Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/ayushi_kamrani.webp" // Replace with actual image path
      }
    ],
    judgingCriteria: `
      1. Innovation & Creativity: How original and innovative is your product idea?
      2. Feasibility: Is the product realistic and achievable with current technology or resources?
      3. Market Potential: How well does the product meet market needs? What is its potential for success?
      4. Presentation & Communication: How well is the idea communicated? Is the presentation clear, engaging, and persuasive?
      5. Q&A Handling: How confidently and effectively do you respond to questions from the judges?
      6. Team dynamics and leadership
      7. Clarity and persuasiveness of the pitch`,
    prize: "Not provided", // No prizes for info talks
    category: "Offline"
  },
  {
    slug: "Info-Talks",
    title: "Info Talks",
    codeName: "InfoTalks",
    description: "Info Talks is an engaging event aimed at promoting knowledge sharing and discussions on significant topics. Attendees will benefit from presentations by two esteemed guest speakers, supported by a dedicated technical team and volunteers who will ensure the event runs smoothly. This is an excellent opportunity for participants to learn, network, and engage in meaningful discussions.",
    image: "/InfoTalks.webp", // Replace with actual image path
    rules: "...", // Information not provided in data
    date: "2024-12-12", // Date not provided in this event description, assuming a different date
    end_date: "2024-12-12", // Assuming a single day event
    time: {
      from: "10:00 AM",
      to: "05:00 PM"
    },
    coordinators: [
      {
        name: "Akanksha Dessai",
        phone: "", // Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/akanksha_dessai.webp" // Replace with actual image path
      },
      {
        name: "Vedhangi Fadte",
        phone: "", // Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/vedhangi_fadte.webp" // Replace with actual image path
      }
    ],
    venue: "GBS hall1",

  },
  {
    slug: "InteractiveDashboardCreation",
    title: "Interactive Dashboard Creation",
    codeName: "InteractiveDashboardCreation",
    description: "Interactive Dashboard Creation challenges participants to create an interactive dashboard based on a provided dataset and a set of questions. The goal is to develop a dashboard that can answer at least some percent of the questions effectively. This competition will test your data visualization skills, analytical capabilities, and creativity in presenting data insights.",
    image: "/InteractiveDashboardCreation.webp", // Replace with actual image path
    rules: `
      * Participants Should Carry their own Laptops
      * Each team will consist of 2-3 members.
      * Participants will be provided with a dataset and a set of questions upon arrival.
      * Each team must build a fully interactive dashboard using their preferred tools (e.g., Tableau, Power BI, Dash, etc.).
      * The dashboard should answer at least 60% of the provided questions.
      * The time limit for creating the dashboard is 3 hours.
      * Once the dashboards are complete, each team will present their work to the judges. Presentations should last no longer than 10 minutes.
      * Judges will ask questions after the presentations.
      * Participants must work only with the tools and data provided; outside data sources are not permitted.
      * Judges' decisions are final, and no electronic devices apart from the ones provided for dashboard creation may be used during the event.`,
    date: "2024-12-10", // Assuming a different date for this event
    time: {
      from: "10:00 AM",
      to: "05:00 PM"
    },
    coordinators: [
      {
        name: "Deep Naik",
        phoneNumber: Math.floor(Math.random() * 10000000000), // Random 10 digit phone number
        role: "Co-Coordinator",
        image: "/deep_naik.webp" // Replace with actual image path
      }
    ],
    judgingCriteria: "Not provided", // No judging criteria for info talks
    prize: "Not provided", // No prizes for info talks
    category: "Offline"
  },

];

const getEvent = (slug) => events.find(event => event.slug === slug)

Object.assign(events, { get: getEvent })

export default events;
