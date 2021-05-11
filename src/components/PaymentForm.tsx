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

import { useFormik } from 'formik'

import * as Yup from 'yup'

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

  const validationSchema = Yup.object({
    cardName: Yup.string().required('Insira seu nome completo'),
    cardNumber: Yup.string().required('Número de cartão inválido'),
    cardExpirationDate: Yup.date().min(new Date()).required('Data Inválida'),
    cardCvv: Yup.number().required('Código Inválido'),
  })

  const formik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardExpirationDate: '',
      cardCvv: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <main className={styles.layout}>
      <Stepper activeStep={activeStep} className={styles.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={formik.handleSubmit}>
        <React.Fragment>
          <React.Fragment>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <TextField
                  id="standard-required"
                  name="cardNumber"
                  label="Número do Cartão"
                  fullWidth
                  autoComplete="cc-number"
                  variant="standard"
                  value={formik.values.cardNumber}
                  error={
                    formik.touched.cardNumber &&
                    Boolean(formik.errors.cardNumber)
                  }
                  helperText={
                    formik.touched.cardNumber && formik.errors.cardNumber
                  }
                  onChange={(e) => {
                    formik.handleChange(e)
                    cardInfoSetters.setCardNumber(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  id="standard-basic"
                  name="cardName"
                  label="Nome (igual ao cartão)"
                  fullWidth
                  autoComplete="cc-name"
                  variant="standard"
                  value={formik.values.cardName}
                  error={
                    formik.touched.cardName && Boolean(formik.errors.cardName)
                  }
                  helperText={formik.touched.cardName && formik.errors.cardName}
                  onChange={(e) => {
                    formik.handleChange(e)
                    cardInfoSetters.setCardName(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="expDate"
                  label="Validade"
                  name="cardExpirationDate"
                  fullWidth
                  autoComplete="cc-exp"
                  variant="standard"
                  value={formik.values.cardExpirationDate}
                  error={
                    formik.touched.cardExpirationDate &&
                    Boolean(formik.errors.cardExpirationDate)
                  }
                  helperText={
                    formik.touched.cardExpirationDate &&
                    formik.errors.cardExpirationDate
                  }
                  onChange={(e) => {
                    formik.handleChange(e)
                    cardInfoSetters.setCardExpirationDate(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="cvv"
                  label="CVV"
                  name="cardCvv"
                  fullWidth
                  autoComplete="cc-csc"
                  variant="standard"
                  value={formik.values.cardCvv}
                  error={
                    formik.touched.cardCvv && Boolean(formik.errors.cardCvv)
                  }
                  helperText={formik.touched.cardCvv && formik.errors.cardCvv}
                  onChange={(e) => {
                    formik.handleChange(e)
                    cardInfoSetters.setCardCvv(e.target.value)
                  }}
                  onFocus={() => isCVV[1](true)}
                  onBlur={() => isCVV[1](false)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <NativeSelect
                    defaultValue={''}
                    inputProps={{
                      name: 'parcelas',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value=""></option>
                    <option value={12}>12 x R$1.000,00 sem juros</option>
                    <option value={6}>6 x R$2.000,00 sem juros</option>
                    <option value={3}>3 x R$4.000,00 sem juros</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
          </React.Fragment>
        </React.Fragment>
        <div className={styles.buttons}>
          <Button
            className={styles.button}
            type="submit"
            onClick={async () => {
              const data = await fetcher('/api/pagar')
              alert(`data: ${data.message}`)
            }}
          >
            Continuar
          </Button>
        </div>
      </form>
      {/* </Paper> */}
    </main>
  )
}

export default PaymentForm
