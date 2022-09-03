import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';


const Success = (props) => {


  const navigate = useNavigate()

  useEffect(() => {
    //redirecting to the simplified view of the data grid in 5 seconds
    async function fetchData() {
      try {
        await axios.post("http://localhost:4000/api/contract/", props.contractFields)
        swal({ title: "contract added Successfully", icon: "success", timer: 5000 }).then(() => { navigate('/simpleView') })
        console.log(props.contractFields)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();

    // setTimeout(() => {

    // }, 5000) // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  return (
    <>
    </>

  )
}


export default Success
