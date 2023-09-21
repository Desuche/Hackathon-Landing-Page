import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'Join ByteBUzz',
  TITLE_COLOURED_INDEX_START: 9,
  TITLE_COLOURED_INDEX_END: 10,
  Typed_effect: ['24 hours of creation', 'Let\'s hack into the future'],
  SHORT_DESCRIPTION:
    'Join us on 10th October 2023 with over 300 students from across Hong Kong for 24 hours of creation, innovation, & fun.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK:
    'https://d7hlntva62z.typeform.com/to/CZfHdwuR',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://d7hlntva62z.typeform.com/to/GrutbFw2'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/',
  discord: 'https://discord.gg/VTq67QUTTx',
  linkedin: 'https://www.linkedin.com/',
  twitter: 'https://twitter.com/',
  devpost: 'https://google.com/',
  email: 'mailto:bytebuzz@cs.hkbu.edu.hk',
  mail: 'bytebuzz@cs.hkbu.edu.hk'
};

const MIDDLE_SECTION = {
  TITLE: 'What is ByteBUzz?',
  LONG_DESCRIPTION:
  'ByteBuzz is an exhilarating hackathon event that convenes the brightest minds and tech enthusiasts from across Hong Kong to HKBU. It is a platform where innovation and creativity collide, igniting a vibrant atmosphere of problem-solving and ideation. Whether you\'re a seasoned developer or a budding programmer, ByteBuzz offers a unique opportunity to showcase your skills, learn from industry experts, and network with like-minded individuals. Get ready to unleash your potential, embrace the spirit of innovation, and make your mark at ByteBuzz, where ideas turn into reality.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://d7hlntva62z.typeform.com/to/CZfHdwuR'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://d7hlntva62z.typeform.com/to/CZfHdwuR'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 9,
  year: 2023
};

const schedule = [
  {
    day: '13-9-2023',
    events: [
      {
        title: 'Securing a Tech Internship - Intern Panel Discussion',
        timings: '6 PM - 8 Pm',
        link: 'https://gdsc.community.dev/events/details/developer-student-clubs-hong-kong-baptist-university-presents-securing-a-tech-internship-intern-panel-discussion/'
      }
    ]
  },
  {
    day: '14-9-2023',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '22-9-2023',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '22-9-2023',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '13-10-2023',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'overall First',
      content:
        'First Overall prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'overall Second',
      content:
        'Second Overall prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Third Second',
      content:
        'Best third overall project of the hackathon will win some awesome prizes'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Best Solo',
      content:
        'You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: ' Best Beginner',
      content: 'Your project will qualify for this category if atleast 50% '
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: 'Best UI/UX',
      content: 'Project with most creative designs will be UI/UX track'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: 'https://github.com/Limbo-Hacks/Hackathon-website-template',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Erika',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Lyanola',
      role: 'Visiting Judge',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: pass}] //Array 2
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content:
          'ByteBUzz is open to all undergraduate, high school students and middle school students from all schools.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
      },
      {
        label: 'How team formation works?',
        content:
          "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to fill our form above and join Discord, we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at (bytebuzz@cs.hkbu.edu.hk)) we would happy to help you.'
      },
      {
        label: 'Can i volunteer?',
        content:
          'Yes we are actively looking for volunteers, fill the form (in footer section) we will be glad to have you.'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! Participants will recieve BU CS swag 😎!'
      }
    ]
  ]
];

export {
  calenderStartingDate, FOOTER, frequentlyAskedQuestions, JudgesInfo, MIDDLE_SECTION, Prizeinfo, schedule, SOCIALS, sponsorLogos,
  TeamInfo, TOP_SECTION
};

