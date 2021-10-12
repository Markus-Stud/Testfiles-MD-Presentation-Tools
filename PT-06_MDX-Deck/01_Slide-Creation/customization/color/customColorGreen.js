import React from 'react'

const customColor = 'green'

export default ({ children }) => (
  <div
    style={{
      color: customColor
    }}>
    {children}
  </div>
)