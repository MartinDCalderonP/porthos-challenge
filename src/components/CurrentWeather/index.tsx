import styles from './styles.module.css'
import { Weather } from '../../common/interfaces'
import { getIconUrl } from '../../utils'

interface CurrentWeatherProps {
  weatherData: Weather
}

const CurrentWeather = ({ weatherData }: CurrentWeatherProps) => {
  return (
    <div className={styles.currentWeatherContainer}>
      <picture className={styles.weatherIcon}>
        <img
          src={getIconUrl(weatherData.weather[0].icon)}
          alt={weatherData.weather[0].description}
        />
        <figcaption>{weatherData.weather[0].description}</figcaption>
      </picture>
      <h2>Current weather: {weatherData.main.temp}°C</h2>
      <p>Feels like: {weatherData.main.feels_like}°C</p>
      <p>
        Min: {weatherData.main.temp_min}°C | Max: {weatherData.main.temp_max}
        °C Min
      </p>
    </div>
  )
}

export default CurrentWeather
