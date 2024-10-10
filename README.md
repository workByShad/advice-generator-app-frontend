# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Building the project](#building-the-project)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

The original challenge was to build an advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it to look as close to the design as possible. However, I decided to build the backend myself to make this a full-stack project.

Users can:

- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon
- Log in to contribute to the pool of advices

### Links

- Live Site URL: [Here](https://advice-generator-app-frontend.vercel.app/)

## My process

### Built with

- TypeScript
- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Firestore](https://firebase.google.com/docs/firestore/) - Firebase database
- [Firebase Authentication](https://firebase.google.com/docs/auth/) - Firebase authentication service

### Building the project

1. Initialise the project as a public repository on [GitHub](https://github.com/) and clone it to my local machine.
2. Use Next JS to scaffold the base for the project.
3. Scaffold the project base using Next.js while setting up Tailwind CSS.
4. Flesh out the frontend including the main advice generator component page, register/login page, account page, and contribution page.
5. Build the backend using Firestore to store user-contributed advice slips and Firebase Authentication to manage user login functionality.
6. Deploy the application using Vercel for the frontend and Firebase for the backend, ensuring everything works smoothly in production.

### What I learned

In this project, I learned and used Next JS, TypeScript, Tailwind, and Firebase, which may seem like a lot, but I took my time to learn these well, using documentation to guide my learning.

I deepened my understanding of full-stack development, particularly how to integrate frontend frameworks like Next.js with backend services like Firestore. Working with Firebase Authentication was a valuable experience for handling secure login flows.

I am most proud of learning these skills:

1. API integration: Connecting the frontend to the backend and designing an efficient way to fetch and display the advices.
2. Database management: Storing, retrieving, and displaying user-generated advice using Firestore while creating appropriate Firebase security rules.
3. User authentication: Implementing Firebase Authentication to allow user login and contributions, which gave me a clearer picture of secure authentication methods in a web app.

### Continued development

I want to use a different architectural scheme in future projects. For this project, I went with the standard three-tier architecture, but I would like to use microservices next time.

I would also like to build my own backend from scratch, which was how I originally started the project before deciding on Firebase. In particular, I would like to use Java and Spring Boot to do this, which would allow me to learn to set up authentication in a more hands-on way rather than using Firebase's authentication service.

## Author

- LinkedIn - [Shad Ali](www.linkedin.com/in/workbyshad)
