import {
  capitalizeFirstLetter,
  generateApiUrl,
  getCurrentWeatherData,
  getDefaultCity,
  getIconUrl,
  getNextThreeDaysForecast,
  windDirection
} from '../utils'
import { Forecast } from '../common/interfaces'
import { describe, test, expect } from 'vitest'

describe('generateApiUrl', () => {
  test('should generate the correct API URL', () => {
    const selectedCity = 'New York,us'
    const expectedUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=`

    const apiUrl = generateApiUrl(selectedCity)

    expect(apiUrl).toContain(expectedUrl)
  })

  test('should return null if no city is provided', () => {
    const selectedCity = ''

    const apiUrl = generateApiUrl(selectedCity)

    expect(apiUrl).toBeNull()
  })
})

describe('getDefaultCity', () => {
  test('should return the default city', () => {
    const citiesList = [
      { city: 'New York', countryCode: 'us' },
      { city: 'London', countryCode: 'uk' }
    ]
    const expectedDefaultCity = 'New York,us'

    const defaultCity = getDefaultCity(citiesList)

    expect(defaultCity).toBe(expectedDefaultCity)
  })
})

describe('getIconUrl', () => {
  test('should return the correct icon URL', () => {
    const icon = '01d'
    const expectedIconUrl = `http://openweathermap.org/img/wn/${icon}.png`

    const iconUrl = getIconUrl(icon)

    expect(iconUrl).toBe(expectedIconUrl)
  })
})

describe('getCurrentWeatherData', () => {
  const mockData = {
    list: [
      {
        main: {
          feels_like: 20,
          humidity: 50,
          pressure: 1000,
          temp: 22,
          temp_max: 25,
          temp_min: 20
        },
        visibility: 10000,
        weather: [{ description: 'clear sky', icon: '01d' }],
        wind: { deg: 180, speed: 3 }
      }
    ]
  }

  test('should return the current weather data', () => {
    const expectedWeatherData = {
      description: 'clear sky',
      feels_like: 20,
      humidity: 50,
      icon: '01d',
      pressure: 1000,
      temp_max: 25,
      temp_min: 20,
      temp: 22,
      visibility: 10000,
      wind_deg: 180,
      wind_speed: 3
    }

    const weatherData = getCurrentWeatherData(mockData as Forecast)

    expect(weatherData).toEqual(expectedWeatherData)
  })
})

describe('windDirection', () => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

  directions.forEach((direction, index) => {
    test(`should return ${direction} for ${index * 45} degrees`, () => {
      const deg = index * 45

      const windDir = windDirection(deg)

      expect(windDir).toBe(direction)
    })
  })
})

describe('capitalizeFirstLetter', () => {
  test('should capitalize the first letter of a string', () => {
    const str = 'hello'
    const expectedStr = 'Hello'

    const capitalizedStr = capitalizeFirstLetter(str)

    expect(capitalizedStr).toBe(expectedStr)
  })
})

describe('getNextThreeDaysForecast', () => {
  const today = new Date()
  const todayDate = today.toISOString().split('T')[0]

  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowDate = tomorrow.toISOString().split('T')[0]

  const secondTomorrow = new Date(today)
  secondTomorrow.setDate(secondTomorrow.getDate() + 2)
  const secondTomorrowDate = secondTomorrow.toISOString().split('T')[0]

  const thirdTomorrow = new Date(today)
  thirdTomorrow.setDate(thirdTomorrow.getDate() + 3)
  const thirdTomorrowDate = thirdTomorrow.toISOString().split('T')[0]

  const fourthTomorrow = new Date(today)
  fourthTomorrow.setDate(fourthTomorrow.getDate() + 4)
  const fourthTomorrowDate = fourthTomorrow.toISOString().split('T')[0]

  const mockData = {
    list: [
      {
        dt_txt: `${todayDate} 12:00:00`,
        main: { temp_min: 20, temp_max: 25 },
        weather: [{ description: 'clear sky', icon: '01d' }]
      },
      {
        dt_txt: `${tomorrowDate} 12:00:00`,
        main: { temp_min: 21, temp_max: 23 },
        weather: [{ description: 'clear sky', icon: '01d' }]
      },
      {
        dt_txt: `${secondTomorrowDate} 12:00:00`,
        main: { temp_min: 22, temp_max: 24 },
        weather: [{ description: 'clear sky', icon: '01d' }]
      },
      {
        dt_txt: `${thirdTomorrowDate} 12:00:00`,
        main: { temp_min: 23, temp_max: 26 },
        weather: [{ description: 'clear sky', icon: '01d' }]
      },
      {
        dt_txt: `${fourthTomorrowDate} 12:00:00`,
        main: { temp_min: 24, temp_max: 27 },
        weather: [{ description: 'clear sky', icon: '01d' }]
      }
    ]
  }

  test('should return the forecast for the next three days', () => {
    const expectedForecast = [
      {
        day: tomorrow.toLocaleDateString('en-US', { weekday: 'long' }),
        description: 'clear sky',
        maxTemp: 23,
        minTemp: 21,
        icon: '01d'
      },
      {
        day: secondTomorrow.toLocaleDateString('en-US', { weekday: 'long' }),
        description: 'clear sky',
        maxTemp: 24,
        minTemp: 22,
        icon: '01d'
      },
      {
        day: thirdTomorrow.toLocaleDateString('en-US', { weekday: 'long' }),
        description: 'clear sky',
        maxTemp: 26,
        minTemp: 23,
        icon: '01d'
      }
    ]

    const forecast = getNextThreeDaysForecast(mockData as unknown as Forecast)

    expect(forecast).toEqual(expectedForecast)
  })
})
