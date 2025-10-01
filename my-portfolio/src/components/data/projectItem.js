import project1 from "../../assets/images/ems.jpg";
import project2 from "../../assets/images/tms.jpg";
import project3 from "../../assets/images/blog.jpg";
import project4 from "../../assets/images/email.jpg";
import project5 from "../../assets/images/account.jpg";

const projectItem = [
  {
    id: 1,
    projectImage: project1,
    projectTitle: "Employee Management System",
    projectDescription:
      "A full-stack Employee Management System built with Spring Boot and React. Manage employees by adding, editing, or deleting records. Features search, filter, and secure authentication.",
    link: "https://github.com/VaradM-17/Emplyfi",
  },
  {
    id: 2,
    projectImage: project2,
    projectTitle: "Todo Management System",
    projectDescription:
      "A simple task manager built with Spring Boot and React. Add, update, and track todos easily. Supports marking tasks complete and user authentication.",
    link: "https://github.com/VaradM-17/Todooz",
  },
  {
    id: 3,
    projectImage: project3,
    projectTitle: "Blog Management System",
    projectDescription:
      "A blog management app built with Spring Boot and React. Create, edit, and delete posts with authentication. Includes comment functionality for registered users.",
    link: "https://github.com/VaradM-17/my-blog-app",
  },
  {
    id: 4,
    projectImage: project4,
    projectTitle: "Smart Email – AI-Powered Email Reply System",
    projectDescription:
      "AI-powered email reply system built with Spring Boot and React, using Google Gemini API to generate smart replies with multiple tone options.",
    link: "https://github.com/VaradM-17/SmartMail",
  },
  {
    id: 5,
    projectImage: project5,
    projectTitle: "Account Management System (Backend)",
    projectDescription:
      "A backend system built with Spring Boot for managing bank-style accounts. Supports creating accounts, depositing and withdrawing funds, retrieving account details, and deleting accounts securely via REST APIs.",
    link: "https://github.com/VaradM-17/Accto",
  },
];

export default projectItem;
