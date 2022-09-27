export interface CountryInterface {
  code: String
  name: String
  emoji: String
}

export interface CountriesInterface {
  countries: CountryInterface[]
}

export interface OneCountryInterface {
  country: CountryInterface
}