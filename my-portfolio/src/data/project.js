export const projects = [
  {
    name: 'Portfolio Website',
    descriptionShort: 'A personal portfolio website built with Next.js and Material UI.',
    descriptionLong: 'This is my personal portfolio website, where I showcase my projects, skills, and experience. The site is built using Next.js for server-side rendering and Material UI for clean, responsive design. I integrated several APIs to handle direct contact features, such as email submission, and ensured full mobile interactivity to provide a seamless experience across devices. The goal was to create a visually appealing, fast-loading website using a modern tech stack, with added elements like a background video for enhanced visual interest.',
    link: 'https://github.com/TronciuVlad/websitePortofolio',
    tags: ['Web Development'],
  },  
  {
    name: 'SketchToolX',
    descriptionShort: 'A Java-based tool for converting old SketchBookX files into accessible formats.',
    descriptionLong: 'SketchToolX is a deeply personal passion project that began when I rediscovered my old iPad, which had 2.8GB of data locked inside a discontinued 32-bit app called SketchBookX. I used to draw random things in this app as a kid, but when iOS 9 dropped support for 32-bit applications, all of my creations were essentially trapped. Years later, I backed up the iPad’s data, decrypted it using an open-source tool, and began poking around the proprietary file format with a hex editor. That’s when I decided to build SketchToolX, a Java application that converts these files into PNG, and later added features like flipping, rotating, browsing, and saving, all with a JavaFX GUI. The tool supports batch processing, and I’ve built it with Maven to ensure scalability. Though it\'s still a work in progress, I plan to add support for layers and implement a machine learning algorithm to automatically detect the resolution of the images based on the data.',
    link: 'https://github.com/TronciuVlad/DataFileConverter',
    tags: ['Java Software Development'],
  },
  {
    name: 'Energise',
    descriptionShort: 'A C and Machine Learning-based tool for optimizing energy efficiency in mobile devices.',
    descriptionLong: 'Energise is a project focused on optimizing energy consumption in mobile devices using a combination of C programming and machine learning. As part of this project, I collaborated with researchers from both St. Andrews University and Dundee University to engineer a Linux kernel module for a custom Android OS, specifically for the Pixel 7. We used a regression model to compute the QoS-optimal CPU frequencies for various user-centric processes. This required gathering accurate energy data directly from buck converters on bare metal, utilizing undocumented Android features. Through several iterations of compiling the custom kernel module, we refined the results, achieving better energy efficiency with each version. The project culminated in a paper published at the HLPP 2024 Conference, contributing to the academic ecosystem. I presented the work at various events, including an open event in the CS department, where I showcased it to industry leaders and research peers. The project challenged us to balance quality of service with energy optimization, blending machine learning with low-level programming.',
    link: 'https://github.com/yalmalaq/energise',
    tags: ['C Software Development', 'Machine Learning'],
  },  
  {
    name: '8-Bit Map',
    descriptionShort: 'A retro-style web application focused on accessibility for users with reduced mobility, featuring machine learning components.',
    descriptionLong: '8-Bit Map is a retro-inspired web application designed to visualize geographical data with a focus on accessibility for users with reduced mobility. Developed during a hackathon where I worked alongside companies like NCR and BlackRock, the project aimed to address real-world challenges related to accessibility. The map allows users to find Santander Bank branches across Great Britain, and includes voice-command functionality for users unable to use a keyboard or mouse. The simplicity of the interface belies its powerful functionality, demonstrated during the presentation where the site responded to a voice command to find all banks in Croydon. The project won both an individual prize and the NCR Special Prize, and was recognized for its innovative approach to creating technology that serves everyone.',
    link: 'https://github.com/TronciuVlad/2024-stacshack',
    tags: ['Web Development', 'Machine Learning'],
  },  
  {
    name: 'Wikimedia Visualisation Tool',
    descriptionShort: 'A full-stack tool for visualizing and exploring Wikimedia data sets, with a focus on accessibility.',
    descriptionLong: 'As Scrum Master, I managed and completed a full-stack web application project for visualizing large data sets from WikiData. This tool uses JavaScript, React, D3, and WebGL (via PIXI.js) to render and simulate over 100,000 data nodes and their connections in real-time. The challenge was to create complex yet efficient physics simulations for representing thousands of connections while ensuring smooth rendering across frames. A key focus of the project was accessibility for users with visual impairments, which led me to develop two innovative features: an antigravity-like function in D3 force simulations that creates specific patterns to aid visually impaired users, and a double logarithmic complexity search crosshair function based on quadmaps, allowing keyboard navigation and selection of visual nodes. The project also includes comprehensive Aria support, tabbing, keyboard interaction, and a robust selection system designed to accommodate a wide range of accessibility needs. The application was awarded the Bloomberg Prize for Accessibility from WikiData and Skyscanner and I have received the highest grade in my year for it.',
    link: '',
    tags: ['Web Development', 'Miscellaneous'],
  },  
  {
    name: 'Radare',
    descriptionShort: 'Identifying and fixing buffer overflow vulnerabilities in the C-based reverse engineering tool.',
    descriptionLong: 'Radare is a powerful reverse engineering tool written in C, used for analyzing binary files. My work involves combing through the source code to identify potential buffer overflow vulnerabilities, particularly focusing on `malloc`-related issues. I create fixes that leverage type sizes and constraints to prevent malicious agents from exploiting these vulnerabilities to access restricted data. This process has led to one CVE being awarded, with several more in progress. This project has been a deep dive into low-level memory management, security, and system architecture.',
    link: 'https://github.com/TronciuVlad/radare2',
    tags: ['C Software Development', 'Miscellaneous'],
  },  
  {
    name: 'Out n About',
    descriptionShort: 'A web application built for the Out n About event planning platform.',
    descriptionLong: 'Out n About is a startup focused on helping users discover and organize outdoor activities, parties, and society events. As the frontend developer, I built the event planning web application using Next.js and Material UI, ensuring a highly responsive user interface. I developed scalable frontend logic to support backend operations and accommodate a growing user base. My contributions included creating login and authentication pages, as well as multiple dashboards, all of which needed to be robust enough to handle heavy student traffic. This project was especially demanding, as I frequently adapted the UI to meet evolving business requirements and the needs of both event organizers and participants.',
    link: 'https://www.getoutnabout.co.uk',
    tags: ['Web Development'],
  },  
  {
    name: 'Candyman - Trading Platform WebApp Mockup in React',
    descriptionShort: 'A playful mockup of a candy trading platform built in React.',
    descriptionLong: 'Candyman is a React-based mockup of a trading platform, developed during a Halloween-themed hackathon. The platform simulates real-time trading interactions, but with a playful twist—neighbourhood kids can create accounts and put up candy trade listings for whatever treats they collected while trick or treating. While the project includes prototyped features like live price tracking, user dashboards, and transaction history, these were more conceptual than fully-fledged functionalities. This hackathon was a fun opportunity to explore React and state management, especially for high-frequency, real-time applications.',
    link: 'https://github.com/TronciuVlad/HackTheBubble2023',
    tags: ['Web Development'],
  },  
  {
    name: 'Wall Street Crashers',
    descriptionShort: 'A financial simulation web application using machine learning for predictions.',
    descriptionLong: 'Wall Street Crashers is a financial simulation app developed as part of a hackathon with a team of students passionate about quantitative analysis. The project uses machine learning models to predict stock market trends, allowing users to make simulated investments with feedback based on historical data and real-time trends. Our team was nominated for the "Hackiest Hack" award, having managed to integrate no less than 14 APIs into the application to enhance its predictive power and data accuracy. This project was a deep dive into both web development and machine learning, and it showcased how predictive analysis can be applied in the financial sector.',
    link: 'https://github.com/James7304/the-wall-street-crashers',
    tags: ['Web Development', 'Machine Learning'],
  },
  {
    name: 'Full Stack Commodity Trading Platform + Job Automation in Java',
    descriptionShort: 'Worked on a B2B Commodity Trading Platform with an estimated $100M monthly transaction volume.',
    descriptionLong: 'During my 2022-2023 internship, I worked with a small company to develop a commodity trading platform for utilities like electricity, gas, and water, facilitating transactions between major players in the industry. My role involved writing SQL queries and creating views to generate reports on transaction volumes, both monthly and daily. I also automated email notifications based on this data using Java Spring, ensuring that clients were kept up to date with real-time information. On the front end, I worked with Vue and Express to serve and display this data in a clean, user-friendly interface. This project was a huge learning experience for me, especially in terms of full stack development and understanding how business logic translates into technical solutions.',
    link: 'https://blockchain-engineering.tech/',
    tags: ['Web Development', 'Java Software Development', 'Miscellaneous'],
  },
  

  {
    name: 'Tower Blaster - SFML C++ Implementation',
    descriptionShort: 'Developed a 2D game engine using C++ and the SFML library, inspired by an old flash game.',
    descriptionLong: 'I reimplemented the core mechanics of the Tower Blaster flash game using the SFML C++ library. This project was initially motivated by the discontinuation of Flash around 2020, and it served as my final project for my 12th-grade informatics certification. I initially experimented with Borland’s 1995 graphics.h library but found it too buggy for modern compilers like GCC14. In hindsight, I see this project as a crucial step in my early game development journey, and I hope to revisit it, especially after gaining experience with OpenGL.',
    link: 'https://github.com/TronciuVlad/towerBlaster',
    tags: ['C Software Development'],
  },
  {
    name: 'License Plate Recognition System',
    descriptionShort: 'Machine learning model using TensorFlow and OpenCV to recognize license plates.',
    descriptionLong: 'I developed an end-to-end license plate recognition system using TensorFlow and OpenCV. The system uses deep learning models for object detection to identify license plates from vehicle images. This project, done with a team of students from my hometown, marked my first real foray into Machine Learning. Jumping straight into an applied use case like this ignited my love for the field, and it has shaped my passion for further exploring AI technologies.',
    link: '',
    tags: ['Machine Learning'],
  },
  
];
