import React from 'react'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
// import SidebarComponent from '../src/components/sidebarComponent'
import Dashboard from '../src/containers/Dashboard'
import Box from '@material-ui/core/Box'

export default function Index(): JSX.Element {
  return (
    <div>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: 'auto',
          }}
        >
          <Dashboard />
        </Box>
      </Box>
      <Footer />
    </div>
  )
}
