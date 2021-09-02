import React from 'react'
import styles from './countries-list.module.css'
import CountryCard from '../country/CountryCard'
import { CountriesInterface, CountryInterface } from '../../types/'

export default function CountriesList({ countries }: CountriesInterface ) {
  return (
    <div className={styles.grid}>
      {countries.map((country: CountryInterface) => <CountryCard key={country.name} country={country}/>)}
    </div>
  )
}
