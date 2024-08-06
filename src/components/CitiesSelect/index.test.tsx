import CitiesSelect from './index'
import renderWithProviders from '../../utils/renderWithProviders'
import { fireEvent, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

describe('CitiesSelect', () => {
  test('renders CitiesSelect component', async () => {
    const { getByRole, getAllByRole } = renderWithProviders(<CitiesSelect />)

    const selectElement = getByRole('combobox')
    expect(selectElement).toBeInTheDocument()

    const options = getAllByRole('option')
    expect(options).toHaveLength(20)

    expect(selectElement).toHaveValue('Buenos Aires,AR')

    fireEvent.change(selectElement, { target: { value: 'London,GB' } })

    await waitFor(() => {
      expect(selectElement).toHaveValue('London,GB')
    })
  })
})
