'use client'

import React, { useRef, useEffect } from 'react';

const Sticker = ({ text }: { text: string }) => {
    const canvasRef = useRef(null);
    const colors = ['red', 'brown', 'green', 'blue'];

    const font = '30px Comic Sans MS';

    useEffect(() => {
        if (!canvasRef?.current) return;
        const canvas = canvasRef.current as HTMLCanvasElement;

        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.width = 500;
        const words = text.split(' ');
        const lines = [];
        let currentLine = words[0];

        context.font = font;
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

        const lineHeight = context.measureText("M").width * 1.5;
        canvas.height = lines.length * lineHeight + 120;

        const waveStrength = 10;
        const margin = 40;
        const waveDistance = 50;

        function generateWavePoints(start: number, end: number, horizontal: boolean, reverse: boolean, offset: number = 0) {
            const points = [];
            const step = waveDistance;
            for (let i = start; i < end; i += step) {
                const wavePitch = Math.random() * 5 + 5;
                const wavePoint = waveStrength * Math.sin((i - start) / wavePitch) + waveStrength;
                points.push({
                    x: horizontal ? i : wavePoint + offset,
                    y: horizontal ? wavePoint + offset : i
                });
            }
            if (reverse) points.reverse();
            return points;
        }

        context.beginPath();

        const topPoints = generateWavePoints(margin, canvas.width - margin, true, false);
        const rightPoints = generateWavePoints(margin, canvas.height - margin, false, false, canvas.width - margin);
        const bottomPoints = generateWavePoints(margin, canvas.width - margin, true, true, canvas.height - margin);
        const leftPoints = generateWavePoints(margin, canvas.height - margin, false, true);

        [topPoints, rightPoints, bottomPoints, leftPoints].forEach(points => {
            points.forEach(point => {
                context.lineTo(point.x + margin / 4, point.y + margin / 4);
            });
        });

        context.closePath();

        context.shadowColor = 'black';
        context.shadowBlur = 10;

        context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        context.fill();

        context.shadowColor = 'transparent';

        context.strokeStyle = '#FFFFFF';
        context.lineWidth = 5;
        context.stroke();


        context.textAlign = 'center';
        context.fillStyle = '#FFFFFF';
        let y = (canvas.height - lines.length * lineHeight) / 2 + lineHeight;
        for (let i = 0; i < lines.length; i++) {
            context.font = font;
            context.fillText(lines[i], canvas.width / 2, y);
            y += lineHeight;
        }

    }, [text]);

    const downloadSticker = () => {
        if (!canvasRef?.current) return;
        const canvas = canvasRef.current as HTMLCanvasElement;

        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        link.href = image;
        link.download = 'sticker.png';
        link.click();
    };


    return (
        <div className="flex flex-col items-center justify-center">
            <canvas ref={canvasRef} />
            <button onClick={downloadSticker} className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full font-bold text-xl hover:bg-blue-700 transition-colors duration-300">
                Download Sticker
            </button>
        </div>
    );
};

export default Sticker;