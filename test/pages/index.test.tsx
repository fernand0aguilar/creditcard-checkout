import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../pages/index'

describe('Home page', () => {
  // it('matches snapshot', () => {
  //   const { asFragment } = render(<Home />, {})
  //   expect(asFragment()).toMatchSnapshot()
  // })

  it('Clicking button triggers fetch function and gets response from API', () => {
    const { getByText } = render(<Home />, {})
    window.alert = jest.fn()
    new Promise(() => {
      fireEvent.click(getByText('Test Button'))
    }).then(() => {
      expect(window.alert).toHaveBeenCalledWith('data: pagar resposta ')
    })
  })
})
