import React from 'react'
// import Typography from '@material-ui/core/Typography'
// import Link from '@material-ui/core/Link'
import styles from '../assets/creditCard.module.scss'
import Grid from '@material-ui/core/Grid'

export default function CreditCard(): JSX.Element {
  const [cardName] = React.useState('NOME DO TITULAR')
  const [cardNumber] = React.useState('**** **** **** ****')
  // const [cardCvv] = React.useState('322')
  const [cardExpirationDate] = React.useState('00/00')

  return (
    <div>
      <div className={styles.card}>
        <Grid container spacing={3}>
          <div className={styles.card__front}>
            <Grid item xs={12} className={styles.card__number}>
              {cardNumber}
            </Grid>
            <Grid container>
              <Grid item xs={8} className={styles.card__name}>
                {cardName}
              </Grid>
              <Grid item xs={4} className={styles.card__expirationDate}>
                {cardExpirationDate}
              </Grid>
            </Grid>
          </div>

          {/* <div className={styles.card__back}>
            <div className={styles.card__cvv}>
              <div className={styles.card__cvv}>{cardCvv}</div>
            </div>
          </div> */}
        </Grid>
      </div>
    </div>
  )
}
