import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/home'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  ReactDOM.render(<Home />, container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
