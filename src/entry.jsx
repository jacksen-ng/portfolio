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
        if (!terminalLines || currentLine >= terminalLines.length) {
            onLoadingComplete?.();
            return;
        }

        const typeCharacter = (index) => {
            if (!terminalLines[currentLine]) return;
            
            if (index < terminalLines[currentLine].length) {
                setDisplayedText(prev => prev + terminalLines[currentLine][index]);
                setTimeout(() => typeCharacter(index + 1), 50);
            } else {
                setTimeout(() => {
                    setCurrentLine(prev => prev + 1);
                    setDisplayedText('');
                }, 500);
            }
        };

        typeCharacter(0);
    }, [terminalLines, currentLine, onLoadingComplete]);

    return (
        <div className="terminal-window">
            <div className="terminal-content">
                {terminalLines.map((line, index) => (
                    <div key={index} className="terminal-line">{line}</div>
                ))}
                <div className="terminal-line">
                    {displayedText}
                </div>
            </div>
        </div>
    );
};

export default TerminalEntry;