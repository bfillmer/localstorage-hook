
import React from 'react'

import { Heading, P, Section } from 'Atoms'

import { Consumer } from './ValueContext'

export function Home () {
  return (
    <Section>
      <Heading>Home</Heading>
      <Consumer>
        {({ item, setItem, removeItem }) => (
          <React.Fragment>
            <P>Value: {item}</P>
            <button onClick={() => setItem('This is stored.')}>Set LS Value</button>
            <button onClick={() => removeItem()}>Remove LS Value</button>
          </React.Fragment>
        )}
      </Consumer>
    </Section>
  )
}
