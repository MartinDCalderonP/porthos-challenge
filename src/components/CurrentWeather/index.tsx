import styles from './styles.module.css'
import { capitalizeFirstLetter, getIconUrl, windDirection } from '../../utils'

interface CurrentWeatherProps {
  description: string
  feels_like: number
  humidity: number
  icon: string
  pressure: number
  temp_max: number
  temp_min: number
  temp: number
  visibility: number
  wind_deg: number
  wind_speed: number
}

const CurrentWeather = ({
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
}: CurrentWeatherProps) => {
  const windDirectionText = windDirection(wind_deg)
  const capitalizedDescription = capitalizeFirstLetter(description)

  return (
    <div className={styles.currentWeatherContainer}>
      <picture className={styles.weatherIcon}>
        <img src={getIconUrl(icon)} alt={description} />
        <figcaption>{capitalizedDescription}</figcaption>
      </picture>
      <h2>Current weather: {temp}°C</h2>
      <p>Feels like: {feels_like}°C</p>
      <p>
        Min: {temp_min}°C | Max: {temp_max}°C
      </p>
      <p>
        Humidity: {humidity}% | Pressure: {pressure} hPa
      </p>
      <p>
        Wind speed: {wind_speed} m/s | Wind direction: {windDirectionText}
      </p>
      <p>Visibility: {visibility / 1000} km</p>
    </div>
  )
}

export default CurrentWeather
