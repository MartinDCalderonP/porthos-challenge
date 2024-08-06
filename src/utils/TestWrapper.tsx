import { ReactNode } from 'react'
import SelectedCityProvider from '../context/SelectedCityProvider'

interface TestWrapperProps {
  children: ReactNode
}

const TestWrapper = ({ children }: TestWrapperProps) => {
  return <SelectedCityProvider>{children}</SelectedCityProvider>
}

export default TestWrapper
