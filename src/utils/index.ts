export const generateGeocodingApiUrl = (selectedCity: string) => {
  if (!selectedCity) return null

  return `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${
    import.meta.env.VITE_API_KEY
  }`
}
