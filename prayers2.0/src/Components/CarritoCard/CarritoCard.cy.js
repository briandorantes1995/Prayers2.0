import React from 'react'
import CarritoCard from './CarritoCard'

describe('<CarritoCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CarritoCard />)
  })
})