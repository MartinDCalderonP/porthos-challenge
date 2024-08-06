import { ChangeEvent } from 'react'
import styles from './styles.module.css'
import citiesList from '../../assets/citiesList'
import useSelectedCity from '../../hooks/useSelectedCity'

const CitiesSelect = () => {
  const { selectedCity, setSelectedCity } = useSelectedCity()

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelectedCity(value)
  }

  return (
    <select
      className={styles.citiesSelect}
      value={selectedCity}
      onChange={handleCityChange}
    >
      {citiesList.map((city) => (
        <option key={city.city} value={`${city.city},${city.countryCode}`}>
          {city.city}
        </option>
      ))}
    </select>
  )
}

export default CitiesSelect
