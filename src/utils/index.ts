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
    humidity: main.humidity,
    icon: weather[0].icon,
    pressure: main.pressure,
    temp_max: main.temp_max,
    temp_min: main.temp_min,
    temp: main.temp,
    visibility: data.visibility,
    wind_deg: data.wind.deg,
    wind_speed: data.wind.speed
  }
}

export const windDirection = (deg: number) => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  const value = Math.floor(deg / 45)
  return directions[value % 8]
}

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
