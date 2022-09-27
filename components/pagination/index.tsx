import React from 'react'
import Link from 'next/link'
import styles from './pagination.module.css'

export default function Pagination() {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <a className={styles.prevlink}>
          <span className="">
            <svg viewBox="0 0 24 24" width="24" height="24"><g fill="#0070f3"><path fill="#0070f3" d="M14,17.414l-4.707-4.707c-0.391-0.391-0.391-1.023,0-1.414L14,6.586L15.414,8l-4,4l4,4L14,17.414z"></path></g></svg>
          </span>
          Prev
        </a>
      </Link>

      <span className={styles.spacer}></span>

      <Link href="/">
        <a className={styles.nextlink}>
          Next
          <span className="">
            <svg width="24" height="24" viewBox="0 0 24 24"><g fill="white"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g></svg>
          </span>
        </a>
      </Link>
    </div>
  )
}
