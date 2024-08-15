import './App.css'
import { getAllThings } from './supabaseClient'
import { useState, useEffect } from 'react'
import Delete from './Delete'

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
                <div key={thing.id}>
                    <h2>{thing.title}</h2>
                    <Delete id={thing.id}/>
                </div>
            ))}
        </>
    )
}

export default Database