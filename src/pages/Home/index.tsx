import CitiesSelect from '../../components/CitiesSelect'
import CurrentWeather from '../../components/CurrentWeather'
import useSelectedCity from '../../hooks/useSelectedCity'
import useFetch from '../../hooks/useFetch'
import { generateApiUrl } from '../../utils'
import { Weather } from '../../common/interfaces'

const Home = () => {
  const { selectedCity } = useSelectedCity()
  const url = generateApiUrl(selectedCity)
  const { data, error, loading } = useFetch(url)

  return (
    <>
      <h1>Weather App</h1>
      <CitiesSelect />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <CurrentWeather weatherData={data as Weather} />}
    </>
  )
}

export default Home
