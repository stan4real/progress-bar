import { useEffect, useState } from 'react'
import ProgressBar from './Components/progressbar/ProgressBar'
import { API } from '../config'



function Home() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading]= useState(true)

useEffect(() => {
  const getData = async () => {
    try {
      const response = await fetch(`${API}`)
      let data = await response.json()
      setData(data)
    } catch(err) {
      setError(err.message)
      setData(null)
    } finally {
      setLoading(false)
    }
  }
  
  getData()
}, [])

  return <div>
    {loading ? 
    <p>loading...</p>
    :
    <ProgressBar data={data}/>
    }
  </div>
}

export default Home
