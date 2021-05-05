import React from 'react'

import PaymentForm from '../src/components/PaymentForm'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
// import SidebarComponent from '../src/components/sidebarComponent'
import styles from '../src/assets/hello-world.module.scss'

export default function Index(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header />
      <PaymentForm />
      {/* <SidebarComponent/> */}
      <Footer />
    </div>
  )
}
