'use client';

import { useState } from 'react';

export default function LikeButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button className="like-btn" onClick={handleClick}>
            {count === 0 ? '🤍' : '❤️'} {count}
        </button>
    );
}