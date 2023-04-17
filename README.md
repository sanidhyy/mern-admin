# Modern Full Stack Admin Dashboard using MERN

![Modern Full Stack Admin Dashboard using MERN](/.github/images/img_main.png "Modern Full Stack Admin Dashboard using MERN")

[![Ask Me Anything!](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/Technical-Shubham-tech "Ask Me Anything!")
[![GitHub license](https://img.shields.io/github/license/Technical-Shubham-tech/mern-admin)](https://github.com/Technical-Shubham-tech/mern-admin/blob/main/LICENSE.md "GitHub license")
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Technical-Shubham-tech/mern-admin/commits/main "Maintenance")
[![GitHub branches](https://badgen.net/github/branches/Technical-Shubham-tech/mern-admin)](https://github.com/Technical-Shubham-tech/mern-admin/branches "GitHub branches")
[![Github commits](https://badgen.net/github/commits/Technical-Shubham-tech/mern-admin/main)](https://github.com/Technical-Shubham-tech/mern-admin/commits "Github commits")
[![Netlify Status](https://api.netlify.com/api/v1/badges/2fb5c7dc-fa84-425f-9432-d5844a67f291/deploy-status)](https://mern-admin.netlify.app/ "Netlify Status")
[![GitHub issues](https://img.shields.io/github/issues/Technical-Shubham-tech/mern-admin)](https://github.com/Technical-Shubham-tech/mern-admin/issues "GitHub issues")
[![GitHub pull requests](https://img.shields.io/github/issues-pr/Technical-Shubham-tech/mern-admin)](https://github.com/Technical-Shubham-tech/mern-admin/pulls "GitHub pull requests")

## ⚠️ Before you start

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create .env file in both **client** and **server**.
4. Contents of **client/.env**:

```
REACT_APP_BASE_URL="http://localhost:5001"
```

5. Contents of **server/.env**:

```
MONGODB_URL="XXXXXXXXXXXXXXXXXXXXXXXXX"
PORT=5001
```

5. Open terminal and run `npm install` or `yarn install` in both **client** & **server**.

6. Create new account in [MongoDB](https://mongodb.com/ "MongoDB").

7. From dashboard Create New Project > Create New Cluster > Click Connect and Make sure you add current ip address to be able to connect to this database.

![Setup MongoDB](/.github/images/step_mongodb1.jpg "Setup MongoDB")

**NOTE:** Make Sure you type same email in `VITE_APP_EMAILJS_RECIEVER` in `.env`

8. Once, MONGODB is configured, copy your **MONGODB URL** to `MONGODB_URL`.

![Copy MONGODB_URL](/.github/images/step_mongodb2.png "Copy MONGODB_URL")

9. Now, open `server/index.js` and uncomment imports and other lines to **insert data** into MongoDB.
   **NOTE:** Make sure to comment them after running first time to avoid duplicate values in database.

10. Now app is fully configured :+1: and you can start using this app using `npm run dev` or `yarn run dev` for server and `npm start` or `yarn start` for client.

**NOTE:** Make sure you don't share these keys publicaly.

## :fire: Features

- Supports both **Dark** and **Light** Theme.
- **Mobile Responsive** Layout.
- Built-in **5+ Fully Customizable Scenes** including:
  1. Products
  2. Customers
  3. Transactions
  4. Geography
- Easy to customize **6+ charts** with theme support including:
  1. Overview
  2. Daily
  3. Monthly
  4. Breakdown
  5. Admin
  6. Performance
- **4+ Customizable Pages** with full theming support including:
  1. Dashboard
  2. Client Facing
  3. Sales
  4. Management
- **15+ Components** which are easy-to-use and fully customizable.

**NOTE:** While running deployed version, it might take some time to load first time on render. [Learn more](https://render.com/docs/free#other-limitations "Learn More")

## :camera: Screenshots:

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Fulfilled with Features](/.github/images/img2.png "Fulfilled with Features")

![Geography Data](/.github/images/img3.png "Geography Data")

![Server Side Pagination](/.github/images/img4.png "Server Side Pagination")

![Different Charts](/.github/images/img5.png "Different Charts")

## :gear: Built with

[![React JS](https://skillicons.dev/icons?i=react)](https://react.dev/ "React JS") [![Node JS](https://skillicons.dev/icons?i=nodejs)](https://nodejs.org/ "Node JS") [![MongoDB](https://skillicons.dev/icons?i=mongodb)](https://mongodb.com/ "MongoDB") [![Material UI](https://skillicons.dev/icons?i=materialui)](https://mui.com/ "Material UI") [![React Redux](https://skillicons.dev/icons?i=redux)](https://redux.js.org/ "React Redux")

## :wrench: Stats

[![Stats for this App](/.github/images/stats.svg)](https://pagespeed.web.dev/ "Stats for this App")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## Buy Me a Coffee 🍺

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/Technical-Shubham-tech?style=social&label=Follow&maxAge=2592000)](https://github.com/Technical-Shubham-tech "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FTechnical-Shubham-tech%2Fmedical-chat-app "Tweet")
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCNAz_hUVBG2ZUN8TVm0bmYw "Subscribe my Channel")

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :books: Available Scripts

In the project directory, you can run:

### `yarn run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## :page_with_curl: Learn More

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

### `yarn run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
