import './App.css'
import { useState, useEffect } from 'react'
import { getAllThings } from './supabaseClient'
import Post from './Post'
import PostForm from './PostForm'

const Home = () => {
    const [things, setThings] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchThings = async () => {
            try {
                let data = await getAllThings()
                setThings(data)
                setLoading(false)
            } catch (err) {
                console.error("Error", err)
                setError(err)
            }
        }
        fetchThings()
    }, [])

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>{error}</h2>

    return (
        <div>
            { things.map((thing) => (
                <div key={thing.id}>
                    <Post id={thing.id} title={thing.title} things={things} setThings={setThings} />
                </div>
            )) }
            <PostForm things={things} setThings={setThings} />
        </div>
    )

}

export default Home