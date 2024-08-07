import CurrentWeather from './index'
import renderWithProviders from '../../utils/renderWithProviders'
import { describe, expect, test } from 'vitest'

describe('CurrentWeather', () => {
  test('should render the current weather information', () => {
    const mockProps = {
      description: 'sunny',
      feels_like: 25,
      humidity: 60,
      icon: '01d',
      pressure: 1000,
      temp_max: 30,
      temp_min: 20,
      temp: 25,
      visibility: 10000,
      wind_deg: 180,
      wind_speed: 10
    }

    const { getByText } = renderWithProviders(<CurrentWeather {...mockProps} />)

    expect(getByText('Current weather: 25°C')).toBeInTheDocument()
    expect(getByText('Feels like: 25°C')).toBeInTheDocument()
    expect(getByText('Min: 20°C | Max: 30°C')).toBeInTheDocument()
    expect(getByText('Humidity: 60% | Pressure: 1000 hPa')).toBeInTheDocument()
    expect(
      getByText('Wind speed: 10 m/s | Wind direction: S')
    ).toBeInTheDocument()
    expect(getByText('Visibility: 10 km')).toBeInTheDocument()
  })
})
