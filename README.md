<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# article sorting (react)

a small react application that displays a list of articles and allows sorting by the most upvoted or the most recent. the ui uses a dark theme with hackerank-style green accents.

---

## preview

![article sorting output](./output/article-sorting-output.png)

---

## what this app does

the app receives an array of article objects. each article includes:

- **title** (string)
- **upvotes** (number)
- **date** (string, format: yyyy-mm-dd)

---

## requirements

- default sorting → by **upvotes** (high to low)
- **most upvoted** button → sort by upvotes
- **most recent** button → sort by latest date
- assume unique upvote counts and unique dates

---

## features

- clean table view of articles
- two sorting options
- minimal react state handling
- dark theme ui in hackerank green
- beginner friendly component structure

---

## project structure

```txt
.
├── src
│   ├── App.js
│   ├── Articles.js
│   ├── Data.js
│   └── style.css
├── public
│   └── index.html
├── output
│   └── article-sorting-output.png
├── package.json
└── README.md
```

---

## how to run

```sh
git clone https://github.com/your-username/react-article-sorting-app.git
cd react-article-sorting-app
npm install
npm start
```

open in browser:  
`http://localhost:3000`

---

## screenshot

place your screenshot here:

```
output/article-sorting-output.png
```
```md
## reference link

![article sorting output](./output/article-sorting-output.png)

```

---

## tech stack

- react  
- javascript  
- css  

---

## notes

simple project to practice sorting logic, state updates and list rendering in react.

---

## license

MIT  
author: **haripriyatripathi**
>>>>>>> adc09703f776bd8f4510be5b85765dbd2b345609
