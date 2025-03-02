import { useState, useEffect } from 'react'

interface UseFetch<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

const useFetch = <T>(url: string | null): UseFetch<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!url) return

    setLoading(true)

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetch
