import React from 'react'

const customFont = 'serif'

export default ({ children }) => (
  <div
    style={{
      fontFamily: customFont,
    }}>
    {children}
  </div>
)