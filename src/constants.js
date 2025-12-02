// Frontend Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import primeFaces from './assets/tech_logo/primefaces.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import mdbLogo from './assets/tech_logo/mdb.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

//Backend Section Logo's
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import oracleLogo from './assets/tech_logo/oracle.png';

//Languages Section Logo's
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import junitLogo from './assets/tech_logo/junit.png';
import jasmineLogo from './assets/tech_logo/jasmine.png';
import perlLogo from './assets/tech_logo/perl.png';

//Tools Section Logo's
import dockerLogo from './assets/tech_logo/docker.png';
import kafkaLogo from './assets/tech_logo/apachekafka.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import gitLabLogo from './assets/tech_logo/gitlab.png';
import cloudflareLogo from './assets/tech_logo/cloudflare.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import jmeterLogo from './assets/tech_logo/jmeter.png';
import karmaLogo from './assets/tech_logo/karma.png';
import dbeaverLogo from './assets/tech_logo/dbeaver.png';
import jenkinLogo from './assets/tech_logo/jenkins.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import capgeminiLogo from './assets/company_logo/capgemini.png';
import dassaultLogo from './assets/company_logo/dassault_logo.png';
import tcsLogo from './assets/company_logo/tcs_logo.png';

// Education Section Logo's
import jmitLogo from './assets/education_logo/jmit_logo.png';
import davLogo from './assets/education_logo/dav_logo.png';

// Project Section Logo's


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'PrimeFaces', logo: primeFaces },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'MDBootstrap', logo: mdbLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Oracle', logo: oracleLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'JUnit', logo: junitLogo },
      { name: 'Jasmine', logo: jasmineLogo },
      { name: 'Perl', logo: perlLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Docker', logo: dockerLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'GitLab', logo: gitLabLogo },
      { name: 'Kafka', logo: kafkaLogo },
      { name: 'Cloudflare', logo: cloudflareLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Jenkins', logo: jenkinLogo },
      { name: 'Karma', logo: karmaLogo },
      { name: 'DBeaver', logo: dbeaverLogo },
      { name: 'JMeter', logo: jmeterLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: capgeminiLogo,
      role: "Senior Professional I",
      company: "Capgemini Engineering",
      date: "November 2021 - Present",
      desc: [
            "Migrated legacy Java JAR projects to Spring Boot, improving scalability and enabling smooth cloud deployment.",
            "Integrated Kafka for efficient inter-service communication, enhancing reliability and performance.",
            "Developed the Device Security Manager to manage equipment groups, users, and services.",
            "Built a Netconf interface using OpenDaylight to enable communication between network devices.",
            "Designed the Network Health Monitor to track NMS server status and send automated email alerts."
        ],
      skills: [
        "Java 8",
        "Spring Boot",
        "JavaScript",
        "React JS",
        "Python",
        "Docker",
        "Kafka",
        "JSF",
        "PrimeFaces",
        "Oracle",
        "Mongodb",
      ],
    },
    {
      id: 1,
      img: dassaultLogo,
      role: "Senior Software Developer",
      company: "Dassault Systèmes",
      date: "April 2019 - November 2021",
      desc: [
        "Developed versatile UI components for ENOVIA applications, supporting both onpremise and cloud deployments.", 
        "Implemented comprehensive unit tests using JUnit, Karma, Jasmine, and Cheetah to ensure code quality and reliability.", 
        "Designed JMeter scripts to validate performance and scalability of document management features. Built dynamic rendition templates to generate structured cover pages (Body, Appendix) for controlled document workflows.",
        "Contributed to generic document modules integrated across multiple Dassault Systèmes products, enhancing stability and user experience."],
      skills: [
        "Java 8",
        "Spring Boot",
        "JSF",
        "PrimeFaces",
        "JavaScript",
        "Docker",
        "JUnit",
        "Karma",
        "Jasmine",
        "Cheetah",
        "JMeter"
      ],
    },
    {
      id: 2,
      img: tcsLogo,
      role: "Software Developer",
      company: "Tata Consultancy Services",
      date: "August 2017 - April 2019",
      desc: [
        "Developed and maintained core banking modules for loan management systems.",
        "Implemented generic Metawriters, Metareaders, and Queue mechanisms to improve performance and reliability.",
        "Created automation scripts in Python for error detection and process optimization.",
        "Designed database mapping solutions to align message fields with target schemas, ensuring accurate data flow."],
      skills: [
        "Java",
        "Spring Boot",
        "JavaScript",
        "SQL",
        "Python",
        "Perl",
        "DB2",
        "Sybase"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: jmitLogo,
      school: "JMIT Radaur, Haryana (Affiliated to Kurukshetra University)",
      date: "August 2013 - June 2017",
      grade: "75.2%",
      desc: [
        "Completed Bachelor's degree in Computer Science & Engineering (B.Tech) from JMIT, Radaur.",
        "Studied a wide range of core computer science subjects, including Data Structures & Algorithms, Web Development, and Database Management Systems.",
        "Gained practical insights into software development through hands-on coding, labs, and technical coursework.",
        "Worked on academic projects that applied theoretical concepts to real-world problem-solving scenarios.",
        "Developed a strong foundation in computing principles, programming, and software engineering practices."],
      degree: "Bachelor of Technology - B.Tech (Computer Science & Engineering)",
    },
    {
      id: 1,
      img: davLogo,
      school: "D.A.V Public School, Ambala Cantt",
      date: "Apr 2012 - March 2013",
      grade: "86%",
      desc: ["Completed Class 12 education from D.A.V Public School, Ambala Cantt, under the CBSE board.",
        "Studied the Science stream with core subjects: Physics, Chemistry, and Mathematics (PCM).",
        "Built a strong academic foundation in analytical thinking and problem-solving through PCM coursework"],
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: davLogo,
      school: "D.A.V Public School, Ambala Cantt",
      date: "Apr 2010 - March 2011",
      grade: "7.4 CGPA",
      desc: ["Completed Class 10 education from D.A.V Public School, Ambala Cantt, under the CBSE board.",
        "Studied core subjects including Science and Mathematics.",
        "Developed a strong foundational understanding of scientific concepts and numerical problem-solving."],
      degree: "CBSE(X) - Science and Math",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Add Title",
      description:
        "Add Description",
      image: "",
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/",
      webapp: "#",
    }
  ];  