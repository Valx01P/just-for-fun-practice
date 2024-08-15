/* eslint-disable react/prop-types */
import './App.css'
import { deleteThing } from './supabaseClient'

const DeleteButton = ({ id, things, setThings }) => {
    const onDelete = async () => {
        try {
            await deleteThing(id)
            setThings(things.filter(thing => thing.id !== id));  // Update state to remove the deleted item
        } catch (err) {
            console.error('yikes', err)
        }
    }

    return (
        <button onClick={onDelete}>
            Delete
        </button>
    )
}

export default DeleteButton