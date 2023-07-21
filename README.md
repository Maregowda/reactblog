# "React Blog App"
Live Project : <a href="https://thunderous-narwhal-c4c413.netlify.app/"> GBlog </a> <br>

* The purpose of this report is to provide an overview and update on the development of the blog page project using React.js and various hooks such as useState and useEffect. Additionally, we have implemented state management using the Easy Peasy library to efficiently manage the application's state. The key features of the blog page include blog search, blog editing, blog deletion, and adding new blogs.
* The blog page project aims to create a user-friendly and interactive blogging platform using modern web development technologies. React.js was chosen as the primary framework due to its component-based architecture and ease of use, allowing for efficient development and maintenance.

# Implemented Features:

* Use of React Hooks:
We have extensively utilized React hooks in this project to manage component state and lifecycle methods more effectively. The key hooks used are as follows:

* useState: Implemented to handle component state, enabling dynamic updates and re-rendering when state changes.
useEffect: Utilized to perform side effects, such as fetching data, once the component is mounted or updated.
useContext: Implemented using the Context API to manage global state and provide data to multiple components without prop drilling.
* State Management with Easy Peasy:
Easy Peasy is a popular state management library in the React.js ecosystem, providing a simple and efficient way to handle the application's global state. We have utilized Easy Peasy to manage blog data, including blog content, title, and author information.

# Key Features:
* Blog Search:
The blog search feature allows users to search for specific blogs based on keywords or tags. We have implemented a search bar that dynamically filters the blogs based on user input, providing a seamless search experience.

* Blog Editing:
Users can easily edit existing blogs with the blog editing feature. By clicking the "Edit" button on a blog post, a modal or an inline form appears, allowing the user to modify the blog's content, title, or author details. Once the user submits the changes, the blog is updated in the global state.

* Blog Deletion:
The blog deletion feature enables users to remove unwanted blog posts from the platform. Each blog post includes a "Delete" button, which, when clicked, prompts the user to confirm the deletion. Upon confirmation, the blog is removed from the global state, and the page re-renders to reflect the updated list of blogs.

* Add New Blog:
Users can contribute to the blog page by creating and publishing their own blogs. We have implemented a form that allows users to input the blog content, title, and author details. Upon submission, the new blog is added to the global state and displayed on the blog page.
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
