import React, { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        if (count === 10) {
            setCount(1);
        } else {
            setCount(count + 1); 
        }
    };

    const resetClick = () => {
        setCount(1);
    };

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={increaseCount}>+</button>
            <button onClick={resetClick}>r</button>
        </div>
    );
}
