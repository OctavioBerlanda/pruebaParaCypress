import React from 'react'
import TasksPage from './TasksPage'

describe('<TasksPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TasksPage />)
  })
})