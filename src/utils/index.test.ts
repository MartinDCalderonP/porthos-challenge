import { generateApiUrl } from '../utils'
import { describe, test, expect } from 'vitest'

describe('generateApiUrl', () => {
  test('should generate the correct API URL', () => {
    const selectedCity = 'New York,us'
    const expectedUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=`

    const apiUrl = generateApiUrl(selectedCity)

    expect(apiUrl).toContain(expectedUrl)
  })

  test('should return null if no city is provided', () => {
    const selectedCity = ''

    const apiUrl = generateApiUrl(selectedCity)

    expect(apiUrl).toBeNull()
  })
})
