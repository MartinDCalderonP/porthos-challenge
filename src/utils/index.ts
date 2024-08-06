import { City } from '../common/interfaces'

export const generateApiUrl = (selectedCity: string) => {
  if (!selectedCity) return null

  return `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${
    import.meta.env.VITE_API_KEY
  }`
}

export const getDefaultCity = (citiesList: City[]) => {
  const firstCity = citiesList[0]
  const defaultCity = `${firstCity.city},${firstCity.countryCode}`

  return defaultCity
}
