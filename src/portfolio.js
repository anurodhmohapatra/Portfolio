/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Anurodh's Portfolio",
  description:
    "Hello! I'm Anurodh, a data engineer, an AI enthusiast, and a guy slightly obsessed for code quality. Also I'm a co-founder of nxtgenlearning.in. I’m currently available to work. If you have a project that you want to get started or think you need my help with something, then get in touch.",
  og: {
    title: "Anurodh Mohapatra Portfolio",
    type: "website",
    url: "https://anurodhmohapatra.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Anurodh Mohapatra",
  logo_name: "AnurodhMohapatra",
  nickname: "a.m_patra",
  subTitle:
    "Hello! I'm Anurodh, a data engineer, an AI enthusiast, and a guy slightly obsessed for code quality. Also I'm a co-founder of nxtgenlearning.in. I’m currently available to work. If you have a project that you want to get started or think you need my help with something, then get in touch.",
  resumeLink:
    "https://drive.google.com/file/d/11PDqPA3HbxaI_Neb_RHtr7OumBnmGGq9/view?usp=sharing",
  portfolio_repository: "https://github.com/anurodhmohapatra",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/anurodhmohapatra",
  // linkedin: "https://www.linkedin.com/in/anurodhmohapatra/",
  // gmail: "anurodhmohapatra@gmail.com",
  // gitlab: "https://gitlab.com/#",
  // facebook: "https://www.facebook.com/anurodhmohapatra/",
  // twitter: "https://twitter.com/anurodh97",
  // instagram: "https://www.instagram.com/a.m_patra/"

  {
    name: "Github",
    link: "https://github.com/anurodhmohapatra",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anurodhmohapatra/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCOQLoqXUc1ICMbqWCpmAH7w",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:anurodhmohapatra@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/anurodhmohapatra/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/a.m_patra/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
      {
      title: "Data Engineer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in orchestrating and automating data workflows with tools like Apache Airflow, Control-m and ADF",
        "⚡ Expertise in SQL databases, data modeling for performance, scalability, and integration with data warehousing platforms",
        "⚡ Proficient in using Pandas for data manipulation and ETL processes, with a focus on data warehousing practices"
		],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:['fab', 'jenkins']",
          style: {
            color: "#326CE5",
          },
        }
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in Python, developing data analysis scripts, machine learning models, and visualization tools",
        "⚡ Expert in cleaning and preprocessing raw data using Pandas and NumPy, handling missing values and outliers effectively",
        "⚡ Conducted exploratory data analysis with Matplotlib and Seaborn, uncovering patterns and trends to inform decision-making",
		"⚡ Applied machine learning algorithms, including decision trees and neural networks, for real-world problem-solving, such as predicting customer churn",
		"⚡ Effectively communicated complex technical findings to non-technical stakeholders through clear data visualizations and reports, facilitating understanding and decision-making",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/anurodhmohapatra",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Liverpool John Moorse University",
      subtitle: "Master of Science in Data Science",
      logo_path: "LJMU.png",
      alt_name: "LJMU",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ ####",
        "⚡ ####",
      ],
      website_link: "https://www.ljmu.ac.uk/",
    },
    {
      title: "New Horizon College of Engineering",
      subtitle: "B.Tech. in Mechanical Engineering",
      logo_path: "NHCE.png",
      alt_name: "NHCE",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ ####",
        "⚡ ####",
      ],
      website_link: "https://newhorizonindia.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Applied Text Mining in Python",
      subtitle: "- V. G. Vinod Vydiswaran",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/PYNLKJ6C5F7C",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Applied Machine Learning in Python",
      subtitle: "- Kevyn Collins-Thompson",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/Z3TWUMP6ZY93",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Applied Plotting, Charting & Data Representation in Python",
      subtitle: "- Christopher Brooks",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/A7W2HDCVZ638",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Introduction to Data Science in Python",
      subtitle: "- Christopher Brooks",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/D2RMEM52DTRU",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "Data science practitioner with 3 years of industry experience and a unique blend of software engineering, machine learning, and data analysis expertise.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
	    {
          title: "Data Engineer",
          company: "Mu Sigma",
          company_url: "https://www.mu-sigma.com/",
          logo_path: "MuSigma-logo-3.png",
          duration: "Aug 2022 - PRESENT",
          location: "Bengaluru, Karnataka",
          description:
            `- Designed and developed a Data Engineering framework for the entire organization.
             - Collaborated closely with data modellers to assist in data modelling based on the Data Vault methodology.`,
          color: "#0879bf",
        },
        {
          title: "Engineer",
          company: "L&T Technology Services",
          company_url: "https://www.ltts.com/",
          logo_path: "LTTS.png",
          duration: "May 2020 - Aug 2022",
          location: "Bengaluru, Karnataka",
          description:
            `- Defined and implement the customer's first performance dashboard in PowerBI.
             - Created pipelines using PowerShell which push performance data to SQL server.`,
          color: "#0879bf",
        },
        {
          title: "Executive Trainee",
          company: "L&T Technology Services",
          company_url: "https://www.ltts.com/",
          logo_path: "LTTS.png",
          duration: "June 2019 - May 2020",
          location: "Bengaluru, Karnataka",
          description:
            `Decreased manual performance testing time by 80% for the customer by introducing PowerShell scripts.`,
          color: "#0879bf",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Engineer and Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "anurodh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://anurodhmohapatra.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "RT Nagar, Dist.-Bengaluru, Karnataka - 560032",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/L5cRnsVUw6p1uKxu9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8050535285",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
