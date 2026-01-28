import { useState, useEffect } from 'react';
import './QuillWriter.css';

const QuillWriter = ({ text, speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed]);

    return (
        <div className="quill-writer-container">
            <div className="quill-parchment">
                <p className="quill-text">
                    {displayedText}
                    {currentIndex < text.length && <span className="quill-cursor">|</span>}
                </p>
            </div>
            <div className="quill-icon">🪶</div>
        </div>
    );
};

export default QuillWriter;
