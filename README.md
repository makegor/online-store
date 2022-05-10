# Online-store

Try it: [makegor.github.io/online-store](https://makegor.github.io/online-store/), based on FLUX architecture. This project was bootstrapped with [React](https://github.com/facebook/create-react-app) and [Redux](https://redux.js.org/). The code was a migration to [Typescript](https://www.typescriptlang.org/). With RestFULL (registration / loginizarion / pagination), adding products to the bag, the ability to write product reviews. Emulation of [AJAX requests](./src/api/api.js) to the server was also added, as data storage for which
acted as the browser's local storage. The project also uses [Unit tests](./src/redux/content-reducer.test.ts). [React-hook-form](https://react-hook-form.com/) & [formik](https://formik.org/docs/overview) used as form libraries + [yup](https://github.com/jquense/yup) as a validation library. All required packages can be viewed in the file: [package.json](#dependencies) .

![online-store](./src/assecs/images/sample.JPG)

## Building the repository and running it locally

### `$ git clone "SSH adress"`
Copying the repository from GitHub

### `$ git log`

Version selection:
1) Earlier versions - press enter.
2) Upgrade to an earlier version. to find out the commit-number enter: 
```
$ git chekout commit-number
```

## download [node.js]() and type in the console:
```
cd online-store
npm i //installing all required packages
npm start
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## dependencies
```
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/classnames": "^2.3.1",
    "@types/jest": "^27.5.0",
    "@types/node": "^17.0.31",
    "@types/react": "^18.0.8",
    "@types/react-dom": "^18.0.3",
    "axios": "^0.24.0",
    "classnames": "^2.3.1",
    "formik": "^2.2.9",
    "gh-pages": "^3.2.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-hook-form": "^7.30.0",
    "react-redux": "^7.2.6",
    "react-router-dom": "^6.2.2",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-thunk": "^2.3.0",
    "reselect": "^4.0.0",
    "typescript": "^4.6.4",
    "web-vitals": "^1.0.1",
    "yup": "^0.32.11"
  }
```
option | who
:---|---:
_The author of the project_| __Egor Makarov__