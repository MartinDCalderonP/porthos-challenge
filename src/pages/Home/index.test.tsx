import { render } from '@testing-library/react'
import Home from './index'
import { describe, expect, test } from 'vitest'

describe('Home', () => {
  test('renders Home component', () => {
    const { getByText } = render(<Home />)

    const homeTitle = getByText(/Weather App/i)

    expect(homeTitle).toBeInTheDocument()
  })
})
