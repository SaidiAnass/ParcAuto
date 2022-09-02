import React, { useEffect } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Success = (props) => {
  const theme = createTheme({
    // for the typographt
    typography: {
      fontFamily: ['K2D', 'Noto-sans', 'sans-serif'].join(','),
      fontSize: 15,
    },
  })

  const navigate = useNavigate()

  useEffect(() => {
    //redirecting to the simplified view of the data grid in 5 seconds
    async function fetchData() {
      try {
        await axios.post("http://localhost:4000/api/contract/", props.contractFields)
        alert("contract added Successfully")
        console.log(props.contractFields)
      } catch (error) {
        console.log(error)
      }
      // const response = ).then(response => {
      //   console.log(response)
      // })
      //   .catch(error => {
      //     console.log(error.response)
      //   })
      // //.then(response => {
      // //   console.log(response);
      // //   console.log(response.data);
      // // })
      // // .catch(error => {
      // //   console.log(error);
      // // });
      // alert("contract added Successfully")
      // console.log(props.contractFields)

    }
    fetchData();


    setTimeout(() => {

      navigate('/simpleView')
    }, 5000) // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div style={styles.div}>
        <ThemeProvider theme={theme}>
          <Typography component={'span'} variant="h3" >
            <h1>Thank You For Your Submission</h1>
            <p> - You will be redirected in 5 seconds -</p>
          </Typography>
        </ThemeProvider>
      </div>
    </>

  )
}

const styles = {
  div: {
    textAlign: 'center',
    marginTop: "17%",
  },
}

export default Success
