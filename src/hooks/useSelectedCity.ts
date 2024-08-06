import { useContext } from 'react'
import {
  SelectedCityContext,
  SelectedCityContextValue
} from '../context/SelectedCityProvider'

const useSelectedCity = (): SelectedCityContextValue => {
  const context = useContext(SelectedCityContext)

  if (!context)
    throw new Error(
      'useSelectedCity must be used within a SelectedCityProvider'
    )

  return context
}

export default useSelectedCity
