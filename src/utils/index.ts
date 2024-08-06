import { City, Weather } from '../common/interfaces'

export const generateApiUrl = (selectedCity: string) => {
  if (!selectedCity) return null

  return `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric`
}

export const getDefaultCity = (citiesList: City[]) => {
  const firstCity = citiesList[0]
  const defaultCity = `${firstCity.city},${firstCity.countryCode}`

  return defaultCity
}

export const getIconUrl = (icon: string) => {
  return `http://openweathermap.org/img/wn/${icon}.png`
}

export const getCurrentWeatherData = (data: Weather) => {
  if (!data) return null

  const { main, weather } = data

  return {
    description: weather[0].description,
    feels_like: main.feels_like,
    icon: weather[0].icon,
    temp_max: main.temp_max,
    temp_min: main.temp_min,
    temp: main.temp
  }
}
