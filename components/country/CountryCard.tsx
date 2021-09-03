import React from 'react'
import styles from './country-card.module.css'
import { OneCountryInterface } from '../../types/'
import Link from 'next/link'
import { keygen } from '../../utils/keygen'

export default function CountryCard({ country }: OneCountryInterface) {
  return (
    <Link href={`/client-side/${country.code}`}>
      <div key={keygen()} className={styles.card}>
        <h3>{country.name}</h3>
        <p>
          {country.code} - {country.emoji}
        </p>
      </div>
    </Link>
  )
}
