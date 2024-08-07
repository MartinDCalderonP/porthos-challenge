import Home from './index'
import renderWithProviders from '../../utils/renderWithProviders'
import { describe, expect, test, vi } from 'vitest'

describe('Home', () => {
  test('renders Home component', () => {
    const { getByText } = renderWithProviders(<Home />)

    const homeTitle = getByText(/Weather App/i)

    expect(homeTitle).toBeInTheDocument()
  })

  test("renders the loading text when the data hasn't been fetched", () => {
    const { getByText } = renderWithProviders(<Home />)

    const loadingText = getByText(/Loading/i)

    expect(loadingText).toBeInTheDocument()
  })

  test('renders the error message when the data fetching fails', async () => {
    const mockUseFetch = await import('../../hooks/useFetch')

    mockUseFetch.default = vi.fn().mockReturnValueOnce({
      data: null,
      error: new Error('An error occurred'),
      loading: false
    })

    const { getByText } = renderWithProviders(<Home />)

    const errorText = getByText(/An error occurred/i)

    expect(errorText).toBeInTheDocument()
  })
})
