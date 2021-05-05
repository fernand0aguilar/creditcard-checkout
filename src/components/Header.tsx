import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'

import styles from '../assets/header.module.scss'

const Logo = require('../assets/logo-demoshop.svg') as string

export default function Header(): JSX.Element {
  return (
    <AppBar position="absolute" color="default" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <figure>
          <Logo />
        </figure>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            className={styles.link}
          >
            Features
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            className={styles.link}
          >
            Enterprise
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            className={styles.link}
          >
            Support
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            className={styles.link}
          >
            Support
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            className={styles.link}
          >
            Support
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
    // <div className={styles.headerComponent}>
    //   <div className={styles.container}>
    //       <header>
    //           <figure>
    //             <Logo />
    //           </figure>
    //       </header>
    //     </div>
    //   </div>
  )
}
