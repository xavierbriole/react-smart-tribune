import React from 'react'

import { SmartFAQ, SmartPUSH } from 'react-smart-tribune'

const App = () => {
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

export default App
