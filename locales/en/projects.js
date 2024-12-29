/* eslint-disable import/no-anonymous-default-export */
export default {
  projectsPage: {
    title: "Projects",
    subtitle: "My Projects",
    catchphrase:
      "Exploring the world of software development through innovative projects, continuous learning, and meaningful collaborations.",
    projects: {
      "ohmyfood": {
        title: "Ohmyfood",
        subtitle: "Energize a web page with CSS animations - Ohmyfood Site",
        overview:
          "Hired as a junior developer at Ohmyfood! A young online meal ordering startup aiming to establish itself in the Paris restaurant market. Its 100% mobile site allows users to compose their own menu and reduce their waiting time in restaurants as their menu is prepared in advance. The site initially consists of 4 menus and will be animated with CSS animations.",
        specifications: {
          technical: [
            "2 mockups to integrate: mandatory mobile and free for desktop/tablet.",
            "Graphic identity: fonts: logo and subtitle: Shrikhand / text: Roboto.",
            "Colors: primary #9356DC (purple), secondary #FF79DA (pink), tertiary #99E2D0 (green).",
            "Development to be done only in HTML and CSS (Sass preprocessor).",
            "Code validation by W3C.",
            "Compatibility with Chrome and Firefox browsers.",
          ],
          functional: [
            "The restaurant cards on the homepage redirect the user to the restaurant's menu page.",
            "An arrow in the header of the menu pages returns to the homepage.",
            "The 'Contact' link in the footer redirects to an email address.",
            "Animations: Loading spinner on the homepage.",
            "Buttons should lighten and the shadow should deepen, 'like' hearts should gradually fill.",
            "Menus should appear gradually, and clicking/hovering should display a sliding checkmark.",
            "Menu subtitles should be truncated if necessary with '...'.",
          ],
        },
      },
      "gameon": {
        title: "GameOn",
        subtitle: "Create a landing page with JavaScript - GameOn Site",
        overview:
          "Hired as a junior Front-End developer in an SME, GameOn. A company specializing in game conferences and contests. There was a need to simplify the homepage and the contest registration form following user feedback. The developer did not have time to complete the project before leaving for a new job. Objective: take over the development and complete it.",
        specifications: {
          technical: [
            "Work on a forked repo.",
            "Use separate files for HTML, CSS, and JavaScript.",
            "Exclusive use of JavaScript (no jQuery).",
            "Comment the code.",
            "Revise 2 mockups and create a Pop-up.",
            "Ensure the display is responsive.",
          ],
          functional: [
            "Make the X button functional to close the form.",
            "Implement validation of user input.",
            "Implement error messages for incorrect input.",
            "Implement form validation on the send button click.",
            "Add a confirmation message after successful form validation.",
          ],
        },
      },
      "fisheye": {
        title: "Fisheye",
        subtitle:
          "Create an accessible site for a photographer platform - Fisheye Site",
        overview:
          "Company: a freelance photographer website that allows independent photographers to showcase their best work and be contacted. There is a desire to modernize the site. The site's foundations were started by a colleague called to another project. Objective: take over the development and make the site dynamic and accessible.",
        specifications: {
          technical: [
            "Use separate files for HTML, CSS, and JavaScript.",
            "Semantic tags and code comments if needed.",
            "Exclusive use of JavaScript (no jQuery).",
            "Integrate 2 mockups and 2 modals.",
            "Mobile responsiveness not required.",
          ],
          functional: [
            "Homepage: clicking on the photographer's portrait leads to their personal page.",
            "Photographer's page: Displays the photographer's work gallery: photo and video.",
            "Ability to like each media, a total is displayed.",
            "Sorting options: date, subtitle, or popularity.",
            "Lightbox: clicking on a media opens a close-up view.",
            "Implement a contact modal.",
            "Accessibility: meet accessibility needs: Navigation, Contrast, Alternative description.",
          ],
        },
      },
      "lespetitsplats": {
        title: "Les petits plats",
        subtitle:
          "Develop a search algorithm in JavaScript - Les petits plats Site",
        overview:
          "My profile: Freelance Developer commissioned by the company -Les petits plats- as a Front-end Developer. The company: publisher of a cookbook. The mission: digitalization of the company with the creation of its website. The scenario: integrate the site mockup, implement the recipe search functionality. The objective: to have the smoothest possible site with the fastest possible recipe search engine.",
        specifications: {
          technical: [
            "Use separate files for HTML, CSS, and JavaScript (possibly Bootstrap).",
            "W3C validation without errors.",
            "1 mockup to integrate.",
            "1 file of 50 recipes.",
            "2 search algorithms (2 branches of the repo): native loops (for, while...)",
            "Functional programming with array object methods (forEach, filter, map...).",
          ],
          functional: [
            "A feature investigation sheet with a flowchart for the Back-end.",
            "The search can be done via the main search bar and is triggered after entering 3 characters.",
            "The main search can be refined via advanced search and is updated with each filter added or removed.",
            "The search can be done via advanced search including 3 filter lists (ingredients, appliances, and utensils) updated after each search.",
            "Each advanced filter list has its own advanced search bar showing only the available filters of the recipes possibly already searched.",
          ],
        },
      },
      "learnathome": {
        title: "Learn@Home",
        subtitle: "Define the needs for a tutoring app - Learn@Home Site",
        overview:
          "You have been employed for 5 years at Dev4U, a digital services company. As the lead developer of the web entity, you are responsible for designing the website for Learn@Home, an association that connects children struggling in school with volunteer tutors.",
        specifications: {
          technical: [
            "Use case diagrams for each major feature.",
            "User stories with acceptance criteria.",
            "Site mockups including login pages, dashboard, chat, calendar, and task management.",
          ],
          functional: [
            "Login page with password recovery and account creation link.",
            "Dashboard with task summary, event list, and unread message counter.",
            "Chat interface with profile photo, read indicator, and message timestamp.",
            "Calendar page.",
            "Task management page where the student can create tasks for themselves and the volunteer for the students they follow.",
          ],
        },
      },
      "kasa": {
        title: "KASA",
        subtitle:
          "Develop a Web Application with React and React Router - KASA Site",
        overview:
          "My role: Freelance Developer contracted by the company -Kasa- as a Front-end Developer. The company: leaders in apartment rentals between individuals in France. The mission: complete overhaul of the 10-year-old site to switch to a full JS stack (NodeJs - React) with new designs. The goal: start the React project and develop the entire application, React components, React Router routes, following the responsive Figma designs.",
        specifications: {
          technical: [
            "React: Break down into modular and reusable components.",
            "One component per file.",
            "Logical structure of different files.",
            "Use props between components.",
            "Use state in components when necessary.",
            "Event handling.",
            "Lists.",
            "React Router: Route parameters are managed by React Router in the URL to retrieve information for each accommodation.",
            "There is one page per route.",
            "The 404 page is returned for any non-existent route, or if a value in the URL is not part of the provided data.",
            "The router logic is consolidated in a single file.",
          ],
          functional: [
            "Develop the application following the Figma designs to ensure responsiveness.",
            "Ensure smooth and intuitive navigation between the different pages of the application.",
          ],
        },
      },
      "sportsee": {
        title: "SportSee",
        subtitle: "Develop an analytics dashboard with React - SportSee Site",
        overview:
          "My profile: Developer at SportSee. The company: a startup dedicated to sports coaching. The mission: new version of the user's profile page. The objective: develop a dashboard allowing the user to track the number of sessions completed, calories burned, and key information.",
        specifications: {
          technical: [
            "Develop the page with React.",
            "Logical separation of code into reusable components.",
            "Use D3 or Recharts to integrate charts.",
            "Use the provided backend for HTTP requests.",
            "Use Fetch or Axios for requests.",
            "Make requests outside of React components.",
            "Start by working with mock data then integrate the API.",
            "Set up a data modeling system to format API data before use.",
          ],
          functional: [
            "Kanban with User Stories.",
            "Figma mockup.",
            "Desktop first.",
            "Readable on screens of at least 1024 by 780 pixels.",
          ],
        },
      },
      "argentbank": {
        title: "ArgentBank",
        subtitle:
          "Use an API for a banking user account with React - ArgentBank Site",
        overview:
          "My profile: front-end developer at Remede Agency. The company: an agency specializing in web application development. The mission: help Argent Bank set up its application. The objective: Create a web application allowing clients to log in and manage their accounts and profile. Specify the necessary API endpoints for a potential second mission.",
        specifications: {
          technical: [
            "Phase 1: Develop a complete and responsive web application with React.",
            "Utilize the APIs provided by the backend (Swagger documentation available).",
            "Use Redux to manage the state of the entire application.",
            "Phase 2: Propose a backend-side modeling of the APIs for transactions.",
            "Provide Swagger documentation specifying: The method, The routes, The description, The parameters and responses.",
          ],
          functional: [
            "Phase 1: The user can visit the homepage.",
            "The user can log into the system.",
            "The user can log out of the system.",
            "The user can only see information related to their own profile after successfully logging in.",
            "The user can modify the profile and save the data in the database.",
            "Phase 2: Allow viewing of all their transactions for the current month.",
            "Allow viewing of transaction details in another view.",
            "Allow adding, modifying, or deleting information about a transaction.",
          ],
        },
      },
      "wealthhealth": {
        title: "Wealth Health",
        subtitle:
          "Migrate a jQuery library to React - Wealth Health Site: HRnet",
        overview:
          "My profile: front-end developer at Wealth Health. The company: a large financial corporation. The mission: help the company improve its internal HRnet web application for employee record management. The objective: Migrate the application using a jQuery library to React / Create a new version of the 'Create Employee' and 'Employee List' pages.",
        specifications: {
          technical: [
            "Migrate the existing application from jQuery to React.",
            "Create React components for the 'Create Employee' and 'Employee List' pages.",
            "Ensure compatibility with existing features and improve the user interface.",
          ],
          functional: [
            "Users should be able to create new employees and view the list of existing employees.",
            "The application must be responsive and offer a better user experience compared to the jQuery version.",
          ],
        },
      },
      "agenceazeon": {
        title: "Agence Azeon",
        subtitle: "Propose an MVP of the core 'job offer' page for its client",
        overview: "My profile: front-end developer for Azeon Agency.",
        specifications: {
          technical: [
            "Migrate the existing Front-end part from PHP to React.",
            "Implement a global state manager with Redux technology.",
            "Implement an advanced search and filtering system.",
            "Integrate a Newsletter subscription system with input control and field validation, as well as notification of an existing subscription.",
            "Set up a display system to highlight key or urgent offers.",
          ],
          functional: [
            "Ensure compatibility with existing features and improve the user interface.",
            "Integrate internationalization and a fully responsive design for a better user experience.",
          ],
        },
      },
      "musicfestival": {
        title: "Music Festival",
        subtitle: "Music Festival Landing Page with Tailwind CSS",
        overview:
          "This project is a practical implementation of a landing page for a music festival using Tailwind CSS. It demonstrates various features of Tailwind CSS and responsive design techniques.",
        specifications: {
          technical: [
            "Use Tailwind CSS for responsive design.",
            "Implement dark mode toggle.",
            "Create custom animations.",
            "Integrate an interactive carousel for featured artists.",
            "Sticky navigation with dropdown menu.",
            "Timeline layout for the event schedule.",
            "Ticket information table.",
          ],
          functional: [
            "The page must be responsive for mobile and desktop layouts.",
            "Users can toggle between light and dark modes.",
            "The carousel should allow scrolling through featured artists.",
            "Navigation should remain at the top of the page when scrolling and offer a dropdown menu for additional sections.",
          ],
          technology: ["Tailwind CSS", "JavaScript", "HTML"],
        },
      },
      "portfoliolivecv": {
        title: "Portfolio Live CV",
        subtitle: "Portfolio - Live CV (Web App ReactJS)",
        overview:
          "This is my first portfolio following my ReactJS training, aimed at better self-presentation and showcasing major skills acquired. Want to test the 'Theme' or the 'Form'? Click on my logo!",
        specifications: {
          technical: [
            "Use ReactJS to create an interactive web application.",
            "Integrate Redux for state management.",
            "Use SCSS for styling and MUI for UI components.",
          ],
          functional: [
            "The application allows users to interact with the theme and form by clicking on the logo.",
            "It is designed to be responsive and provide a smooth user experience.",
          ],
        },
      },
      "bookstoremernstack": {
        title: "Book Store",
        subtitle: "Book Store - MERN Stack",
        overview:
          "Halfway through my learning journey of the MERN technology stack (MongoDB, Express.js, React.js, Node.js), here is a first practical application of what I've learned. Very exciting and fun: creating a simple full-stack application called 'Book Store', revisited with a touch of Redux and MUI, including a 'dark mode' and a form with input validation. The application allows you to view the list of books through a table or cards. Create book entries, view a book's preview, details, edit its information, and delete it.",
        specifications: {
          technical: [
            "Use the MERN technology stack (MongoDB, Express.js, React.js, Node.js) to create a full-stack application.",
            "Integrate Redux for state management.",
            "Use MUI for UI components and implement a dark mode.",
          ],
          functional: [
            "The application allows users to manage a collection of books, including creating, viewing, editing, and deleting books.",
            "It offers a responsive and intuitive user interface.",
          ],
        },
      },
      "fredericksblogv2": {
        title: "Frederic-K’s Blog",
        subtitle: "Frederic-K’s Blog - Version 2",
        overview:
          "This demo blog showcases Full Stack MERN development skills and offers a range of features for blog owners and users. Internationalization (i18n) now allows the blog to be accessible in multiple languages for static content, providing a personalized and inclusive user experience. Framer Motion animations enhance the user interface with smooth and dynamic animations, improving user interaction and engagement.",
        specifications: {
          technical: [
            "Built with the MERN stack (MongoDB, Express, React, Node.js).",
            "Frontend: React, Tailwind CSS, and Framer Motion.",
            "Backend: Node.js and Express.",
            "Database: MongoDB.",
            "Enhanced features: email validation, password recovery, contact form, database optimization.",
          ],
          functional: [
            "For blog owners: create, update, and delete posts; manage users and comments via a dashboard.",
            "For users: browse posts with carousels and lightboxes, advanced search functionality, create user accounts (email/password or Google login), interact with posts (comment, like), contact form.",
          ],
        },
      },
      "2tat": {
        title: "2TAT",
        subtitle: "2TAT - Technical Assistance Tool",
        overview:
          "This application is designed to facilitate and secure financial management in the context of market operations. Initially, our starting point was a basic Excel spreadsheet used to manage and distribute budgets. However, significant improvements were identified: the accuracy of calculations and financial distribution, as well as optimized ergonomics for a more user-friendly, simple, and intuitive experience.",
        specifications: {
          technical: [
            "Cross-platform desktop application using Tauri (Windows, macOS, Linux).",
            "Modern web interface built with React.",
            "Rapid development with Vite and Hot Module Replacement (HMR).",
            "Precise decimal arithmetic with Decimal.js.",
            "Optimized financial calculations and distribution ('penny pinching algorithm').",
          ],
          functional: [
            "The application allows for precise and efficient budget management and distribution.",
            "It offers a responsive and intuitive user interface.",
          ],
        },
      },
      "portfolio3dnext": {
        title: "Portfolio 3D Next",
        subtitle: "Portfolio - 3D Next",
        overview:
          "Welcome to the second edition of my interactive portfolio, designed to reflect the evolution of my skills and professional journey. This updated project incorporates modern technologies and 3D animations to offer an even more immersive and engaging user experience.",
        specifications: {
          technical: [
            "Next.js: React framework for developing modern web applications.",
            "Three.js: JavaScript library for creating and displaying 3D graphics in the browser.",
            "Tailwind CSS: Utility-first CSS framework for rapid and responsive design.",
            "Framer Motion: Library for smooth and dynamic animations.",
            "Zustand: Simple and scalable state management for React.",
            "React Hook Form: Form management with built-in validation.",
            "Zod: Schema validation for TypeScript and JavaScript.",
            "i18n: Internationalization to make content accessible in multiple languages.",
            "EmailJS: Service to send emails directly from the browser.",
            "Responsiveness: Adaptive design for an optimal user experience on all devices.",
          ],
          functional: [
            "Light or Dark Mode: Choose between a light or dark theme for a visual experience tailored to your preferences.",
            "Internationalization: Access content in multiple languages for global reach.",
            "3D Animations: Enjoy an enriched visual experience with interactive 3D elements.",
            "Contact Form: A simple and effective way to reach me for any inquiries.",
          ],
        },
      },
    },
  },
}
