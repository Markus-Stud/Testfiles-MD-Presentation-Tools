import React from 'react'

const customSize = '1.5em'

export default ({ children }) => (
  <div
    style={{
      fontSize: customSize
    }}>
    {children}
  </div>
)