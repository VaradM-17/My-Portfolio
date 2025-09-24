import project1 from "../../assets/images/ems.jpg";
import project2 from "../../assets/images/tms.jpg";
import project3 from "../../assets/images/blog.jpg";

const projectItem = [
  {
    id: 1,
    projectImage: project1,
    projectTitle: "Employee Management System",
    projectDescription:
      "A full-stack Employee Management System built with Spring Boot and React. Manage employees by adding, editing, or deleting records. Features search, filter, and secure authentication.",
    link: "https://github.com/yourusername/employee-management",
  },
  {
    id: 2,
    projectImage: project2,
    projectTitle: "Todo Management System",
    projectDescription:
      "A simple task manager built with Spring Boot and React. Add, update, and track todos easily. Supports marking tasks complete and user authentication.",
    link: "https://github.com/yourusername/todo-management",
  },
  {
    id: 3,
    projectImage: project3,
    projectTitle: "Blog Management System",
    projectDescription:
      "A blog management app built with Spring Boot and React. Create, edit, and delete posts with authentication. Includes comment functionality for registered users.",
    link: "https://github.com/yourusername/blog-management",
  },
];

export default projectItem;
