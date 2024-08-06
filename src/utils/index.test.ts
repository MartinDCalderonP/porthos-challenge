import { generateGeocodingApiUrl } from '../utils'
import { describe, test, expect } from 'vitest'

describe('generateGeocodingApiUrl', () => {
  test('should generate the correct geocoding API URL', () => {
    const selectedCity = 'New York,us'
    const expectedUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=`

    const apiUrl = generateGeocodingApiUrl(selectedCity)

    expect(apiUrl).toContain(expectedUrl)
  })
})
