import React, { useEffect, useState } from 'react'
import Header from './Component/Header'
import "./App.css"
import Card from './Component/Card'

const App = () => {


  const [data, setdata] = useState([])


  const fetchData = async () => {

    const response = await fetch('https://test.create.diagnal.com/data/page1.json');

    const data = await response.json()
    console.log(data.content)
    setdata(data)
  }




  useEffect(() => {
    fetchData()
  }, [])







  return (
    <>

      <Header />

      {/* 
      {
        data.map((ele) => {
          return <Card title={title} image={poster - image} />
        })
      } */}


      <Card />

    </>
  )
}

export default App