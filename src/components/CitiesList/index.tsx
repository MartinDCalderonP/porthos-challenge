import { ChangeEvent } from 'react'
import styles from './styles.module.css'
import cities from './cities'

interface CitiesListProps {
  selectedCity: string
  setSelectedCity: (city: string) => void
}

const CitiesList = ({ selectedCity, setSelectedCity }: CitiesListProps) => {
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
      {cities.map((city) => (
        <option key={city.city} value={`${city.city},${city.countryCode}`}>
          {city.city}
        </option>
      ))}
    </select>
  )
}

export default CitiesList
