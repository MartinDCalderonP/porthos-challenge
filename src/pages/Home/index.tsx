import CitiesSelect from '../../components/CitiesSelect'
import CurrentWeather from '../../components/CurrentWeather'
import useSelectedCity from '../../hooks/useSelectedCity'
import useFetch from '../../hooks/useFetch'
import { getCurrentWeatherData, generateApiUrl } from '../../utils'
import { Forecast } from '../../common/interfaces'

const Home = () => {
  const { selectedCity } = useSelectedCity()
  const url = generateApiUrl(selectedCity)
  const { data, error, loading } = useFetch(url)
  const currentWeatherData = getCurrentWeatherData(data as Forecast)

  return (
    <>
      <h1>Weather App</h1>
      <CitiesSelect />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!currentWeatherData && !loading && !error && (
        <div>No data. Please select another city.</div>
      )}
      {currentWeatherData && <CurrentWeather {...currentWeatherData} />}
    </>
  )
}

export default Home
