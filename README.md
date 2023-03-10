# Abner-Vinaja-Portfolio-Website

## Introduction
This project creates my portfolio website, which showcases my software development knowledge and projects. This project's objectives include:
- Build the webpage's structure using HTML, and style the page using Sass.
- Use React to build the web pages and to add functionality to the website
- Use Node.js to create a local server, and use Express.js to handle middleware and routing functions.
- Configure Webpack to manage the project's source files and assets, and to set up development and production environment configurations for the project.
- Deploy the website application within a Docker container.

## Project Content
- The root directory of this project contains the configuration files for Node.js, Webpack, Babel, and Docker.
- The "src/server" folder contains the server-side code for this project.
- The "src/client" folder contains the client-side code, Sass files, HTML files, and images for this project.

## Required Software
This project requires Node.js, and the version must be v18.12.0 or a newer version. Also, Docker can be used to run and deploy a container for this application.

## Installation
If Node.js is not installed, go to [Node.js](https://nodejs.org/en/), download the appropriate Node.js installation file for your operating system, and install Node.js using the default installation settings. If you need to update your computer's version of Node.js, see this [article](https://www.whitesourcesoftware.com/free-developer-tools/blog/update-node-js/) for advice. Once Node.js is installed, run the command `npm install` on your terminal, which will install all the modules listed as dependencies and devDependencies in the package.json file.

## Execution
### Development Mode
To execute this project using its development environment settings, open an instance of your terminal and run the command
`npm run build-dev`. You should see the app's webpage being opened at [http://localhost:8080](http://localhost:8080). 
Then open up another instance of your terminal, and start the local server by running the command `npm run start`.

### Production Mode
To execute this project using its production environment settings, open an instance of your terminal and run the command
`npm run build-prod`. Then, run the command `npm run start` to start the local server. Finally, open your browser and enter 
the URL, [http://localhost:8082](http://localhost:8082), to open the project webpage.

## Known Issues/Bugs
The current code has no existing technical issues or bugs.

## Copyright and Licensing Information
This project is currently not under any license.

## Acknowledgements
The .gitignore file was generated from GitHub's .gitigonore template for Node.js projects.