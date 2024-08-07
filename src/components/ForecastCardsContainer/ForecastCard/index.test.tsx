import ForecastCard from '../ForecastCard'
import renderWithProviders from '../../../utils/renderWithProviders'
import { describe, expect, test } from 'vitest'

describe('ForecastCard', () => {
  const forecast = {
    day: 'Tuesday',
    description: 'Sunny',
    minTemp: 20,
    maxTemp: 30,
    icon: '01d'
  }

  test('renders the forecast', () => {
    const { getByText, getByAltText } = renderWithProviders(
      <ForecastCard {...forecast} />
    )

    expect(getByText('Tuesday')).toBeInTheDocument()
    expect(getByAltText('Sunny')).toBeInTheDocument()
    expect(getByText('20° / 30°')).toBeInTheDocument()
  })
})
