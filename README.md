# react-github-stats

[![npm](https://img.shields.io/npm/v/react-github-stats)](https://www.npmjs.com/react-github-stats)
[![npm](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/MarkRabey/react-github-stats/blob/main/LICENSE)

![coverage-functions](./coverage/badge-functions.svg)
![coverage-lines](./coverage/badge-lines.svg)
![coverage-statements](./coverage/badge-statements.svg)

> React Component to display

## Installation

With `yarn`:

```
yarn add react-github-stats
```

With `npm`:

```
npm install react-github-stats
```

## Usage

```jsx
import {GitHubStats} from 'react-github-stats';

const App = () => {
  return <GitHubStats username="MarkRabey" accessToken={GITHUB_ACCESS_TOKEN} />;
};

export default App;
```

## Acknowledgements

- Uses `react-grid-system` for layouts
