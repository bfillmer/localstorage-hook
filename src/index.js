
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Application } from 'Atoms'
import { Routes } from 'Routes'
import { Provider, Consumer } from 'Screens/ValueContext'

import { theme, GlobalStyle } from 'theme'

function App () {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider>
          <Application>
            <Routes />
            {/* Say, a header component that needs the localstorage value. */}
            <Consumer>
              {({ item }) => (
                <p>Separate component: {item}</p>
              )}
            </Consumer>
          </Application>
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
