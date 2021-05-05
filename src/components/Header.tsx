import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'

import styles from '../assets/header.module.scss'

const Logo = require('../assets/logo-demoshop.svg') as string

export default function Header(): JSX.Element {
  return (
    <AppBar position="relative" color="default" className={styles.appBar}>
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
            Carreer
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            className={styles.link}
          >
            Login
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  )
}
