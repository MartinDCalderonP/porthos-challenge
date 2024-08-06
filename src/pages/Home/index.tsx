import { useState } from 'react'
import CitiesSelect from '../../components/CitiesSelect'

const Home = () => {
  const [selectedCity, setSelectedCity] = useState('')

  return (
    <>
      <h1>Weather App</h1>
      <CitiesSelect
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
    </>
  )
}

export default Home
