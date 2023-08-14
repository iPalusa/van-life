import React,{useEffect} from 'react'

const Vans = () => {
    useEffect ( () => {
        fetch("/api/vans")
        .then(response => response.json())
        .then(data => console.log(data))
    },[])
  return (
    <h1>Vans page goes here 😊</h1>
  )
}

export default Vans