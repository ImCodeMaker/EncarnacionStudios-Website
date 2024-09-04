// Typewriter.js
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed, className }) => {
  const displayText = useTypewriter(text, speed);

  return <h1 className={className}>{displayText}</h1>;
};

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    setDisplayText('');
    setTypingIndex(0);
  }, [text]);

  useEffect(() => {
    if (typingIndex < text.length) {
      const typingInterval = setInterval(() => {
        setDisplayText(prevText => prevText + text.charAt(typingIndex));
        setTypingIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearInterval(typingInterval);
    }
  }, [typingIndex, text, speed]);

  return displayText;
};

export default Typewriter;
