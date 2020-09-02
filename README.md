This project is deployed at [https://postbook.netlify.com](https://postbook.netlify.com)

## Project Description

PostBook is a fully responsive CRUD application for posting, commenting, and 
deleting posts, all written in React.

The user can use the "create a new post" form field to create new posts, which can
be sorted to be either in ascending or descending order by time created. Once
a post is created, the user can click on the arrow on the post card to expand 
the view to reveal any replies the post may have, and if they chooses so, they can
add a reply of their own. All the form fields on the application have a basic
validator to ensure that the use cases fall within expectations. Users are also
able to delete the post.

## How to deploy

### Requirements

- You need [node](https://nodejs.org/en/) to run the app.

### Starting the app

```sh
# install/update dependencies
$ npm install

# start the app
$ npm start
```

The above commands will run the app on localhost:3000.

### Creating the build

```shell script
# run the build command
$ npm run build
```

The above command will create a minified build of the application in the `/build` folder.

### Required libraries

The application uses the following libraries:
- React.js
- recoil
- prop-types
- Chakra UI
- emotion.js
- faker
- formik
