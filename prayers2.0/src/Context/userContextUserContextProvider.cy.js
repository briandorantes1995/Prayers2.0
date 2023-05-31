import React from 'react'
import { UserContextProvider } from './userContext'

describe('<UserContextProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserContextProvider />)
  })
})