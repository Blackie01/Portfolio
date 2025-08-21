// Bad practice - timer is never cleared
function startCountdown(startNumber) {
    setTimeout(function countdown() {
        console.log(startNumber);
        startNumber--;
        if (startNumber >= 0) {
            setTimeout(countdown, 1000);
        }
    }, 1000);
}

// Better practice with setInterval - includes cleanup
// function startCountdown(startNumber) {
//     const countdownElement = document.getElementById('countdown');
    
//     // Store interval ID for cleanup
//     const intervalId = setInterval(() => {
//         countdownElement.textContent = startNumber;
//         startNumber--;
        
//         if (startNumber < 0) {
//             clearInterval(intervalId);  // Clean up when done
//             countdownElement.textContent = 'Countdown complete!';
//         }
//     }, 1000);
    
//     // Return cleanup function
//     return function cleanup() {
//         clearInterval(intervalId);
//     };
// }

// React component example with proper interval cleanup
import React, { useState, useEffect } from 'react';

function CountdownComponent({ startFrom }) {
    const [count, setCount] = useState(startFrom);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => {
                if (prevCount <= 0) {
                    clearInterval(intervalId);
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);

        // Cleanup on component unmount or when startFrom changes
        return () => clearInterval(intervalId);
    }, [startFrom]);

    return <div>Countdown: {count}</div>;
}