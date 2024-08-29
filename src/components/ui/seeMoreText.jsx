"use client"
import React, { useState } from 'react';

const SeeMoreText = ({ text }) => {
    const characterLimit = 200;
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the visibility of full text
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    // Determine whether to show the full text or a truncated version
    const displayedText = isExpanded ? text : text?.slice(0, characterLimit);

    return (
        <p className='text-sm leading-5'>
            {displayedText}
            {text?.length > characterLimit && !isExpanded && (
                <>
                    ...<span
                        className='text-xs text-primary cursor-pointer'
                        onClick={toggleText}
                    >
                        &nbsp;see more
                    </span>
                </>
            )}
            {isExpanded && (
                <span
                    className='text-xs text-primary cursor-pointer'
                    onClick={toggleText}
                >
                    &nbsp;see less
                </span>
            )}
        </p>
    );
};

export default SeeMoreText;
