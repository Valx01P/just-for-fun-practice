import './App.css'
import { getAllThings } from './supabaseClient'
import { useState, useEffect } from 'react'

const Database = () => {
    const [things, setThings] = useState([])
    useEffect(() => {
        const fetchThings = async () => {
            try {
                let response = await getAllThings()
                setThings(response)
            } catch (err) {
                console.error(err)
            }
        }
        fetchThings()
    }, [])

    return (
        <>
            {things.map((thing) => (
                <h2 key={thing.id}>{thing.title}</h2>
            ))}
        </>
    )
}

export default Database