import * as React from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Deposits(): JSX.Element {
  return (
    <React.Fragment>
      <h2>
        Recent Deposits
        <hr />
      </h2>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <hr />
        <Link color="primari.main" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  )
}
