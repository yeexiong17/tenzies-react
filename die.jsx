import React from "react"

export default function Die(prop) {

    const styles = {
        backgroundColor: prop.isHeld ? "#59e391" : "white"
    }

    return (
        <div className="die-face" style={styles} onClick={prop.holdDice}>
            <h2 className="die-num">{prop.value}</h2>
        </div>
    )
}