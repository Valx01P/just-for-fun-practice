import './App.css'
import { useState, useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const Api = ({props}) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchShit = async () => {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            if (!res.ok) {
            throw new Error("get fucked")
            }
            let resJson = await res.json()
            setData(resJson)
            setLoading(false)
        } catch (shit) {
            setError(shit)
            setLoading(false)
        }
        }
        fetchShit()
    }, [])

    if (loading) return <h1>loading...</h1>
    if (error) return <h2>{error.message}</h2>

    return (
        <>
        {data.slice(0, 5).map((post) => (
        <h2 key={post.id}>{post.title}</h2>
        ))}
        {<h2>{props}</h2>}
        </>
    )
    }

    export default Api