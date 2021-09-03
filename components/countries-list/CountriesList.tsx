import React from 'react'
import styles from './countries-list.module.css'
import CountryCard from '../country/CountryCard'
import { CountriesInterface, CountryInterface } from '../../types/'
import { keygen } from '../../utils/keygen'

export default function CountriesList({ countries }: CountriesInterface ) {
  return (
    <div className={styles.grid}>
      {countries.map((country: CountryInterface) => <CountryCard key={keygen()} country={country}/>)}
    </div>
  )
}
