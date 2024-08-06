import styles from './styles.module.css'
import { getIconUrl } from '../../../utils'

export interface ForecastCardProps {
  day: string
  description: string
  minTemp: number
  maxTemp: number
  icon: string
}

const ForecastCard = ({
  day,
  description,
  minTemp,
  maxTemp,
  icon
}: ForecastCardProps) => {
  return (
    <div className={styles.forecastCard}>
      <h4>{day}</h4>
      <picture>
        <img src={getIconUrl(icon)} alt={description} />
      </picture>
      <p>
        {Math.round(minTemp)}° / {Math.round(maxTemp)}°
      </p>
    </div>
  )
}

export default ForecastCard
