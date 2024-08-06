import { ChangeEvent } from 'react'
import styles from './styles.module.css'
import citiesList from '../../assets/citiesList'

interface CitiesSelectProps {
  selectedCity: string
  setSelectedCity: (city: string) => void
}

const CitiesSelect = ({ selectedCity, setSelectedCity }: CitiesSelectProps) => {
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
