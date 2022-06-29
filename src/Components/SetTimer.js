import React, { useState, useEffect } from 'react';

function SetTimer() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    });
    return (
        <div>You have used {count} seconds on this website</div>
    )
}

export default SetTimer;