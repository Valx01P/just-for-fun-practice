/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
import { useState } from 'react'
import DeleteButton from './DeleteButton'
import EditForm from './EditForm'

const Post = ({ id, title, things, setThings }) => {

    return (
        <div>
            <h2>{title}</h2>
            <DeleteButton id={id} things={things} setThings={setThings} />
            <EditForm id={id} things={things} setThings={setThings} />
        </div>
    )

}

export default Post