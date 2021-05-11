import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default function Deposits(): JSX.Element {
  return (
    <React.Fragment>
      <h2 style={{ backgroundColor: '#F7F7F7', borderRadius: '5px' }}>
        <br />
      </h2>
      <h4>
        <hr />
      </h4>
      <Grid container>
        <Grid item xs={10}>
          <Typography
            color="text.secondary"
            sx={{ flex: 1, backgroundColor: '#F7F7F7', margin: '10px' }}
          >
            *
          </Typography>{' '}
        </Grid>
        <Grid item xs={2}>
          <Typography
            color="text.secondary"
            sx={{ flex: 1, backgroundColor: '#F7F7F7', margin: '10px' }}
          >
            *
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
            color="text.secondary"
            sx={{ flex: 1, backgroundColor: '#F7F7F7', margin: '10px' }}
          >
            *
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            color="text.secondary"
            sx={{ flex: 1, backgroundColor: '#F7F7F7', margin: '10px' }}
          >
            *
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
            color="text.secondary"
            sx={{ flex: 1, backgroundColor: '#F7F7F7', margin: '10px' }}
          >
            *
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            color="text.secondary"
            sx={{ flex: 1, backgroundColor: '#F7F7F7', margin: '10px' }}
          >
            *
          </Typography>
        </Grid>
      </Grid>
      <div>
        <hr />
        <Grid container>
          <Grid item xs={10}>
            <Typography
              sx={{ flex: 1, backgroundColor: '#C9C9C9', margin: '10px' }}
            >
              *
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              color="text.secondary"
              sx={{ flex: 1, backgroundColor: '#C9C9C9', margin: '10px' }}
            >
              *
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}
