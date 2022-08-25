import React, { useEffect } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const theme = createTheme({
    // for the typographt
    typography: {
      fontFamily: ['K2D', 'Noto-sans', 'sans-serif'].join(','),
      fontSize: 15,
    },
  })

  const navigate = useNavigate()

  useEffect(() => {   //redirecting to the simplified view of the data grid in 5 seconds
    setTimeout(() => {
      navigate('/simpleView')
    }, 5000) // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div style={styles.div}>
      <ThemeProvider theme={theme}>
        <Typography variant="h5">
          <h1>Thank You For Your Submission</h1>
          <p> You will be redirected in 5 seconds </p>
        </Typography>
      </ThemeProvider>
    </div>
  )
}

const styles = {
  div: {
    textAlign: 'center',
    marginTop: 50,
  },
}

export default Success
