import { useState } from 'react'
import CitiesList from '../../components/CitiesList'

const Home = () => {
  const [selectedCity, setSelectedCity] = useState('')

  return (
    <>
      <h1>Weather App</h1>
      <CitiesList
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
    </>
  )
}

export default Home
