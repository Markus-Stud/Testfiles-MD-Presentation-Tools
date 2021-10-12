import React from 'react'

const customBackgroundColor = 'lightgoldenrodyellow'

export default ({ children }) => (
  <div
    style={{
      backgroundColor: customBackgroundColor
    }}>
    {children}
  </div>
)