/* eslint-disable react/prop-types */
import './App.css'
import { deleteThing } from './supabaseClient'


const Delete = ({id}) => {

    const onDelete = async (id) => {
        try {
            await deleteThing(id)
            window.location.reload(); // Reload the entire page
        } catch (err) {
            console.error('bruh we are cooked', err)
        }
    }

    return (
        <div>
            <button onClick={() => onDelete(id)}>
                Delete post
            </button>
        </div>
    )
}

export default Delete