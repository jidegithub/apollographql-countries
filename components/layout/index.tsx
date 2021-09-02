import React from 'react'
import Head from 'next/head'
import styles from './layout.module.css'

export default function index({children, title="countries"}: {children: React.ReactNode, title?: string}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Countries-{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  )
}
