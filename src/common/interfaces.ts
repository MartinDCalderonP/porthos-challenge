export interface CitiesListItem {
  city: string
  countryCode: string
}

export interface Forecast {
  cod: string
  message: number
  cnt: number
  list: List[]
  city: City
}

interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

interface Coord {
  lat: number
  lon: number
}

interface List {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  rain?: Rain
  sys: Sys
  dt_txt: Date
}

interface Clouds {
  all: number
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

interface Rain {
  '3h': number
}

interface Sys {
  pod: string
}

interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface Wind {
  speed: number
  deg: number
  gust: number
}
