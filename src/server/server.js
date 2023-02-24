const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser'); //Used for parsing request bodies
const cors = require('cors');              //Used for enabling CORS requests
const express = require('express');        //Used for creating the server
const port = 8082;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const progLang = [
  {
    name: 'Java',
    image: 'Java.jpg',
    description: 'Java was the programming language through which I learned computer programming. I have used it for application programming in academic projects.'
  },
  {
    name: 'C',
    image: 'C.png',
    description: 'I have used the C programming language for several academic projects. These include low-level systems programming in Ubuntu, and experimenting with parallel programming interfaces (e.g. OpenMP, MPI).'
  },
  {
    name: 'Python',
    image: 'Python.png',
    description: 'As the third programming language that I learned as a college student, I used Python in various application programming projects. For instance, in my cloud computing course, I used to Python with Apache Hadoop and Apache Spark to process data sets.'
  },
  {
    name: 'Common Lisp',
    image: 'Common_Lisp.png',
    description: 'In my Programming Languages course, I briefly learned the syntax for this language as I learned about differences among programming language syntaxes, and then I used this language for a few academic assignments'
  },
  {
    name: 'SQL',
    image: 'MySQL.png',
    description: 'Throughout my time as a college student, I practiced using SQL to store and modify application data. MySQL was the database management system that I often practiced with.'
  },
  {
    name: 'HTML',
    image: 'HTML.png',
    description: 'Throughout some of my college courses, online courses, and personal projects, I have practiced using HTML to build web pages.'
  },
  {
    name: 'CSS',
    image: 'CSS.png',
    description: 'I have used CSS (and Sass, a CSS extension language) to create custom styles for my web pages. As I have taken online courses, I have had a little bit of practice with CSS frameworks like Tailwind CSS and Pico.'
  },
  {
    name: 'PHP',
    image: 'PHP.png',
    description: 'When I first learned web development at UTSA, I learned how to use PHP with the Apache HTTP Server to dynamically generate web pages on the back-end in response to input from the front-end.'
  },
  {
    name: 'JavaScript',
    image: 'JavaScript.png',
    description: 'In my last semester at UTSA, I first learned JavaScript in order to write RESTful APIs, and to build the back-end for web applications. Later, through online courses, I learned how to use JavaScript to add functionality to front-end components.'
  }
];

const frameworks = [
  {
    name: 'JUnit',
    image: 'JUnit.png',
    description: 'As I learned how to build applications using Java, I learned about unit testing, how to use JUnit to execute units tests for Java code.'
  },
  {
    name: 'Mocha',
    image: 'MochaJS.png',
    description: 'In order to execute unit tests on my JavaScript code when I was building a RESTful API web application, I learned how to use Mocha with Chai. Then, I learned how to execute my unit tests whenever I deployed my web application.'
  },
  {
    name: 'Express',
    image: 'ExpressJS.png',
    description: 'I have used Express to build RESTful APIs for both my academic projects and personal projects.'
  },
  {
    name: 'Jest',
    image: 'Jest.png',
    description: 'Jest is the second JavaScript testing framework that I have used to perform unit testing on my web applications. While using Jest, I have experimented with various packages like Jest Fetch Mock in order to test asynchronous functions.'
  },
  {
    name: 'React',
    image: 'React.svg',
    description: 'After extensive practice with building functional front-end components using HTML and JavaScript, I decided to learn React in order to understand the benefits of front-end libraries and frameworks. Now, I use React to build functional web pages on the front-end.'
  }
];

const otherTools = [
  {
    name: 'Ubuntu',
    image: 'Ubuntu.png',
    description: 'Throughout my time at UTSA, I used the Ubuntu environment to execute various types of applications and scripts. These ranged from system programs to data-processing applications.'
  },
  {
    name: 'Bash',
    image: 'Bash.png',
    description: 'When I first learned about systems programming, I learned about the Bourne Again SHell (Bash). I then practiced systems programming by writing Bash scripts'
  },
  {
    name: 'Node.js',
    image: 'NodeJS.png',
    description: 'While I was at UTSA, I first learned Node.js so that I could use it with Express to build RESTful APIs. Ever since then, I have used this runtime environment to create the back-end components for my web application projects.'
  },
  {
    name : 'Docker',
    image: 'Docker.png',
    description: 'When I was learning about DevOps during my last semester at UTSA, I learned about how containers can be used within a CI/CD pipeline to deploy applications. Docker was the platform that I used to build containers. To this day, I have used Docker as part of my software development process.'
  },
  {
    name: 'Webpack',
    image: 'Webpack.png',
    description: 'Webpack introduced me to the concepts of minification and module bundling, and it has helped me to build more efficient web applications. Since Webpack builds single-page applications, I have learned how to use it with libraries like React to build complex applications.'
  },
  {
    name: 'MongoDB',
    image: 'MongoDB.png',
    description: 'Due to the fact that I started learning web development mainly with JavaScript, I decided to learn MongoDB as part of the MERN stack. I have learned how to use MongoDB to easily store and manipulate data for web applications.'
  }
];

app.get('/listOfSkills', (req, res) => {
  res.status = 200;
  res.json([progLang, frameworks, otherTools]);
});

const listOfProjects = [
  {
    name: "Abner Vinaja Portfolio Website",
    skills: [{name: 'HTML', image: 'HTML.png'}, {name: 'CSS', image: 'CSS.png'}, {name: 'JavaScript', image: 'JavaScript.png'}, {name: 'Node.js', image: 'NodeJS.png'}, {name: 'Express.js', image: 'ExpressJS.png'}, {name: 'Jest', image: 'Jest.png'}, {name: 'Webpack', image: 'Webpack.png'}, {name: 'React', image: 'React.svg'}, {name: 'MongoDB', image: 'MongoDB.png'}],
    description: {
      generalDescription: "This project creates my portfolio website, which showcases my software development knowledge and projects. This project's objectives include:",
      bulletPoints: [
        "Build the webpage's structure using HTML, and style the page using Sass.",
        "Use React to build the web pages and to add functionality to the website",
        "Use Node.js to create a local server, and use Express.js to handle middleware and routing functions.",
        "Configure Webpack to manage the project's source files and assets, and to set up development and production environment configurations for the project.",
        "Store the website's data on a MongoDB database, and then retrieve that data when web pages are rendered."
      ]
    },
    githubURL: 'https://github.com/ssy089/Abner-Vinaja-Portfolio-Website',
    webURL: 'http://localhost:8080'
  },
  {
    name: 'Trip Planner App',
    skills: [{name: 'HTML', image: 'HTML.png'}, {name: 'CSS', image: 'CSS.png'}, {name: 'JavaScript', image: 'JavaScript.png'}, {name: 'Node.js', image: 'NodeJS.png'}, {name: 'Express.js', image: 'ExpressJS.png'}, {name: 'Jest', image: 'Jest.png'}, {name: 'Webpack', image: 'Webpack.png'}],
    description: {
      generalDescription: "This project creates a single-page travel application that allows the user to store information about their travel plans, and to see relevant weather information about their destination. This project incorporates the various skills and tools that were taught in Udacity's Front End Web Developer Nanodegree Program:",
      bulletPoints: [
        "Build the webpage's structure using HTML, and style the page using Sass.",
        "Use JavaScript methods to manipulate the Document Object Model (DOM), and to provide functionality for the webpage.",
        "Incorporate several Application Programming Interfaces (APIs) in order to implement various types of data in the application.",
        "Use Node.js to create a local server, and use Express.js to handle middleware and routing functions.",
        "Configure Webpack to manage the project's source files and assets, and to set up development and production environment configurations for the project.",
        "Implement Jest to execute unit tests for the project."
      ]
    },
    githubURL: 'https://github.com/ssy089/Abner-Trip-Planner-App',
    webURL: 'https://abner-vinaja-trip-planner-app.azurewebsites.net/'
  },
  {
    name: 'MeaningCloud NLP App',
    skills: [{name: 'HTML', image: 'HTML.png'}, {name: 'CSS', image: 'CSS.png'}, {name: 'JavaScript', image: 'JavaScript.png'}, {name: 'Node.js', image: 'NodeJS.png'}, {name: 'Express.js', image: 'ExpressJS.png'}, {name: 'Jest', image: 'Jest.png'}, {name: 'Webpack', image: 'Webpack.png'}],
    description: {
      generalDescription: "This project creates a Natural Language Processing (NLP) application that uses the MeaningCloud Sentiment Analysis API to generate a sentiment analysis of news articles and/or blog posts. In addition, this project uses Webpack to manage the project's source files and assets. The other main objectives of this project are:",
      bulletPoints: [
        'Set up development and production environment configurations for the project.',
        "Write the project's styles using Sass.",
        'Implement Jest to execute unit tests for the project.'
      ]
    },
    githubURL: 'https://github.com/ssy089/Abner-Evaluate-Articles-NLP-App',
    webURL: 'https://abner-vinaja-evaluate-articles-nlp-app.azurewebsites.net/'
  },
  {
    name: 'Weather Journal App',
    skills: [{name: 'HTML', image: 'HTML.png'}, {name: 'CSS', image: 'CSS.png'}, {name: 'JavaScript', image: 'JavaScript.png'}, {name: 'Node.js', image: 'NodeJS.png'}, {name: 'Express.js', image: 'ExpressJS.png'}],
    description: {
      generalDescription: "This project creates a weather journal application. It is my third project for Udacity's Front End Web Developer Nanodegree Program. This project uses server-side and client-side code to collect, store, and retrieve weather data and user input. Also, this project uses Promises in JavaScript to perform the following actions:",
      bulletPoints: [
        'Get weather data about specific ZIP codes using the OpenWeatherMap API.',
        'Store weather data with user input on the server endpoint.',
        'Get all data from the server endpoint, and then dynamically update the User Interface (UI) to display the data.'
      ]
    },
    githubURL: 'https://github.com/ssy089/Abner-Weather-Journal-App',
    webURL: 'https://abner-vinaja-weather-journal-app.azurewebsites.net/'
  },
  {
    name: 'Landing Page Template',
    skills: [{name: 'HTML', image: 'HTML.png'}, {name: 'CSS', image: 'CSS.png'}, {name: 'JavaScript', image: 'JavaScript.png'}],
    description: {
      generalDescription: "This project creates a basic multi-section landing page. It is my second project for Udacity's Front End Web Developer Nanodegree Program. The project uses basic Document Object Model (DOM) methods to add the following functionalities to the page:",
      bulletPoints: [
        'Dynamically build the navigation menu based on the amount of content (sections) on the page.',
        'Set a section as an active section whenever it is the section currently being viewed.',
        'Whenever a navigation menu item is clicked, the page should scroll to the appropriate section.'
      ]
    },
    githubURL: 'https://github.com/ssy089/Abner-Landing-Page-Project',
    webURL: 'https://delightful-bush-006287010.2.azurestaticapps.net/'
  },
  {
    name: 'Personal Blog',
    skills: [{name: 'HTML', image: 'HTML.png'}, {name: 'CSS', image: 'CSS.png'}],
    description: {
      generalDescription: "This project creates a personal blog as a static website. It is my first project in Udacity's Front End Web Developer Nanodegree Program. This project fulfills the following objectives:",
      bulletPoints: [
        'Build the web pages using HTML, and add styling using CSS.', 
        'Use CSS Flexbox and CSS Grid to set the layouts for web page components.', 
        'Implement responsive web design by including media queries. These adjust the web page layouts in response to different screen, window, and viewport sizes.'
      ]
    },
    githubURL: 'https://github.com/ssy089/Abner-Personal-Blog-Project',
    webURL: 'https://happy-field-0940da810.2.azurestaticapps.net/'
  }
];

app.get('/listOfProjects', (req, res) => {
  res.status = 200;
  res.json(listOfProjects);
});

/* Point the application instance to the folder containing the webpage files. */
app.use(express.static('./dist'));

/* Start the local server. */
const server = app.listen(port, function() {
  console.log('Abner Vinaja Portfolio Website is running on http://localhost:8082');
});