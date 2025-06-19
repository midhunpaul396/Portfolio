import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    bootstrap,
    laravel,
    php,
    html,
    excel,
    python,
    css,
    vosyn,
    reactjs,
    tailwind,
    qburst,
    git,
    figma,
    meta,
    spotifyRec,
    jobit,
    tripguide,
    threejs,
    powerBI,
    sparks,
    pyspark,
    spotify,
    adastria
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [

    {
      title: "Data Engineer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "UI Designer",
      icon: creator,
    },
    
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Power BI",
      icon: powerBI,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "css",
      icon: css,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "HTML 5",
      icon: html,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "Vosyn",
      icon: vosyn,
      iconBg: "#383E56",
      date: "October 2024 - Present",
      points: [
        "Developing advanced AI voice synthesis solutions leveraging cutting-edge technologies such as Python and Django.",
        
      ],
    },
        {
      title: "Data Engineer",
      company_name: "QBurst",
      icon: qburst,
      iconBg: "#383E56",
      date: "August 2021 - December 2022",
      points: [
        "Designed and implemented scalable ETL pipelines and data processing workflows using tools such as HiveQL and Python.",
        "Built an invoice spend tracking system within the Operational Data Layer, enabling real-time deal visibility through Hive-based data models.",
        "Developed and optimized interactive Tableau dashboards to visualize partner-level and buyer-level spending patterns, focusing on top spenders and enrollment trends.",
        "Automated error classification and volume forecasting reports using advanced Excel, significantly improving break management efficiency.",
        "Collaborated with cross-functional teams to deliver ad-hoc data reports, ensure testing accuracy, and provide insights for strategic business decisions."
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "The Sparks Foundation",
      icon: sparks,
      iconBg: "#383E56",
      date: "Nov 2020 - Dec 2020",
      points: [
        "Developed dynamic web applications using modern web technologies including React, JavaScript, HTML, CSS, and Bootstrap.",
        "Collaborated in an Agile environment to design responsive, user-friendly interfaces, and optimized performance through React hooks, functional components, and state management (Redux).",
        " Integrated RESTful APIs for seamless data handling and implemented Git for version control and collaborative development.",
      ],
    },
  ];
  
  const educations = [
    {
      course:
        "Big Data Analytics",
      college: "Georgian College",
      city: "Barrie",
      grade: "Deans List",
      image: "https://equitek.ca/wp-content/uploads/2017/04/georgian-logo.jpg",
    },
    {
      course:
        "Business Analytics",
      college: "Seneca College",
      city: "Markham",
      grade: "Presidents Honor List",
      image: "https://mrbasile.com/wp-content/uploads/2017/02/seneca-college-logo.png",
    },
    {
      course:
        "Bachelor of Information Technology",
      college: "Cochin Univeristy of Science and Technology",
      city: "India",
      grade: "First Class Honour",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOUlm2ox2FnmkywXUp_8V63Q4hK7164ZY-PDsDOaM&s",
    },
  ];
  
  const projects = [
    {
      name: "Savi Visibility",
      description:
        "Savi Visibility, a real-time supply chain platform, integrating data from diverse sources such as sensors, GPS, and EDI into a unified backend system. Designed and maintained ETL pipelines using Python and SQL to transform and load logistics data into downstream reporting and analytics tools. Developed real-time data processing solutions using Spark Streaming, Kafka, and Cassandra to support critical logistics KPIs, including shipment ETA, average transit time, and percentage of late shipments.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "jQuery",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: adastria,
      source_code_link: "",
    },
    {
      name: "MidhunInventory",
      description:
        "Built an Inventory Management System using the MERN stack, featuring real-time inventory tracking and CRUD operations. Integrated MongoDB Atlas for data storage, developed RESTful APIs with Express.js, and created a responsive front-end with React.js. Used Node.js for efficient backend operations. ",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "yellow-text-gradient",
        },
      ],
      image: javascript, 
      source_code_link: "https://mid-invent-app.onrender.com/",
    },
    {
      name: "ThreeJS Portfolio",
      description:
        "Designed and developed a 3D portfolio website using React.js and Three.js",
      tags: [
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
        {
          name: "Three.js",
          color: "yellow-text-gradient",
        },
      ],
      image: threejs, 
      source_code_link: "https://github.com/midhunpaul396/Portfolio",
    },
    {
      name: "Parallax Scroll Website",
      description:
        "Home Depot Themed Parallax Scroll Website to showcase my projects",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
      ],
      image: javascript, 
      source_code_link: "https://www.home-depot-supply-chain.vercel.app",
    },
    {
      name: "VisitorClassifier",
      description:
        "Developed a React + Flask web application that enables users to input a URL, scrape its content, and dynamically generate questions using OpenAI's GPT API.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "yellow-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "yellow-text-gradient",
        },
      ],
      image: reactjs, 
      source_code_link: "https://github.com/midhunpaul396/VisitorClassifierFullstack",
    },
    {
      name: "Spotify Data Analysis",
      description:
        "Analysed a spotify dataset and created visualizations using matplotlib in Jupyter notebook",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "matplotlib",
          color: "green-text-gradient",
        }
      ],
      image: spotifyRec,
      source_code_link: "https://github.com/midhunpaul396/Spotify-Data-Analysis",
    },
    {
      name: "AI Dashbot",
      description:
        " AI Dashbot is a generative AI-powered sales dashboard designed to deliver actionable insights into store performance.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
      ],
      image: python, 
      source_code_link: "https://aidashbot.streamlit.app/",
    },
    {
      name: "Spotify Recommendation",
      description:
        "Music Recommendation system using PySpark that recommends music to users based on their listening habits",
      tags: [
        {
          name: "pyspark",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "ALSalgorithm",
          color: "pink-text-gradient",
        },
      ],
      image: spotifyRec,
      source_code_link: "https://github.com/midhunpaul396/spotify-recommendation-system",
    }
  ];
  
  export { services, technologies, experiences, educations, projects };
