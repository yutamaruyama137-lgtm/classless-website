// Expose React on window so the design-system bundle (pre-transpiled to
// React.createElement, expecting a global React) and the window-scoped
// component files resolve correctly under the Vite build.
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

window.React = React
window.ReactDOMClient = ReactDOMClient
