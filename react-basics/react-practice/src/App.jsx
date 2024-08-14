import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchShit = async () => {
      try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!res.ok) {
          throw new Error('Get fucked')
        }
        let resJson = await res.json()
        setData(resJson)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    fetchShit()
  }, [])

  if (loading) return <p1>loading...</p1>
  if (error) return <p1>{error.message}</p1>

  return (
    <>
      {data.map((value) => (
        <h1 key={value.id}>{value.title}</h1>
      ))}
    </>
  )
}

export default App