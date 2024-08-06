import { CitiesListItem, Forecast } from '../common/interfaces'

export const generateApiUrl = (selectedCity: string) => {
  if (!selectedCity) return null

  return `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric`
}

export const getDefaultCity = (citiesList: CitiesListItem[]) => {
  const firstCity = citiesList[0]
  const defaultCity = `${firstCity.city},${firstCity.countryCode}`

  return defaultCity
}

export const getIconUrl = (icon: string) => {
  return `http://openweathermap.org/img/wn/${icon}.png`
}

export const getCurrentWeatherData = (data: Forecast) => {
  if (!data?.list) return null

  const { main, visibility, weather, wind } = data.list[0]

  const { feels_like, humidity, pressure, temp, temp_max, temp_min } = main
  const { description, icon } = weather[0]
  const { deg: wind_deg, speed: wind_speed } = wind

  return {
    description,
    feels_like,
    humidity,
    icon,
    pressure,
    temp_max,
    temp_min,
    temp,
    visibility,
    wind_deg,
    wind_speed
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
