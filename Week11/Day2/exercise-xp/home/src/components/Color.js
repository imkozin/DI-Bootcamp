import { useState, useEffect } from "react";

const Color = () => {
    const [favoriteColor, setFavColor] = useState('red')
    const [color, setColor] = useState('')

    useEffect(() => {
        alert('useEffect reached');
        setFavColor('yellow')
        }, []);

    useEffect(() => {
        if (color !== '')
        setFavColor(color)
    }, [color])

    const changeColor = () => {
        setFavColor(favoriteColor==='red'? 'blue' : 'red')
    }
    return (
        <div>
            <h1>My Favorite Color is {favoriteColor}</h1>
            <input onChange={(e) => setColor(e.target.value)}/>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default Color;