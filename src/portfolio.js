
import emoji from "react-easy-emoji";

const greeting = {
  /* Summary And Greeting Section */
  title: "Sun Kei Liu",
  subTitle: emoji("Aspiring front-end developer 🚀 that is driven by the infinite possibilities of technological innovation and constantly seeking improvements. Building practical applications utilizing technologies such as React, Vue, and many more! Looking for a front-end software development role to apply my skills of problem solving, visual creativity, and communication."),
  resumeLink: "https://docs.google.com/document/d/1f3tKXXA2U23-vcWPqMnsQbi_F24_8xm-izKiCIwwC3Q/"
};

// Social Media Link

const socialMediaLinks = {

  github: "https://github.com/sunkeiliu",
  linkedin: "https://www.linkedin.com/in/sunkei/",
  gmail: "sunkeiliu@gmail.com",
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Creative full stack engineer who loves building and is driven by innovation",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"),
    emoji("⚡ Build strong Back end foundations with solid and scalable infrastructures on AWS"),
    emoji("⚡ Join small start ups and businesses that need help pushing their product to the next level"),
    emoji("⚡ A strong desire to work with companies that emphasize on helping marginalized people, solving problems, or giving back to the community")
  ],

/* Make Sure You include correct Font Awesome Classname to view icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress-simple"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
    // {
    //   skillName: "BigCommerce",
    //   fontAwesomeClassname: "fa-solid fa-bold"
    // }
  ]
};

// top 3 work experiences

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Medical Scribe | Orthopedics & Cardiology",  
      company: "Insall Scott Kelly Institute",
      companylogo: require("./assets/images/isklogo.png"),
      date: "November 2019 - May 2020",
      desc: "Build an app from a Google Sheet in five minutes, for free. Glide turns spreadsheets into beautiful, easy-to-use apps.",
      descBullets: [
        "Gathered critical information of 400 patients regarding the patient's visit, charts, and history during the examination",
        "Reduced workload of assigned practitioner to provide the highest excellence and efficiency of care",
        "Compiled accurate and valuable documentation to ensure a safe visit for 30-40 patients per day"
      ]
    },
    {
      role: "Performance Improvement Intern",  
      company: "Medisys Health Network",
      companylogo: require("./assets/images/medisyslogo.png"),
      date: "June 2019 – August 2019",
      desc: "A platform that helps highschool students earn micro-scholarships towards their college education.",
      descBullets: [
        "Created and presented initiatives to board of directors to improve the quality of hospital care",
        "Handled and transferred the migration of over 700 employees into an updated database",
        "Updated current database with complaint and grievance details of patients for future reports"
      ]
    },
    {
      role: "Employee Training & Quality Development Intern",   
      company: "Patient Access Services | Northwell Health",
      companylogo: require("./assets/images/northwell.png"),
      date: "June 2018 – August 2018",
      desc: "A community-backed platform for automotive commerce.",
      descBullets: [
        "Pioneered and launched instructional voice over videos to help agents across 6 departments to improve efficiency and quality during a call",
        "Formulated a new metric standardizing measure of productivity of agents answering calls",
        "Created a macro to automate workflow between Microsoft Excel workbooks",
        "Collaborated with lead analyst in creating daily reports with the use of Tableau, Python, and SQL",
        "Assisted in the duties of onboarding the incoming group of 8-12 new employees"
      ]
    },
    // {
    //   role: "Security Officer & Engineer",  
    //   company: "Triangle / Fabrix health ",
    //   companylogo: require("./assets/images/fabrix_logo.png"),
    //   date: "February 2018 – May 2018",
    //   desc: "A Patient-Physician Communication solution to improve bottlenecks in patient appointment and presription pickup flow.",
    //   descBullets: [
    //     "Contracted to bring the application to meet HIPAA Compliance to be used in UCSF clinical trials which include architecting infrastructure, policies and training.",
    //     "Help develop the application by adding features, writing tests, and delegated all AWS related tasks. Developed on a MERN Stack hosted on AWS."
    //   ]
    // },
    // {
    //   role: "Full Stack Engineer",  
    //   company: "Sitka",
    //   companylogo: require("./assets/images/sitka_logo.png"),
    //   date: "August 2016 – January 2018",
    //   desc: "A HIPAA compliant telecommunication software for patients and physicians to review MRI scans from the comfort of their",
    //   descBullets: [
    //     "Designed and created an MVP telecommunication medical reviewing program to enable physicians to review their patients MRI scans in the initial phase.",
    //     "Developed front-end and back-end with MERN Stack - deployed with AWS."
    //   ]
    // },
    // {
    //   role: "Developer & Designer",  
    //   company: "FreeLance",
    //   companylogo: require("./assets/images/upwork_logo.png"),
    //   date: "February 2015 – Present",
    //   desc: "Work with multiple small businesses as a Freelancer.",
    //   descBullets: [
    //     "Maintain, refactor, and spin up websites for small businesses to improve the local economy.",
    //     "Worked with: Retromodern USA , Cool Lite, Tiffany’s Nail Salon, Live Love Santa Cruz, Moo Moo Milk Tea, Drop-In"
    //   ]
    // },
    // {
    //   role: "Health, Safety and Tech Coordinator",  
    //   company: "iD Tech Camps @ Stanford University",
    //   companylogo: require("./assets/images/id_tech.jpg"),
    //   date: "June 2016 – August 2016",
    //   desc: "A summer computer camp specializing in providing computer technology education to children ages 7 through 19",
    //   descBullets: [
    //     "Manage and administer all medications to the campers.",
    //     "Teach and aid instructors/campers in C++, Java, Python, Photoshop, Illustrator, and web development."
    //   ]
    // },
    // {
    //   role: "Medical Assistant",  
    //   company: "Los Gatos Eye Care",
    //   companylogo: require("./assets/images/lgec.png"),
    //   date: "November 2013 – June 2016",
    //   desc: "An Optometrist office in Los Gatos providing eye care.",
    //   descBullets: [
    //     "Perform peripheral tests, OCT scans, AR screen, visual acuities, retinal photos, and review of medical health on patients.",
    //     "Scribing for doctors during examinations."
    //   ]
    // }
  ]
};

/* Open Source Section to View Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sunkeiliu",
  showGithubProfile :"true" 
};

// Creations Section Include Certification Talks and More

const creationSection = {

  title: emoji("Projects"),
  subtitle: "A few projects I've built utilizing various technologies.",

  achivementsCards: [
    {
      title: "Personal Page",
      subtitle: "A page linking my resume, Github page, LinkedIn page, and email address",
      image: require("./assets/images/profilelogo.png"),
      footerLink: [
        { name: "Code", url: "https://github.com/sunkeiliu/sunkeiliu.github.io" },
        { name: "Website", url: "https://sunkeiliu.com/" }
      ]
    },
    {
      title: "Philadelphia Brewery Finder",
      subtitle: "Application to find breweries in the Philadelphia area utilizing Vue.js and JavaScript",
      image: require("./assets/images/breweryfinder.jpg"),
      footerLink: [
        { name: "Code", url: "https://github.com/sunkeiliu/philly-brewery-finder" }
      ]
    },
    {
      title: "Vending Machine",
      subtitle: "Command line vending machine application allowing customers to perform every process of a purchase.",
      image: require("./assets/images/vendingmachine.jpg"),
      footerLink: [
        // { name: "Instagram", url: "https://www.instagram.com/bryhasamiata/" },
        { name: "Code", url: "https://github.com/sunkeiliu/vending-machine" },
      ]
    },
    // {
    //   title: "Mustang Restoration",
    //   subtitle: "A car restoration that I restored myself - paint work, engine work, upholstery and more! ",
    //   image: require("./assets/images/mustang.png"),
    //   footerLink: [
    //     { name: "Instagram", url: "https://www.instagram.com/bryhasamiata/" },
    //     { name: "Wheelwell Car Page", url: "https://wheelwell.com/bryhasawheelwell/2syc/1966-ford-mustang" },
    //   ]
    // },
    // {
    //   title: "Doc Review",
    //   subtitle: "Web App that helps physicians screen patients and obtain chief complaints.",
    //   image: require("./assets/images/doc-review.png"),
    //   footerLink: [
    //     { name: "WireFrame", url: "https://xd.adobe.com/view/82a4ddcd-436c-4a9e-82df-2b168435e680/" }
    //   ]
    // },
    // {
    //   title: "Retromodern USA Website",
    //   subtitle: "A redesigned website for a small bespoke company that creates handcrafted car parts.",
    //   image: require("./assets/images/retromodern.png"),
    //   footerLink: [
    //     { name: "Website", url: "https://retromodernusa.com/" },
    //   ]
    // },
    // {
    //   title: "DropIn",
    //   subtitle: "A subscription - credit based multi gym Web App",
    //   image: require("./assets/images/dropin.png"),
    //   footerLink: [
    //     { name: "WireFrame", url: "https://xd.adobe.com/view/536f89ce-2a71-4019-981e-604cdc61cf27/screen/7b9fe10b-1751-44d9-8a7c-008b6a223e59" }]
    // },
    // {
    //   title: "Car Maintenance Model",
    //   subtitle: "An interactive data visualization for when car parts should be maintained.",
    //   image: require("./assets/images/car-model.png"),
    //   footerLink: [
    //     { name: "Code", url: "https://github.com/bryhasagithub/CarMaintenanceModel" },
    //     { name: "Website", url: "https://bryhasagithub.github.io/CarMaintenanceModel/" },
    //   ]
    // },
    // {
    //   title: "Sectional Couch",
    //   subtitle: "My partner and I made a couch together! We did everything from sketches, CAD, woodworking to even upholstery.",
    //   image: require("./assets/images/couch-cad.png"),
    //   footerLink: [
    //     { name: "Photos Album", url: "https://photos.app.goo.gl/2fAre5gjGK35rznq6" },
    //   ]
    // },
    // {
    //   title: "3D Printed Retro Gauge Cluster",
    //   subtitle: "A 3D printable Gauge Cluster trim piece I designed, printed, and installed for miatas.",
    //   image: require("./assets/images/gauge-cluster.png"),
    //   footerLink: [
    //     { name: "Thingiverse", url: "https://www.thingiverse.com/thing:4039621" },
    //     { name: "Github Repo", url: "https://github.com/bryhasagithub/3D-printing/tree/master/miata-gauge-cluster" },
    //   ]
    // }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others",

  blogs: [
    {
      url: "https://www.raise.me/blog/team/celebrating-asian-american-pacific-islander-heritage-month/",
      title: "Celebrating Asian American and Pacific Islander Heritage Month",
      description: "RaiseMe is taking a step back during the month of May to explore and celebrate the diverse experiences amongst Asian American and Pacific Islanders."
    },
    {
      url: "https://wheelwell.com/posts/8kp7/the-lemony-m42-swapped-1976-bmw-2002",
      title: "The Lemony M42 swapped 1976 BMW 2002",
      description: "The M42 swapped e10 that you see here is my previously owned Frankenstein of a car that I picked up from South SF out the of pure desire for owning a 2002 again..."
    },
    {
      url: "https://wheelwell.com/posts/8vof/3d-printed-retro-gauge-cluster",
      title: "Designing a 3D Printed Retro Gauge Cluster for a Miata",
      description: "I know I'm not the only one who's wanted the KG Works cluster but was sad that it's no longer in production. Today, we walk through how I made my own!"
    },
    {
      url: "https://wheelwell.com/posts/8t92/tutorial-how-to-make-a-leather-pull-strap",
      title: "Tutorial: How to make a leather pull strap",
      description: "A summarized breakdown with pictures and list of materials of how to make a leather door pull strap."
    }
  ]
  
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Interested in building something with me? Send me a message!",
  email_address: "sunkeiliu@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, workExperiences, openSource, creationSection, blogSection, contactInfo };
