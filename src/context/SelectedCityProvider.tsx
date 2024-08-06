import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useEffect,
  useMemo
} from 'react'
import citiesList from '../assets/citiesList'
import { getDefaultCity } from '../utils'

export interface SelectedCityContextValue {
  selectedCity: string
  setSelectedCity: Dispatch<SetStateAction<string>>
}

export const SelectedCityContext = createContext<SelectedCityContextValue>({
  selectedCity: '',
  setSelectedCity: () => {}
})

interface SelectedCityProviderProps {
  children: ReactNode
}

const SelectedCityProvider = ({ children }: SelectedCityProviderProps) => {
  const defaultCity = getDefaultCity(citiesList)
  const savedSelectedCity = localStorage.getItem('selectedCity')

  const [selectedCity, setSelectedCity] = useState<string>(
    savedSelectedCity ?? defaultCity
  )

  useEffect(() => {
    localStorage.setItem('selectedCity', selectedCity)
  }, [selectedCity])

  const value: SelectedCityContextValue = useMemo(
    () => ({
      selectedCity,
      setSelectedCity
    }),
    [selectedCity, setSelectedCity]
  )

  return (
    <SelectedCityContext.Provider value={value}>
      {children}
    </SelectedCityContext.Provider>
  )
}

export default SelectedCityProvider
