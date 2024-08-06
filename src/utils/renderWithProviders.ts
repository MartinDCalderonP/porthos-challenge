import { ReactElement } from 'react'
import { render, RenderResult } from '@testing-library/react'
import TestWrapper from './TestWrapper'

const renderWithProviders = (ui: ReactElement, route = '/'): RenderResult => {
  window.history.pushState({}, 'Test Page', route)

  return render(ui, { wrapper: TestWrapper })
}

export default renderWithProviders
