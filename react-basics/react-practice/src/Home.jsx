import './App.css'
import { useState, useEffect } from 'react'
import { getAllThings } from './supabaseClient'
import Post from './Post'
import PostForm from './PostForm'

const Home = () => {
    const [things, setThings] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weatherData, setWeatherData] = useState(null)
    const [location, setLocation] = useState('')

    const openWeatherMapKey = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY


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

    const getWeatherData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${openWeatherMapKey}`)
            const jsonRes = await response.json()
            console.log(jsonRes)
            setWeatherData(jsonRes)
        } catch (err) {
            console.error("Error fetching weather", err)
        }
    }

    const handleSearch = () => {
        if (location) {
            getWeatherData()
        } else {
            alert("Please enter a location")
        }
    }

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>{error}</h2>

    return (
        <div>
            {things.map((thing) => (
                <div key={thing.id}>
                    <Post id={thing.id} title={thing.title} things={things} setThings={setThings} />
                </div>
            ))}
            <PostForm things={things} setThings={setThings} />
            <h1>Weather</h1>
            <input
                onChange={(e) => setLocation(e.target.value)}
                type='text'
                placeholder='enter location'
                value={location}
            />
            <button onClick={handleSearch}>Get weather</button>
            <div>
                {weatherData && (
                    <pre>{JSON.stringify(weatherData, null, 2)}</pre>
                )}
            </div>
            {weatherData && weatherData.weather && (
                <div>
                    <h2>Weather Details</h2>
                    {weatherData.weather.map((data, index) => (
                        <div key={index}>
                            <p>Main: {data.main}</p>
                            <p>Description: {data.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home
