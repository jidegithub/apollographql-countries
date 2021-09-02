import React, { useState } from 'react'
import styles from './SearchBar.module.css'

const onChange = (e) => {

} 

export default function SearchBar() {
  const [findCountry, setFindCountry] = useState(null);
  return <input type="search" onChange={() => setFindCountry}  placeholder="Search Countries" className={styles.input} value=""></input>
}
