import React from 'react'

import HelloWorld from '../src/components/hello-world'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

import styles from '../src/assets/hello-world.module.scss'

export default function Index(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header />
      <HelloWorld />
      <Footer />
    </div>
  )
}
