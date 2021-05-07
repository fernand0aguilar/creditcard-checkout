import React from 'react'
// import Typography from '@material-ui/core/Typography'
// import Link from '@material-ui/core/Link'
import styles from '../assets/creditCard.module.scss'

export default function CreditCard(): JSX.Element {
  const [cardName] = React.useState('MY FIRST NAME')
  const [cardNumber] = React.useState('xxxx-xxxx-xxxx-xx')
  const [cardCvv] = React.useState('322')
  const [cardValid] = React.useState(true)

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card__content}>
          <div className={styles.card__front}>
            <div className={styles.card__number}>{cardNumber}</div>
            <div className={styles.card__name}>
              <div className={styles.card__name}>{cardName}</div>
              <div className={styles.card__valid}>{cardValid}</div>
            </div>
          </div>

          <div className={styles.card__back}>
            <div className={styles.card__cvv}>
              <div className={styles.card__cvv}>{cardCvv}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
