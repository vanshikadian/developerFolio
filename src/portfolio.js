// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen

export const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

export const illustration = {
  animated: true // Set to false to use static SVG
};

export const greeting = {
  username: "Vanshika Kadian",
  title: "Hi! I'm Vanshika",
  subTitle: emoji(
    "CS major @ Michigan State University | Software Developer| Data Science | National-level swimmer"
  ),
  resumeLink: "https://drive.google.com/drive/u/1/recent",
  displayGreeting: true
};

// Social Media Links

export const socialMediaLinks = {
  github: "https://github.com/vanshikadian",
  linkedin: "https://www.linkedin.com/in/vanshika-kadian/",
  gmail: "kadianva@msu.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};


// Skills Section
export const skillsSection = {
  title: "What I Do & Love",
  subTitle: "Full-Stack Development · Data Science · Product Management",
  skills: [
    emoji("⚡ Develop interactive UIs with React, Next.js & Tailwind CSS"),
    emoji("⚡ Build scalable backends using Node.js, Express, Django & Flask"),
    emoji("⚡ Analyze & model data with Python, SQL, Pandas & Scikit-learn"),
    emoji("⚡ Lead projects end-to-end with product management best practices"),
    emoji("⚡ Mentor and teach as an Undergraduate Learning Assistant & RA")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" }
  ],
  display: true
};

// Education Section

export const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Michigan State University",
      logo: require("./assets/images/msulogo.png"),
      subHeader: "Bachelors of Science in Computer Science (GPA: 3.8/4.0)",
      duration: "August 2022 - May 2026",
      desc: "Minoring in Cognitive Science. Dean's List for 6 consecutive semesters. Member of the MSU Honors College.",
      descBullets: [
        "Resident Assistant at Owen Hall under RHA.",
        "Member of SWE and WIE.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

export const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning & Data Science", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Product Management",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

export const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data science/ ML Intern",
      company: "Bosch Global Software Technologies",
      companylogo: require("./assets/images/bgswlogo.png"),
      date: "June 2024 – August 2024",
      descBullets: [
        "Collaborated with cross-functional teams to develop and optimize software algorithms for real-time object detection using CNNs, improving system performance by 25% and reducing processing time by 30%.",
        "Applied C++ for performance-critical aspects, including debugging and resolving performance issues in Advanced Emergency Braking Systems, increasing system accuracy by 20% and minimizing false positives by 15% through ensemble learning techniques.",
      ]
    },
    {
      role: "Research Assistant – U.S.-China Strategic Competition",
      company: "JMC MSU",
      companylogo: require("./assets/images/jmclogo.png"),
      date: "May 2025 – Present",
      descBullets: [
        "Standardized and integrated economic, military, and diplomatic indicators for 190+ countries (2013–2020) by building and maintaining multi-source international-relations datasets.",
        "Engineered scalable Python/Excel pipelines to impute and transform unstructured PDF and Excel data for dataset preparation.",
        "Designed data taxonomies with faculty and ran ML/NLP analyses to generate insights for high-impact global security publications."
      ]
    },
    {
      role: "App Developer",
      company: "MSU New Student Orientation",
      companylogo: require("./assets/images/msunso.png"),
      date: "May 2024 – Sep 2024",
      descBullets: [
        "Developed the MSU NSO app using JavaScript, React, React Native, and Firebase, enhancing the onboarding experience for over 20,000 new students.",
        "Assisted in planning key student events, conducted interviews, and trained over 100 Spartan Leaders, contributing to a 25% increase in event participation and ensuring a successful NSO program.",
        "Implemented user-focused features while adhering to React best practices, enhancing both iOS and Android user experiences through Xcode and Android Studio environments."
      ]
    },
  ]
};

// Some big projects you have worked on

export const bigProjects = {
  display: true,
  projects: [
    {
      projectName: "Vehicle Classification Model",
      projectDesc: "CNN & ResNet50 on Stanford Cars dataset; achieved 84% test accuracy; mitigated class bias.",
      footerLink: [{ name: "Repo", url: "https://github.com/rivmeck/CSE-404-Group-Project" }]
    },
    {
      projectName: "Resume Screening Web App",
      projectDesc: "Flask & Chart.js tool to automate resume evaluation and visualize candidate metrics.",
      footerLink: [{ name: "GitHub", url: "https://github.com/vanshikadian/resume-screener" }]
    },
    {
      projectName: "Smart Wardrobe Fashion Tech",
      projectDesc: "Flutter app for personalized outfit suggestions using weather & style analytics.",
      footerLink: [{ name: "Design Doc", url: "https://link.to/fashion-tech" }]
    }
  ]
};
// Include certificates, talks etc

export const funFactsSection = {
  title: emoji("Fun Facts"),
  display: true,
  facts: [
    emoji("I can solve a Rubik's Cube in under 2 minutes!"),
    emoji("Brookie are my guilty pleasure during late-night coding sessions."),
    emoji("I've swum 30 laps straight in a 50m pool without stopping."),
    emoji("I once binge-watched an entire season of 'Black Mirror' in a single night."),
    emoji("I doodle tech-themed memes when brainstorming new app ideas.")
  ]
};

// Resume & Contact
export const resumeSection = { display: true };
export const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to opportunities in SWE, Data Science & Product Management!",
  email_address: "kadianva@msu.edu",
  display: true
};
export const twitterDetails = { display: false };
export const isHireable = true;


export const openSource = {
  display: false
};

export const publications = {
  display: false // Set true to display publications section, defaults to false
};
export const achievementSection = {
  display: false // Set true to display publications section, defaults to false
};
export const blogSection = {
  display: false // Set true to display publications section, defaults to false
};
export const talkSection = {
  display: false // Set true to display publications section, defaults to false
};

export const podcastSection = {
  display: false // Set true to display publications section, defaults to false
};

export const twitterSection = {
  display: false // Set true to display publications section, defaults to false
};