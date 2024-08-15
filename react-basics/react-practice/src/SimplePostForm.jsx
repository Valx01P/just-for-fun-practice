import './App.css'
import { useState } from 'react'
import { createThing } from './supabaseClient'

const SimpleFormPost = () => {
    const [title, setTitle] = useState('')

    const handleSubmit = async () => {
        try {
            await createThing({ title })
            setTitle('')
        } catch (err) {
            console.error('Error', err)
        }
    }

    return (
        <div>
            <h1>Shit form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='enter title'
                    required
                />
                <button type='submit'>
                    create shit
                </button>
            </form>
        </div>
    )
}

export default SimpleFormPost



/*
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // eslint-disable-next-line no-unused-vars
            const { data, error } = await createThing({ title })
            if (error && error.message) {
                throw error
            }
            setMessage('bing chilling')
            setTitle('')
        } catch (err) {
            console.error('Error bitch', err)
            setMessage('we are so screwed')
        }
    }
*/