import React from 'react'
import axios from 'axios'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import NativeSelect from '@material-ui/core/NativeSelect'
import FormControl from '@material-ui/core/FormControl'

import styles from '../assets/paymentForm.module.scss'

export const PaymentForm = (props: {
  cardInfoSetters: {
    setCardNumber: React.Dispatch<React.SetStateAction<string>>
    setCardName: React.Dispatch<React.SetStateAction<string>>
    setCardExpirationDate: React.Dispatch<React.SetStateAction<string>>
    setCardCvv: React.Dispatch<React.SetStateAction<string>>
  }
  isCVV: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}): JSX.Element => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)

  const steps = ['Carrinho', 'Pagamento', 'Confirmação']

  const [activeStep] = React.useState(1)

  const { cardInfoSetters, isCVV } = props

  return (
    <main className={styles.layout}>
      {/* <Paper className={styles.paper}> */}
      <Stepper activeStep={activeStep} className={styles.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        <React.Fragment>
          <React.Fragment>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <TextField
                  required
                  id="standard-required"
                  label="Número do Cartão"
                  fullWidth
                  autoComplete="cc-number"
                  variant="standard"
                  onChange={(e) =>
                    cardInfoSetters.setCardNumber(e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  required
                  id="standard-basic"
                  label="Nome (igual ao cartão)"
                  fullWidth
                  autoComplete="cc-name"
                  variant="standard"
                  onChange={(e) => cardInfoSetters.setCardName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="expDate"
                  label="Validade"
                  fullWidth
                  autoComplete="cc-exp"
                  variant="standard"
                  onChange={(e) =>
                    cardInfoSetters.setCardExpirationDate(e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="cvv"
                  label="CVV"
                  helperText="Last three digits on signature strip"
                  fullWidth
                  autoComplete="cc-csc"
                  variant="standard"
                  onChange={(e) => cardInfoSetters.setCardCvv(e.target.value)}
                  onFocus={() => isCVV[1](true)}
                  onBlur={() => isCVV[1](false)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <NativeSelect
                    defaultValue={12}
                    inputProps={{
                      name: 'parcelas',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value={12}>12 x R$1.000,00 sem juros</option>
                    <option value={6}>6 x R$2.000,00 sem juros</option>
                    <option value={3}>3 x R$4.000,00 sem juros</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
          </React.Fragment>

          <div className={styles.buttons}>
            <Button
              className={styles.button}
              onClick={async () => {
                const data = await fetcher('/api/pagar')
                alert(`data: ${data.message}`)
              }}
            >
              Test Button
            </Button>
          </div>
        </React.Fragment>
      </React.Fragment>
      {/* </Paper> */}
    </main>
  )
}

export default PaymentForm
