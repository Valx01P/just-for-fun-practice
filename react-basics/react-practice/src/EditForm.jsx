/* eslint-disable react/prop-types */
import './App.css'
import { useState } from 'react'
import { updateThing } from './supabaseClient'

const EditForm = ({ id, things, setThings }) => {
    const [newTitle, setNewTitle] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const updates = { title: newTitle };
            const updatedData = await updateThing(id, updates);

            // Update the local state with the new title
            const updatedThings = things.map(thing =>
                thing.id === id ? updatedData : thing
            );

            setThings(updatedThings);
            setNewTitle('');
        } catch (err) {
            console.error("Error updating thing:", err);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder='New Title'
                required
            />
            <button type='submit'>Update</button>
        </form>
    )
}

export default EditForm