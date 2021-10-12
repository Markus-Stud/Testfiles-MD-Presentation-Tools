import React from 'react'

const customColor = 'orange'

export default ({ children }) => (
  <div
    style={{
      color: customColor
    }}>
    {children}
  </div>
)