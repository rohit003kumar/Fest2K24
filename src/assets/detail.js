import r1 from '../assets/result1.jpg'
import r2 from '../assets/result2.jpg'
import r3 from '../assets/result3.jpg'
import r4 from '../assets/result4.jpg'
import r5 from '../assets/result5.jpg'
import r6 from '../assets/result6.jpg'
import r7 from '../assets/result7.jpg'
import r8 from '../assets/result8.jpg'
import r9 from '../assets/result9.jpg'
import r10 from '../assets/result10.avif'
import r11 from '../assets/result11.jpg'
import r12 from '../assets/result12.jpg'
import r13 from '../assets/result13.jpg'
import r14 from '../assets/result14.avif'
import r15 from '../assets/result15.jpg'
import r16 from '../assets/result16.jpg'
import r17 from '../assets/result17.jpg'
import r18 from '../assets/result18.jpg'
import r19 from '../assets/result19.jpg'
import r20 from '../assets/result20.jpg'
import r21 from '../assets/result21.jpg'
import r22 from '../assets/result22.jpg'




let detail = [
  {
    "event_id": "001",
    "event_name": "CodeFiesta ",
    "event_coordinator": "Jane Doe",
    "event_teacher_coordinator": "Dr. John Smith",
    "event_date": "2024-10-15",
    "event_time": "09:00 AM - 05:00 PM",
    "event_about": "Join us for a full-day workshop focused on the latest innovations in technology.",
    "event_video": "https://www.youtube.com/watch?v=LwNgY4VjER0",
    "event_rules_and_regulations": [
      "Participants must register by October 10, 2024.",
      "No outside food or beverages are allowed.",
      "All attendees must adhere to the code of conduct."
    ],
    "contact_event": {
      "name": "Aman Kumar",
      "email": "techworkshop@example.com",
      "phone": "(123) 456-7890"
    },
    "event_image": r1,
    "event_faqs": [
      {
        "question": "What is the deadline for registration?",
        "answer": "Participants must register by October 10, 2024."
      },
      {
        "question": "Can I bring outside food?",
        "answer": "No outside food or beverages are allowed."
      }
    ]
  },
  {
    "event_id": "002",
    "event_name": "Ad Mad Show",
    "event_coordinator": "Emily Zhang",
    "event_teacher_coordinator": "Prof. Alan Turing",
    "event_date": "2024-10-16",
    "event_time": "10:00 AM - 04:00 PM",
    "event_about": "Learn about cutting-edge AI and ML technologies from experts in the field.",
    "event_video": "https://www.youtube.com/watch?v=rJ1Qao09CFI&pp=ygUWYWkgdGVjaG5vbG9neSBpbiBoaW5kaQ%3D%3D",
    "event_rules_and_regulations": [
      "Participants must have prior knowledge of basic AI concepts.",
      "Laptop with Python installed is required.",
      "Follow instructions for the hands-on sessions."
    ],
    "contact_event": {
      "name": "Priya Patel",
      "email": "mlseminar@example.com",
      "phone": "(234) 567-8901"
    },
    "event_image": r2,
    "event_faqs": [
      {
        "question": "Do I need to bring a laptop?",
        "answer": "Yes, a laptop with Python installed is required."
      },
      {
        "question": "Is prior AI knowledge required?",
        "answer": "Yes, participants must have basic knowledge of AI concepts."
      }
    ]
  },
  {
    "event_id": "003",
    "event_name": "Idea Presentation",
    "event_coordinator": "Michael Jordan",
    "event_teacher_coordinator": "Prof. Satoshi Nakamoto",
    "event_date": "2024-10-17",
    "event_time": "11:00 AM - 06:00 PM",
    "event_about": "A comprehensive summit covering Blockchain technologies and their applications.",
    "event_video": "https://www.youtube.com/watch?v=YJyXfjbBmc8&pp=ygUVYmxvY2tjaGFpbiB0ZWNobm9sb2d5",
    "event_rules_and_regulations": [
      "Attendees must register online before the event.",
      "No photography allowed inside the summit hall.",
      "Follow the dress code (formal)."
    ],
    "contact_event": {
      "name": "Rahul Mehta",
      "email": "blockchain@example.com",
      "phone": "(345) 678-9012"
    },
    "event_image":r3,
    "event_faqs": [
      {
        "question": "Is photography allowed?",
        "answer": "No, photography is not allowed inside the summit hall."
      },
      {
        "question": "Do I need to dress formally?",
        "answer": "Yes, formal attire is required."
      }
    ]
  },
  {
    "event_id": "004",
    "event_name": "Star Investor",
    "event_coordinator": "Sarah Lee",
    "event_teacher_coordinator": "Prof. Tim Berners-Lee",
    "event_date": "2024-10-18",
    "event_time": "09:00 AM - 03:00 PM",
    "event_about": "Explore cloud infrastructure, services, and future trends.",
    "event_video": "https://www.youtube.com/watch?v=8C_kHJ5YEiA",
    "event_rules_and_regulations": [
      "Bring your laptop for the interactive sessions.",
      "Strictly no food and drink in the labs."
    ],
    "contact_event": {
      "name": "Lakshmi Nair",
      "email": "cloudconference@example.com",
      "phone": "(456) 789-0123"
    },
    "event_image": r4,
    "event_faqs": [
      {
        "question": "Do I need a laptop?",
        "answer": "Yes, a laptop is needed for the interactive sessions."
      },
      {
        "question": "Are there any restrictions in the labs?",
        "answer": "Yes, no food and drinks are allowed in the labs."
      }
    ]
  },
  {
    "event_id": "005",
    "event_name": "Business Quiz",
    "event_coordinator": "John Lee",
    "event_teacher_coordinator": "Prof. Bruce Schneier",
    "event_date": "2024-10-19",
    "event_time": "08:00 AM - 02:00 PM",
    "event_about": "Learn the latest techniques in cybersecurity to safeguard your data.",
    "event_video": "https://www.youtube.com/watch?v=vK4Mno4QYqk",
    "event_rules_and_regulations": [
      "Ensure that your devices are secured.",
      "Keep your ID with you at all times."
    ],
    "contact_event": {
      "name": "Anjali Gupta",
      "email": "cyberday@example.com",
      "phone": "(567) 890-1234"
    },
    "event_image": r5,
    "event_faqs": [
      {
        "question": "Can I bring my own device?",
        "answer": "Yes, but make sure it is secured."
      },
      {
        "question": "What should I bring?",
        "answer": "Bring your ID and a notebook for the sessions."
      }
    ]
  },
  // Continue similarly for the remaining 15 objects...
  {
    "event_id": "006",
    "event_name": "Group Discussion",
    "event_coordinator": "Sophia Green",
    "event_teacher_coordinator": "Prof. Kevin Ashton",
    "event_date": "2024-10-20",
    "event_time": "10:00 AM - 05:00 PM",
    "event_about": "Discuss the latest IoT trends and their applications in smart cities.",
    "event_video": "https://www.youtube.com/watch?v=eKqY-oP1d_Y&pp=ygUGY29kaW5n",
    "event_rules_and_regulations": [
      "All participants must have a basic understanding of IoT concepts.",
      "No external devices are allowed."
    ],
    "contact_event": {
      "name": "Vijay Singh",
      "email": "iotpanel@example.com",
      "phone": "(678) 901-2345"
    },
    "event_image":r6,
    "event_faqs": [
      {
        "question": "Is prior knowledge of IoT required?",
        "answer": "Yes, a basic understanding of IoT is necessary."
      },
      {
        "question": "Can I bring my own IoT device?",
        "answer": "No external devices are allowed."
      }
    ]
  },
  {
    "event_id": "007",
    "event_name": "Tech Charades",
    "event_coordinator": "David Johnson",
    "event_teacher_coordinator": "Prof. Jane McGonigal",
    "event_date": "2024-10-21",
    "event_time": "09:00 AM - 09:00 PM",
    "event_about": "Build your own AR/VR apps in this exciting 12-hour hackathon!",
    "event_video": "https://www.youtube.com/watch?v=aB8Dvu8cK_M",
    "event_rules_and_regulations": [
      "Participants must form teams of 3-5 people.",
      "No plagiarism of code is allowed."
    ],
    "contact_event": {
      "name": "Sonal Reddy",
      "email": "arvrhack@example.com",
      "phone": "(789) 012-3456"
    },
    "event_image": r7,
    "event_faqs": [
      {
        "question": "Can I participate alone?",
        "answer": "No, teams of 3-5 people are required."
      },
      {
        "question": "Can I use existing code?",
        "answer": "No, all code must be original."
      }
    ]
  },
    {
      "event_id": "008",
      "event_name": "Nirman",
      "event_coordinator": "Alice Williams",
      "event_teacher_coordinator": "Prof. David Deutsch",
      "event_date": "2024-10-22",
      "event_time": "08:30 AM - 04:30 PM",
      "event_about": "Discover the future of computing with quantum mechanics and its applications.",
      "event_video": "https://www.youtube.com/watch?v=example1",
      "event_rules_and_regulations": [
        "Attendees must register online before the event.",
        "No electronic devices allowed inside the lecture hall."
      ],
      "contact_event": {
        "name": "Alice Williams",
        "email": "quantum@example.com",
        "phone": "(111) 222-3333"
      },
      "event_image": r8,
      "event_faqs": [
        {
          "question": "Can I bring electronic devices?",
          "answer": "No, electronic devices are not allowed."
        },
        {
          "question": "Do I need prior knowledge of quantum computing?",
          "answer": "No, this symposium is designed for all skill levels."
        }
      ]
    },
    {
      "event_id": "009",
      "event_name": "Stem",
      "event_coordinator": "Rahul Verma",
      "event_teacher_coordinator": "Prof. Andrew Ng",
      "event_date": "2024-10-23",
      "event_time": "09:00 AM - 05:00 PM",
      "event_about": "A hands-on bootcamp to help you understand the basics of Big Data analytics.",
      "event_video": "https://www.youtube.com/watch?v=example2",
      "event_rules_and_regulations": [
        "Basic knowledge of Python is required.",
        "Participants must bring their own laptop."
      ],
      "contact_event": {
        "name": "Rahul Verma",
        "email": "bigdata@example.com",
        "phone": "(222) 333-4444"
      },
      "event_image": r9,
      "event_faqs": [
        {
          "question": "Do I need prior programming experience?",
          "answer": "Yes, basic Python knowledge is required."
        },
        {
          "question": "Will laptops be provided?",
          "answer": "No, participants must bring their own laptop."
        }
      ]
    },
    {
      "event_id": "010",
      "event_name": "Coding using mathematics",
      "event_coordinator": "Sophia Kim",
      "event_teacher_coordinator": "Prof. Isaac Asimov",
      "event_date": "2024-10-24",
      "event_time": "10:00 AM - 06:00 PM",
      "event_about": "Explore cutting-edge advancements in robotics through live demonstrations.",
      "event_video": "https://www.youtube.com/watch?v=example3",
      "event_rules_and_regulations": [
        "No food or drinks near the robots.",
        "Children under 12 must be accompanied by an adult."
      ],
      "contact_event": {
        "name": "Sophia Kim",
        "email": "robotics@example.com",
        "phone": "(333) 444-5555"
      },
      "event_image": r10,
      "event_faqs": [
        {
          "question": "Can I touch the robots?",
          "answer": "No, touching the robots is not allowed."
        },
        {
          "question": "Is this event suitable for kids?",
          "answer": "Yes, but children under 12 must be accompanied by an adult."
        }
      ]
    },
    {
      "event_id": "011",
      "event_name": "Escape Room Math Challenge",
      "event_coordinator": "Jason Carter",
      "event_teacher_coordinator": "Prof. Sheryl Sandberg",
      "event_date": "2024-10-25",
      "event_time": "09:00 AM - 03:00 PM",
      "event_about": "Meet with top tech companies to explore career opportunities and internships.",
      "event_video": "https://www.youtube.com/watch?v=example4",
      "event_rules_and_regulations": [
        "Bring your resume and portfolio.",
        "Dress in business casual attire."
      ],
      "contact_event": {
        "name": "Jason Carter",
        "email": "careerfair@example.com",
        "phone": "(444) 555-6666"
      },
      "event_image": r11,
      "event_faqs": [
        {
          "question": "Do I need to bring a resume?",
          "answer": "Yes, a resume is required for participation."
        },
        {
          "question": "What should I wear?",
          "answer": "Business casual attire is recommended."
        }
      ]
    },
    {
      "event_id": "012",
      "event_name": "Code Relay Race",
      "event_coordinator": "Angela Johnson",
      "event_teacher_coordinator": "Prof. Ada Lovelace",
      "event_date": "2024-10-26",
      "event_time": "10:00 AM - 12:00 PM",
      "event_about": "A discussion on the importance of gender diversity in the tech industry.",
      "event_video": "https://www.youtube.com/watch?v=example5",
      "event_rules_and_regulations": [
        "All are welcome, regardless of gender.",
        "Please arrive 15 minutes before the event starts."
      ],
      "contact_event": {
        "name": "Angela Johnson",
        "email": "womenintech@example.com",
        "phone": "(555) 666-7777"
      },
      "event_image": r12,
      "event_faqs": [
        {
          "question": "Who can attend this event?",
          "answer": "This event is open to everyone, regardless of gender."
        },
        {
          "question": "Is there a specific dress code?",
          "answer": "No specific dress code is required."
        }
      ]
    },
    {
      "event_id": "013",
      "event_name": "Debbugging Battle",
      "event_coordinator": "Paul Brown",
      "event_teacher_coordinator": "Prof. Elon Musk",
      "event_date": "2024-10-27",
      "event_time": "09:00 AM - 05:00 PM",
      "event_about": "Learn the basics of self-driving car technology and its future impact.",
      "event_video": "https://www.youtube.com/watch?v=example6",
      "event_rules_and_regulations": [
        "Participants must have a valid driver's license.",
        "No children under 18 are allowed."
      ],
      "contact_event": {
        "name": "Paul Brown",
        "email": "selfdriving@example.com",
        "phone": "(666) 777-8888"
      },
      "event_image": r13,
      "event_faqs": [
        {
          "question": "Do I need a driver’s license?",
          "answer": "Yes, participants must have a valid driver’s license."
        },
        {
          "question": "Is this event suitable for kids?",
          "answer": "No, this event is for participants 18 years or older."
        }
      ]
    },
    {
      "event_id": "014",
      "event_name": "Result-cards",
      "event_coordinator": "Maria Lee",
      "event_teacher_coordinator": "Prof. Steve Jobs",
      "event_date": "2024-10-28",
      "event_time": "08:00 AM - 08:00 PM",
      "event_about": "Build the next big app in this intense mobile app development contest!",
      "event_video": "https://www.youtube.com/watch?v=example7",
      "event_rules_and_regulations": [
        "Teams of 2-4 people are required.",
        "No pre-existing code or templates allowed."
      ],
      "contact_event": {
        "name": "Maria Lee",
        "email": "mobileapp@example.com",
        "phone": "(777) 888-9999"
      },
      "event_image": r14,
      "event_faqs": [
        {
          "question": "Can I participate alone?",
          "answer": "No, teams of 2-4 people are required."
        },
        {
          "question": "Can we use pre-existing code?",
          "answer": "No, all code must be written during the contest."
        }
      ]
    },
    {
      "event_id": "015",
      "event_name": "Competitive Pair Programming",
      "event_coordinator": "Emily Johnson",
      "event_teacher_coordinator": "Prof. Charles Hull",
      "event_date": "2024-10-29",
      "event_time": "09:00 AM - 06:00 PM",
      "event_about": "Explore the world of 3D printing, learn how to create your own designs, and print them in real-time.",
      "event_video": "https://www.youtube.com/watch?v=example8",
      "event_rules_and_regulations": [
        "All designs must be original.",
        "No food or drink near the printing equipment."
      ],
      "contact_event": {
        "name": "Emily Johnson",
        "email": "3dprint@example.com",
        "phone": "(888) 999-1010"
      },
      "event_image": r15,
      "event_faqs": [
        {
          "question": "Can I bring my own design?",
          "answer": "Yes, as long as it’s original."
        },
        {
          "question": "Are there any restrictions on materials?",
          "answer": "Yes, we will only use the materials provided by the workshop."
        }
      ]
    },
    {
      "event_id": "016",
      "event_name": "Cose Golf(Minimize Code Size)",
      "event_coordinator": "Mark Davis",
      "event_teacher_coordinator": "Prof. Peter Thiel",
      "event_date": "2024-10-30",
      "event_time": "10:00 AM - 04:00 PM",
      "event_about": "Pitch your startup idea to a panel of investors and industry leaders for a chance to win funding.",
      "event_video": "https://www.youtube.com/watch?v=example9",
      "event_rules_and_regulations": [
        "Teams of up to 5 members are allowed.",
        "All participants must sign an NDA before presenting."
      ],
      "contact_event": {
        "name": "Mark Davis",
        "email": "startuppitch@example.com",
        "phone": "(999) 101-1111"
      },
      "event_image": r16,
      "event_faqs": [
        {
          "question": "Do I need a fully developed product?",
          "answer": "No, a detailed prototype or plan is sufficient."
        },
        {
          "question": "Will the presentation be public?",
          "answer": "No, it will only be presented to the judges and investors."
        }
      ]
    },
    {
      "event_id": "017",
      "event_name": "Refactor Mania",
      "event_coordinator": "Nina Patel",
      "event_teacher_coordinator": "Prof. Jaron Lanier",
      "event_date": "2024-10-31",
      "event_time": "11:00 AM - 05:00 PM",
      "event_about": "Discover how virtual reality is transforming the education sector with hands-on demos.",
      "event_video": "https://www.youtube.com/watch?v=example10",
      "event_rules_and_regulations": [
        "No personal VR equipment allowed.",
        "All participants must attend the safety briefing before the demo."
      ],
      "contact_event": {
        "name": "Nina Patel",
        "email": "vreducation@example.com",
        "phone": "(101) 111-1212"
      },
      "event_image": r17,
      "event_faqs": [
        {
          "question": "Can I bring my own VR equipment?",
          "answer": "No, only the provided equipment will be used."
        },
        {
          "question": "Is prior VR experience required?",
          "answer": "No, beginners are welcome."
        }
      ]
    },
    {
      "event_id": "018",
      "event_name": "Legacy Code Revival",
      "event_coordinator": "James Wang",
      "event_teacher_coordinator": "Prof. Sebastian Thrun",
      "event_date": "2024-11-01",
      "event_time": "09:00 AM - 05:00 PM",
      "event_about": "Program and test autonomous drones to complete real-world tasks in a timed competition.",
      "event_video": "https://www.youtube.com/watch?v=example11",
      "event_rules_and_regulations": [
        "Teams of 3-5 participants are required.",
        "All drones must meet the event’s technical specifications."
      ],
      "contact_event": {
        "name": "James Wang",
        "email": "droneschallenge@example.com",
        "phone": "(121) 131-1414"
      },
      "event_image": r18,
      "event_faqs": [
        {
          "question": "Do I need to bring my own drone?",
          "answer": "Yes, but it must meet the event's technical specifications."
        },
        {
          "question": "Can I participate alone?",
          "answer": "No, teams of 3-5 participants are required."
        }
      ]
    },
    {
      "event_id": "019",
      "event_name": "Binary Bingo",
      "event_coordinator": "Emily Davis",
      "event_teacher_coordinator": "Prof. Andrew Ng",
      "event_date": "2024-11-05",
      "event_time": "10:00 AM - 06:00 PM",
      "event_about": "Solve real-world challenges using AI and machine learning techniques.",
      "event_video": "https://www.youtube.com/watch?v=example12",
      "event_rules_and_regulations": [
        "Teams of 2-4 participants are required.",
        "All projects must use at least one open-source AI library."
      ],
      "contact_event": {
        "name": "Emily Davis",
        "email": "aihacks@example.com",
        "phone": "(122) 232-2424"
      },
      "event_image": r19,
      "event_faqs": [
        {
          "question": "Can we use pre-trained AI models?",
          "answer": "Yes, but they must be appropriately credited."
        },
        {
          "question": "Can we participate remotely?",
          "answer": "Yes, the event supports virtual participation."
        }
      ]
    },
    {
      "event_id": "020",
      "event_name": "Human-AI collaboration",
      "event_coordinator": "Sarah Lee",
      "event_teacher_coordinator": "Prof. Bruce Schneier",
      "event_date": "2024-11-10",
      "event_time": "08:00 AM - 04:00 PM",
      "event_about": "Defend against simulated cyberattacks in a competitive environment.",
      "event_video": "https://www.youtube.com/watch?v=example13",
      "event_rules_and_regulations": [
        "Teams of 3-6 participants are required.",
        "Participants must bring their own laptops."
      ],
      "contact_event": {
        "name": "Sarah Lee",
        "email": "cyberdefense@example.com",
        "phone": "(123) 333-3434"
      },
      "event_image": r20,
      "event_faqs": [
        {
          "question": "Is prior cybersecurity experience required?",
          "answer": "No, beginners are welcome, though advanced challenges are available."
        },
        {
          "question": "Will tools be provided?",
          "answer": "No, participants must use their own software tools."
        }
      ]
    },
    {
      "event_id": "021",
      "event_name": "Mystery box Challenge",
      "event_coordinator": "Michael Chen",
      "event_teacher_coordinator": "Prof. Donald Knuth",
      "event_date": "2024-11-12",
      "event_time": "09:30 AM - 05:30 PM",
      "event_about": "Compete in algorithmic challenges to test your coding skills.",
      "event_video": "https://www.youtube.com/watch?v=example14",
      "event_rules_and_regulations": [
        "Solo participants are required.",
        "All code must be written live during the event."
      ],
      "contact_event": {
        "name": "Michael Chen",
        "email": "codefiesta@example.com",
        "phone": "(124) 434-4444"
      },
      "event_image": r21,
      "event_faqs": [
        {
          "question": "What programming languages are allowed?",
          "answer": "C, C++, Java, Python, and JavaScript."
        },
        {
          "question": "Is there a time limit for each challenge?",
          "answer": "Yes, each challenge must be completed within 60 minutes."
        }
      ]
    },
    {
      "event_id": "022",
      "event_name": "Lightening Talks",
      "event_coordinator": "Ava Johnson",
      "event_teacher_coordinator": "Prof. Rodney Brooks",
      "event_date": "2024-11-15",
      "event_time": "09:00 AM - 04:00 PM",
      "event_about": "Build and program robots to navigate a challenging obstacle course.",
      "event_video": "https://www.youtube.com/watch?v=example15",
      "event_rules_and_regulations": [
        "Teams of 4-6 participants are required.",
        "Robots must be autonomous."
      ],
      "contact_event": {
        "name": "Ava Johnson",
        "email": "robotrace@example.com",
        "phone": "(125) 535-5454"
      },
      "event_image": r22,
      "event_faqs": [
        {
          "question": "Can we control the robots manually?",
          "answer": "No, all robots must be autonomous."
        },
        {
          "question": "Is there a specific size requirement for the robots?",
          "answer": "Yes, robots must not exceed 50 cm in height."
        }
      ]
    },
    
  ]


export default detail;


