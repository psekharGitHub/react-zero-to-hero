import React from 'react'
import './Styling.css'

function Stylesheet() {

    let className = `primary-enlarge-text`
    return (
        <div>
            <h1 className="primary">StyleSheet</h1>
            <p className={`${className}`}> Random Text is always Random </p>
            <div className="success">
                This is div text
            </div>
        </div>
    )
}

export default Stylesheet