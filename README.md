# XDC Explorer

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run json-server`

Runs json server with mocked data on port 5000

### `npm run storybook`

Runs storybook in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:ci`

Runs the tests in the non-interactive mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Environment variables
#### `REACT_APP_API_URL`
Sets API base url. In development mode defaults to `http://localhost:5000`.
#### `REACT_APP_FEATURE_DASHBOARD`
Defines if dashboard page is available. In development mode defaults to `false`.
#### `REACT_APP_FEATURE_RANKING_AMOUNT`
Defines if searching XDC amount in ranking is available. In development mode defaults to `false`.

Hint: all features should be prefixed with `REACT_APP_FEATURE_`
