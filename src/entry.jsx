import React, { useState, useEffect, useMemo } from 'react';
import './style/entry.css';

const TerminalEntry = ({ onLoadingComplete }) => {
    const terminalLines = useMemo(() => [
        "Initializing system...",
        "Welcome to Jacksen's Portfolio"
    ], []);

    const [currentLine, setCurrentLine] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (currentLine >= terminalLines.length) {
            setTimeout(() => {
                onLoadingComplete?.();
            }, 1000);
            return;
        }

        let currentText = '';
        let currentIndex = 0;

        const typeInterval = setInterval(() => {
            if (currentIndex < terminalLines[currentLine].length) {
                currentText += terminalLines[currentLine][currentIndex];
                setDisplayedText(currentText);
                currentIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setCurrentLine(prev => prev + 1);
                    setDisplayedText('');
                }, 1500);
            }
        }, 100);

        return () => clearInterval(typeInterval);
    }, [currentLine, terminalLines, onLoadingComplete]);

    return (
        <div className="terminal-window">
            <div className="terminal-content">
                <div className="terminal-line">
                    {displayedText}
                    <span className="terminal-cursor"></span>
                </div>
            </div>
        </div>
    );
};

export default TerminalEntry;