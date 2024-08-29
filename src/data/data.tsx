import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import avatar1 from '../images/avatar/avatar1.jpg';
import avatar2 from '../images/avatar/avatar2.jpg';
import avatar3 from '../images/avatar/avatar3.jpg';
import avatar4 from '../images/avatar/avatar4.jpg';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import portfolioSample1 from '../images/testimonial.webp';
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../images/portfolio/tnepreview.png';
import portfolioGif1 from '../images/portfolio/fullstack(COMPRESS).gif';
import portfolioGif2 from '../images/portfolio/2pccargame(COMPRESS).gif';
import portfolioGif3 from '../images/portfolio/iotaapreview(COMPRESS).gif';
import portfolioGif4 from '../images/portfolio/unitygamepreview(COMPRESS).gif';
import portfolioGif5 from '../images/portfolio/mazerunnerpreview(COMPRESS).gif';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Hi, I'm Natch.",
  description: 'A site built by Natch.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'home',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
// Function to get the appropriate greeting based on the time of day
const getGreeting = () => {
  const hours = new Date().getHours();
  if (hours < 12) {
    return 'Good morning';
  } else if (hours < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
  // if (hours < 12) {
  //   return 'Selamat pagi';
  // } else if (hours < 18) {
  //   return 'Selamat siang';
  // } else {
  //   return 'Selamat malam';
  // }
};
export const heroData: Hero = {
  imageSrc: heroImage,
  secondaryName: `${getGreeting()}, I'm Natch!`,
  name: `Let's Explore my Software Engineering Journey.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Based in Victoria/Melbourne, I am currently pursuing a
        <strong className="text-stone-100"> Bachelor's of Software Engineering (Honours) </strong>
        at RMIT University. My studies encompass a wide range of software engineering disciplines including{' '}
        <strong className="text-stone-100">
          modern software requirements, development, testing, and design techniques.
        </strong>{' '}
        I apply these skills across a diverse range of projects including mobile, web, and enterprise applications.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me playing sports with some mates, experimenting with some{' '}
        <strong className="text-stone-100">game development</strong> projects, or exploring beautiful{' '}
        <strong className="text-stone-100">hiking trails</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: `assets/resume.pdf`,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
    {
      href: `#${SectionId.Portfolio}`,
      text: 'My Portfolio',
      primary: false,
    }
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  profileImageLink: 'https://www.linkedin.com/in/natchanonlaoharawee',
  description: (
    <>
      <p>
        Hey! I'm <b>Natch</b> and I'm a proactive and dedicated undergraduate student in Computer Science with strong
        programming skills and hands-on experience in various environments. I seek to leverage my problem-solving
        abilities and technical knowledge in a dynamic software engineering role.
      </p>
      <p>I am well-versed in the following skills:</p>
      <ul>
        <li>
          <b>Programming Languages:</b> Python, Java, C++, C, Assembly
        </li>
        <li>
          <b>Scripting:</b> Shell scripting
        </li>
        <li>
          <b>Operating Systems:</b> Linux (Ubuntu), Kali Linux
        </li>
        <li>
          <b>Tools & Technologies:</b> Git, Docker, SQL
        </li>
        <li>
          <b>Networking:</b> Basic understanding of TCP/IP, UDP, DNS, DHCP
        </li>
        <li>
          <b>Databases:</b> MySQL, PostgreSQL
        </li>
        <li>…Among many others!</li>
      </ul>
      <p>
        I have had experience in various personal projects, that are outlined in my CV; but here are a few of my
        proudest projects:
      </p>
      <ul>
        <li>
          <b>VX User research with Tourism North East (TNE)</b>
        </li>
        <li>
          <b>Mock full-stack e-commerce application for fresh produce</b>
        </li>
        <li>
          <b>A website that displays climate change data sourced from the Australian Bureau of Meteorology</b>
        </li>
        <li>
          <b>Volunteering in the development of the revised IOTAA 2023 website</b>.
        </li>
      </ul>
      <p>
        I've developed various fundamental skills for programming from my lifelong journey in education. I’ve always
        loved solving problems and developing solutions that feel satisfying.
      </p>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Melbourne, Victoria', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Thai | Australian | New Zealander', Icon: FlagIcon},
    {label: 'Interests', text: 'Fitness, Tech, Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'Royal Melbourne Institute of Technology (RMIT)', Icon: AcademicCapIcon},
    // {label: 'Employment', text: '', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Thai',
        level: 4,
      },
      // {
      //   name: 'Japanese',
      //   level: 3,
      // },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'REST APIs',
        level: 7,
      },
      {
        name: 'MySQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'C#',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Personal Website Landing Page',
    description: (
      <>
        <p>Personal website that displays my coding journey and my proudest projects.</p>
        <p>Learned the following:</p>
        <ul className="list-disc list-inside">
          <li>Typescript</li>
          <li>TailwindCSS</li>
        </ul>
      </>
    ),
    url: '',
    image: portfolioImage1,
  },
  {
    title: 'Fullstack E-commerce App',
    description: (
      <>
        <p>
          Mock fullstack e-commerce application that taught me the core of frontend and backend of websites using
          React.js for the frontend and Express.js for the backend.
        </p>
        <p>Learned the following:</p>
        <ul className="list-disc list-inside">
          <li>CSS Animations</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>HTML Forms</li>
        </ul>
      </>
    ),
    url: '',
    image: portfolioGif1,
  },
  {
    title: 'Unity Game Project',
    description: (
      <>
        <p>
          Passion project that allows the player to move in a 3D environment and pick up various items and weapons.
          The aim was to enhance my skills in Unity, game development and C#. 
        </p>
        <p>
          In this game the player can explore the forest
          to attain new items by moving through certain dangers until defeating the lord of the forest at its centre.
        </p>
        <p>Learned the following:</p>
        <ul className="list-disc list-inside">
          <li>C#</li>
          <li>Game Development</li>
          <li>Unity</li>
        </ul>
      </>
    ),
    url: '',
    image: portfolioGif4,
  },
  {
    title: 'IoTAA Front-end UI/UX Development',
    description: (
      <>
        <p>
          IoTAA is a leading industry body partnered with brands such as Bosch, GHD, Optus, CSIRO, KPMG, and many more to
          guide the development of efficient and ethical practices in Australia's growing IoT industry.
        </p>
        <p>
          I was fortunate to be tasked with constructing the front-end of the site to help grow
          IoTAA membership. 
        </p>
        <p>Learned the following:</p>
        <ul className="list-disc list-inside">
          <li>HTML5</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
        </ul>
      </>
    ),
    url: '',
    image: portfolioGif3,
  },
  {
    title: 'Tourism North East Mobile App UI/UX Research',
    description: (
      <>
        <p>
          Sponsored by Victoria's SummerTech Live studentship program, I enjoyed a 3-month tenure working with the leading regional tourism board
          for Victoria's High Country, Tourism North East. 
        </p>
        <p>
          I was tasked with analysing the needs of tourists and visitors of the High Country to improve engagement with the app and learnt a great deal about
          project management and real interactions between software and end-users. 
        </p>
        <p>Learned the following:</p>
        <ul className="list-disc list-inside">
          <li>Software Requirements Analysis</li>
          <li>Python</li>
          <li>Project Management Tools, Slack, Trello, etc</li>
        </ul>
      </>
    ),
    url: '',
    image: portfolioImage2,
  },
  {
    title: 'C++/Assembly Maze Generator',
    description: (
      <>
        <p>
          Working alongside 4 other teammates at RMIT, we created a maze generation algorithm for a sandbox game
          called Minecraft. 
        </p>
        <p>
          In this 3D sandbox world, we had to use an API (MCPP) with C++ and LC3 Assembly language to 
          build the blocks around the world, or create the foundations for the maze within the world.
        </p>
        <p>Learned the following:</p>
        <ul className="list-disc list-inside">
          <li>Assembly Language, x86, LC3, etc</li>
          <li>C++</li>
          <li>Linux CLI</li>
          <li>WSL</li>
        </ul>
      </>
    ),
    url: '',
    image: portfolioGif5,
  },
  {
    title: 'CS50 Scratch Co-op Couch Game',
    description: (
      <>
        <p>
          For the first week of the CS50 course in 2022, students were tasked with getting their feet with 
          programming in Scratch. 
        </p>
        <p>
          At this time, I had previous programming experience and was determined to make an interesting game that I've always
          dreamt about making, so I used this as an excuse to flex my creativity!
        </p>
        <p>Learned the following:</p>
        <ul className="list-disc list-inside">
          <li>Game Development</li>
          <li>Game Design</li>
          <li>Programming Fundamentals</li>
        </ul>
      </>
    ),
    url: '',
    image: portfolioGif2,
  },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: portfolioImage,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: portfolioGif2,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: portfolioGif3,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Feb 2023 - Nov 2026',
    location: 'Melbourne - RMIT University',
    title: 'Bachelor of Software Engineering (Honours)',
    content: (
      <p>
        Essential skills and knowledge for software development and software architecture, combining computer science
        and math foundations with in-depth studies in software design, methodologies, and testing frameworks.
      </p>
    ),
  },
  {
    date: 'Nov 2022 - Dec 2022',
    location: 'Remote - Harvard University',
    title: 'CS50: Introduction to Computer Science',
    content: (
      <p>
        Taught me fundamental programming concepts, algorithms, data structures, and problem-solving in computer
        science.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Mar 2023 - Aug 2023',
    location: 'Remote - IoT Alliance Australia',
    title: 'Frontend Developer',
    content: <p>Aided development of content in the 2023 overhaul of the front-end of the IoTAA website.</p>,
  },
  {
    date: 'Dec 2023 - Feb 2024',
    location: 'Remote / Beechworth - Tourism North East',
    title: 'UI/UX Research',
    content: (
      <p>
        Selected into a 3-month paid Summer internship program (SummerTech LIVE) and conducted several interviews with
        users of Tourism North East's and Australian Tourism Data Warehouse (ATDW) 'Victoria's High Country' app.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Dean Cleave-Smith',
      title: 'Head of Visitor Experience at Tourism North East',
      text: 'Having Natchanon was a remarkable experience. His expertise in programming, combined with an innovative approach to problem-solving, and consistently resulted in excellent products. He demonstrated exceptional discipline to stay on task and deliver quality project deliverables.',
      image: avatar1,
    },
    {
      name: 'Navin Karunatilaka',
      title: 'Member Services Manager at IoT Alliance Australia',
      text: 'I highly recommend Natchanon for their outstanding technical abilities and dedication to excellence. He played a pivotal role in the overhaul of the frontend of our website, showcasing not only his high attention to detail required for analysis but also his ability to work collaboratively in a team environment. His contributions significantly enhanced the success of the look of our overall website.',
      image: avatar2,
    },
    {
      name: 'Owen Harris',
      title: 'RMIT Teammate',
      text: 'Natch is exceptional with a keen eye for detail and a passion for creating efficient solutions. His ability to understand and implement complex requirements was invaluable to our team during many of the projects we worked together on.',
      image: avatar3,
    },
    {
      name: 'Falah Rasyidi',
      title: 'RMIT Teammate',
      text: 'Natch has an unwavering dedication to excellence. He strives for the highest standards in everything he does and inspire those around him to do the same. His commitment to continuous improvement and learning is truly commendable, and it is reflected in the quality of his work and his professional growth.',
      image: avatar4,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'The following are the best ways to reach out to me:',
  items: [
    {
      type: ContactType.Email,
      text: 'n.laoharawee@gmail.com',
      href: 'mailto:n.laoharawee@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Melbourne, Australia',
      href: 'https://www.google.ca/maps/place/Melbourne+VIC/@-37.9707261,144.3937378,9z/data=!3m1!4b1!4m6!3m5!1s0x6ad646b5d2ba4df7:0x4045675218ccd90!8m2!3d-37.8136276!4d144.9630576!16zL20vMGNoZ3pt?entry=ttu',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.LinkedIn,
      text: 'natchanonlaoharawee',
      href: 'https://www.linkedin.com/in/natchanonlaoharawee',
    },
    // {
    //   type: ContactType.Twitter,
    //   text: 'NatchLaoharawee',
    //   href: 'https://x.com/NatchLaoharawee',
    // },
    {
      type: ContactType.Github,
      text: 'NatchanonLaoharawee',
      href: 'https://github.com/NatchanonLaoharawee',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/NatchanonLaoharawee'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/natchanonlaoharawee'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/NatchLaoharawee'},
];
