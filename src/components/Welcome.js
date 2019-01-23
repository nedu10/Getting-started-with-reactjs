import React from 'react'

const Welcome = (props) => {
    return (
        <div>
        <h1>Welcome {props.name} a.k.a {props.heroStyle}</h1>
        {props.children}
        </div>
    )
}

export default Welcome