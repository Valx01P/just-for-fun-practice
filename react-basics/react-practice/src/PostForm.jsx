/* eslint-disable react/prop-types */
import './App.css'
import { createThing } from './supabaseClient'
import { useState } from 'react'

const PostForm = ({ things, setThings }) => {
    const [title, setTitle] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        try {
            const newThing = { title };  // Create an object with the title as the key
            const data = await createThing(newThing);  // Insert and get the new thing back

            setThings([...things, data]);  // Append the new item to the existing state
            setTitle('');  // Clear the input field
        } catch (err) {
            console.error("Error creating thing:", err);
        }
    };

    return (
        <div className='create'>
            <form>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name='title'
                    placeholder='Post Title'
                    required
                />
                <button type='submit' onClick={onSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )

}

export default PostForm