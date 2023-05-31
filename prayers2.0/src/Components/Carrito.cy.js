import React from 'react'
import Carrito from './Carrito'

describe('<Carrito />', () => {
  it('Renderiza Carrito', () => {
    cy.mount(<Carrito />)
  })
})