import * as React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PaymentForm from './PaymentForm'
import Sidebar from './Sidebar'

export default function Dashboard(): JSX.Element {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* PAYMENT FORM */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
            <PaymentForm />
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
