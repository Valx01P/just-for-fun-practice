/* eslint-disable react/prop-types */
import './App.css'
import { useState } from 'react'
import { updateThing } from './supabaseClient'

const EditForm = ({ things, setThings, id }) => {
    const [newTitle, setNewTitle] = useState('')

    const onUpdate = async (e) => {
        e.preventDefault()
        try {
            let newData = { title : newTitle }
            let updatedThing = await updateThing(id, newData)
            setThings(things.map((thing) => (thing.id === updatedThing.id ? updatedThing : thing)))
            setNewTitle('')
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <form onSubmit={onUpdate}>
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                type='text'
                placeholder='update thing'
                name='update'
                required
            />
            <button type='submit'>
                Update
            </button>
        </form>
    )

}

export default EditForm