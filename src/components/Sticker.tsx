'use client'

import React, { useRef, useEffect } from 'react';

const Sticker = ({ text }: { text: string }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef?.current) return;
        const canvas = canvasRef.current as HTMLCanvasElement;

        const context = canvas.getContext('2d');
        if (!context) return;

        // Set canvas dimensions
        canvas.width = 300;
        canvas.height = 300;

        // Draw a circle
        context.beginPath();
        context.arc(150, 150, 140, 0, 2 * Math.PI);
        context.fillStyle = '#FFD700'; // Gold
        context.fill();

        // Write the text
        context.font = '20px Arial';
        context.textAlign = 'center';
        context.fillStyle = '#000000'; // Black

        // Word wrap
        const words = text.split(' ');
        const lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            let word = words[i];
            let width = context.measureText(currentLine + " " + word).width;
            if (width < canvas.width - 20) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);

        // Write each line
        const lineHeight = context.measureText("M").width * 1.5;
        let x = canvas.width / 2;
        let y = canvas.height / 2 - (lines.length - 1) / 2 * lineHeight;
        for (let i = 0; i < lines.length; i++) {
            context.fillText(lines[i], x, y);
            y += lineHeight;
        }

    }, [text]);


    return (
        <div className="flex flex-col items-center justify-center">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Sticker;