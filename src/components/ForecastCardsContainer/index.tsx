import styles from './styles.module.css'
import ForecastCard, { ForecastCardProps } from './ForecastCard'

interface ForecastCardsContainerProps {
  forecastData: ForecastCardProps[]
}

const ForecastCardsContainer = ({
  forecastData
}: ForecastCardsContainerProps) => {
  return (
    <>
      <h3 className={styles.nextThreeDaysTitle}>Next Three Days</h3>

      <div className={styles.forecastCardsContainer}>
        {forecastData.map((item, index) => (
          <ForecastCard key={index} {...item} />
        ))}
      </div>
    </>
  )
}

export default ForecastCardsContainer
