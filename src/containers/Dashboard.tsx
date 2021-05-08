import * as React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PaymentForm from '../components/PaymentForm'
import Sidebar from '../components/Sidebar'
import CreditCard from '../components/creditCard'

import styles from '../assets/dashboard.module.scss'
import Button from '@material-ui/core/Button'

export default function Dashboard(): JSX.Element {
  const [cardName, setCardName] = React.useState('NOME DO TITULAR')
  const [cardNumber, setCardNumber] = React.useState('**** **** **** ****')
  const [cardCvv, setCardCvv] = React.useState('')
  const [cardExpirationDate, setCardExpirationDate] = React.useState('00/00')
  const [isCVVSelected, setIsCVVSelected] = React.useState(false)

  const cardInfo = {
    cardName,
    cardNumber,
    cardExpirationDate,
    cardCvv,
  }

  const cardInfoSetters = {
    setCardName,
    setCardNumber,
    setCardCvv,
    setCardExpirationDate,
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* PAYMENT FORM */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={9}>
          <Paper sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={1}>
              <Grid item xs={4} lg={7}>
                <div className={styles.leftMenu}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item style={{ padding: '0px' }}>
                      <Button className={styles.buttonChangePayment}>
                        <b>&#60;</b>{' '}
                        <span style={{ paddingLeft: '10px' }}>
                          Alterar forma de pagamento
                        </span>
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button className={styles.buttonAddNewCard}>
                        <i className={styles.iconAddCard}></i>
                        <span>Adicione um novo cartão de crédito</span>
                      </Button>
                    </Grid>
                    <Grid item>
                      <div className={styles.cardContainer}>
                        <CreditCard cardInfo={cardInfo} cvv={isCVVSelected} />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} lg={5} sx={{ p: 8 }}>
                <PaymentForm
                  cardInfoSetters={cardInfoSetters}
                  isCVV={[isCVVSelected, setIsCVVSelected]}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* Sidebar */}
        <Grid item xs={12} lg={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Sidebar />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
