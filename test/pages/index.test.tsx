import React from 'react'
import { render, fireEvent } from '../testUtils'

import Index from '../../pages/index'

describe('Hello World Component', () => {
  // it('matches snapshot', () => {
  //   const { asFragment } = render(<Index />, {})
  //   expect(asFragment()).toMatchSnapshot()
  // })

  it('Clicking button triggers fetch function and gets response from API', () => {
    const { getByText } = render(<Index />, {})
    window.alert = jest.fn()
    new Promise(() => {
      fireEvent.click(getByText('Test Button'))
    }).then(() => {
      expect(window.alert).toHaveBeenCalledWith('data: pagar resposta ')
    })
  })
})
