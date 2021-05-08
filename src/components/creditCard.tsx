import React from 'react'
import Grid from '@material-ui/core/Grid'

import styles from '../assets/creditCard.module.scss'

export default function CreditCard(props: {
  cardInfo: {
    cardNumber: string
    cardName: string
    cardExpirationDate: string
    cardCvv: string
  }
  cvv: boolean
}): JSX.Element {
  const { cardNumber, cardName, cardExpirationDate, cardCvv } = props.cardInfo

  const backCard = (
    <div className={styles.card}>
      <Grid container spacing={3}>
        <div
          className={`${styles.card__back}  ${
            props.cvv && cardCvv !== ''
              ? styles.card__blueBg
              : styles.card__cleanBg
          }`}
        >
          <div className={styles.card__cvv}>
            <div className={styles.card__cvv}>{cardCvv}</div>
          </div>
        </div>
      </Grid>
    </div>
  )

  const frontCard = (
    <div className={styles.card}>
      <Grid container spacing={3}>
        <div
          className={`${styles.card__front}  ${
            cardNumber.startsWith('4')
              ? styles.card__blueBg
              : styles.card__cleanBg
          }`}
        >
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
      </Grid>
    </div>
  )

  return props.cvv ? backCard : frontCard
}
