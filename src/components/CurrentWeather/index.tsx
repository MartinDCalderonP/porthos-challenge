import styles from './styles.module.css'
import { getIconUrl } from '../../utils'

interface CurrentWeatherProps {
  description: string
  feels_like: number
  icon: string
  temp_max: number
  temp_min: number
  temp: number
}

const CurrentWeather = ({
  description,
  feels_like,
  icon,
  temp_max,
  temp_min,
  temp
}: CurrentWeatherProps) => {
  return (
    <div className={styles.currentWeatherContainer}>
      <picture className={styles.weatherIcon}>
        <img src={getIconUrl(icon)} alt={description} />
        <figcaption>{description}</figcaption>
      </picture>
      <h2>Current weather: {temp}°C</h2>
      <p>Feels like: {feels_like}°C</p>
      <p>
        Min: {temp_min}°C | Max: {temp_max}
        °C Min
      </p>
    </div>
  )
}

export default CurrentWeather
