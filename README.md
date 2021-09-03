# react-smart-tribune

> Easily insert Smart Tribune products in a React App

[![NPM](https://img.shields.io/npm/v/react-smart-tribune.svg)](https://www.npmjs.com/package/react-smart-tribune) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### NPM

```bash
npm install --save react-smart-tribune
```

### Yarn

```bash
yarn add react-smart-tribune
```

## Usage

```tsx
import React from 'react'

import { SmartFAQ, SmartPUSH } from 'react-smart-tribune'

const Example = () => {
  return (
    <React.Fragment>
      <SmartFAQ
        account='smart-tribune'
        kbId={11}
        locale='fr'
        cookieOptin={false}
      />
      <SmartPUSH
        account='smart-tribune'
        kbId={11}
        locale='fr'
        cookieOptin={false}
      />
    </React.Fragment>
  )
}

export default Example
```

## License

MIT © [xavierbriole](https://github.com/xavierbriole)
