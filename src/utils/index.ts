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

export const getNextThreeDaysForecast = (data: Forecast) => {
  if (!data?.list) return null

  const today = new Date()
  const todayDate = today.getDate()
  const todayMonth = today.getMonth()
  const todayYear = today.getFullYear()

  const nextThreeDays = []

  for (let i = 1; i <= 3; i++) {
    const nextDay = new Date(todayYear, todayMonth, todayDate + i)
    const nextDayDate = nextDay.getDate()
    const nextDayMonth = nextDay.getMonth()
    const nextDayYear = nextDay.getFullYear()

    const filteredData = data.list.filter((item) => {
      const itemDate = new Date(item.dt_txt)
      const itemDateDate = itemDate.getDate()
      const itemDateMonth = itemDate.getMonth()
      const itemDateYear = itemDate.getFullYear()

      return (
        itemDateDate === nextDayDate &&
        itemDateMonth === nextDayMonth &&
        itemDateYear === nextDayYear
      )
    })

    const minTemp = Math.min(...filteredData.map((item) => item.main.temp_min))
    const maxTemp = Math.max(...filteredData.map((item) => item.main.temp_max))

    const { description, icon } = filteredData[0].weather[0]

    const formattedDate = nextDay.toLocaleDateString('en-US', {
      weekday: 'long'
    })

    nextThreeDays.push({
      day: formattedDate,
      description,
      minTemp,
      maxTemp,
      icon
    })
  }

  return nextThreeDays
}
