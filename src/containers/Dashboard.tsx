import * as React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PaymentForm from '../components/PaymentForm'
import Sidebar from '../components/Sidebar'
import CreditCard from '../components/creditCard'

import styles from '../assets/dashboard.module.scss'

export default function Dashboard(): JSX.Element {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* PAYMENT FORM */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={1}>
              <Grid item xs={4} md={3} lg={7} style={{}}>
                <div className={styles.leftMenu}>
                  <button>alterar forma de pagamento</button>
                  <h1>Adicione um novo cartão de crédito</h1>
                  <div style={{ position: 'relative', left: '33%' }}>
                    <CreditCard></CreditCard>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                lg={5}
                style={{ padding: '50px 0 60px 0' }}
              >
                <PaymentForm />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* Sidebar */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Sidebar />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
