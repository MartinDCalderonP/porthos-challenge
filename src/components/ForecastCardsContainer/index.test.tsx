import ForecastCardsContainer from './index'
import renderWithProviders from '../../utils/renderWithProviders'
import { describe, expect, test } from 'vitest'

describe('ForecastCardsContainer', () => {
  const mockForecastData = [
    {
      day: 'Tuesday',
      description: 'Sunny',
      minTemp: 20,
      maxTemp: 30,
      icon: '01d'
    }
  ]

  test('renders the forecast cards correctly', () => {
    const { getByText } = renderWithProviders(
      <ForecastCardsContainer forecastData={mockForecastData} />
    )

    const nextThreeDaysTitle = getByText('Next Three Days', { selector: 'h3' })

    expect(nextThreeDaysTitle).toBeInTheDocument()
  })
})
