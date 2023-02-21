const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser'); //Used for parsing request bodies
const cors = require('cors');              //Used for enabling CORS requests
const express = require('express');        //Used for creating the server
const port = 8080;

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
    image: 'CSS.jpg',
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
    description: 'In my last year at UTSA, I first learned JavaScript in order to write RESTful APIs, and to build the back-end for web applications. Since then, through online course and my personal projects, I have learned how to build functional front-end components for web applications.'
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
    image: 'MochaJS',
    description: 'In order to execute unit tests on my JavaScript code when I was building a RESTful API web application, I learned how to use Mocha with Chai. Then, I learned how to execute my unit tests whenever I deployed my web application.'
  },
  {
    name: 'Express',
    image: 'ExpressJS.png',
    description: 'I have used Express to build RESTful APIs for both my academic projects and personal projects.'
  },
  {
    name: 'React',
    image: 'React.png',
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

/* Point the application instance to the folder containing the webpage files. */
app.use(express.static('./dist'));

/* Start the local server. */
const server = app.listen(port, function() {
  console.log('Abner Vinaja Portfolio Website is running on http://localhost:8080');
});