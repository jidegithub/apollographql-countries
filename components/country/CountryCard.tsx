import React from 'react'
import styles from './country-card.module.css'
import { OneCountryInterface } from '../../types/'
import Link from 'next/link'

export default function CountryCard({ country }: OneCountryInterface) {
  return (
    <Link href={`/client-side/${country.code}`}>
      <div key={country.code} className={styles.card}>
        <h3>{country.name}</h3>
        <p>
          {country.code} - {country.emoji}
        </p>
        {/* Population: 27,657,145
        Region: Asia
        Capital: Kabul */}
      </div>
    </Link>
  )
}
