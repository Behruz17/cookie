import React, { useEffect, useState } from 'react'
import './Animation.css'

export default function Animation() {
    const maxWidth = 576; // Maximum width
    const originalPoints = [
        { top: 70, left: 50, delay: "0s", rotate: "0deg", width: 6, height: 6, opacity: 1 },
        { top: 60, left: 160, delay: "0.5s", rotate: "15deg", width: 4.5, height: 4.5, opacity: 1 },
        { top: 20, left: 10, delay: "1s", rotate: "-15deg", width: 4, height: 4, opacity: 1 },
        { top: 0, left: 65, delay: "0s", rotate: "15deg", width: 3, height: 3, opacity: 0.5 },
        { top: 80, left: 0, delay: "0.5s", rotate: "-15deg", width: 2.8, height: 2.8, opacity: 0.5 },
        { top: 120, left: 140, delay: "1s", rotate: "15deg", width: 2, height: 2, opacity: 0.5 },
        { top: 10, left: 150, delay: "0s", rotate: "-20deg", width: 2.5, height: 2.5, opacity: 0.5 },
    ];

    const [points, setPoints] = useState(originalPoints);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if(windowWidth <= maxWidth && windowWidth > 400){
            setPoints([
                { top: 40, left: 50, delay: "0s", rotate: "0deg", width: 6, height: 6, opacity: 1 },
                { top: 30, left: 100, delay: "0.5s", rotate: "15deg", width: 4.5, height: 4.5, opacity: 1 },
                { top: 10, left: 20, delay: "1s", rotate: "-15deg", width: 4, height: 4, opacity: 1 },
                { top: 10, left: 65, delay: "0s", rotate: "15deg", width: 3, height: 3, opacity: 0.5 },
                { top: 50, left: 10, delay: "0.5s", rotate: "-15deg", width: 2.8, height: 2.8, opacity: 0.5 },
                { top: 60, left: 120, delay: "1s", rotate: "15deg", width: 2, height: 2, opacity: 0.5 },
                { top: 20, left: 130, delay: "0s", rotate: "-20deg", width: 2.5, height: 2.5, opacity: 0.5 },
            ])
        }else if(windowWidth <= 400){
            setPoints([
                { top: 10, left: 10, delay: "0s", rotate: "0deg", width: 6, height: 6, opacity: 1 },
                { top: 0, left: 40, delay: "0.5s", rotate: "15deg", width: 4.5, height: 4.5, opacity: 1 },
                { top: 0, left: -15, delay: "1s", rotate: "-15deg", width: 4, height: 4, opacity: 1 },
                { top: 40, left: 25, delay: "1s", rotate: "15deg", width: 3, height: 3, opacity: 0.5 },
                { top: 30, left: -10, delay: "0.5s", rotate: "-15deg", width: 2.8, height: 2.8, opacity: 0.5 },
                { top: 60, left: 60, delay: "1s", rotate: "15deg", width: 2, height: 2, opacity: 0.5 },
                { top: 20, left: 60, delay: "0s", rotate: "-20deg", width: 2.5, height: 2.5, opacity: 0.5 },
            ])
            console.log('change width');
        }else{
setPoints([
    { top: 40, left: 50, delay: "0s", rotate: "0deg", width: 6, height: 6, opacity: 1 },
    { top: 30, left: 160, delay: "0.5s", rotate: "15deg", width: 4.5, height: 4.5, opacity: 1 },
    { top: -10, left: 10, delay: "1s", rotate: "-15deg", width: 4, height: 4, opacity: 1 },
    { top: -30, left: 65, delay: "0s", rotate: "15deg", width: 3, height: 3, opacity: 0.5 },
    { top: 50, left: 0, delay: "0.5s", rotate: "-15deg", width: 2.8, height: 2.8, opacity: 0.5 },
    { top: 90, left: 140, delay: "1s", rotate: "15deg", width: 2, height: 2, opacity: 0.5 },
    { top: -20, left: 150, delay: "0s", rotate: "-20deg", width: 2.5, height: 2.5, opacity: 0.5 },
])
        }
    }, [windowWidth]);

    return (
        <div
            className="animation"
            style={{ flexDirection: "row", display: "flex" }}
        >
            {points.map((item, index) => (
                <img
                    src="https://static.tildacdn.com/tild3464-6362-4330-b536-636264613663/ton.svg"
                    alt="icon"
                    key={index}
                    className="square"
                    style={{
                        top: item.top,
                        left: item.left,
                        animationDelay: item.delay,
                        transformOrigin: item.transformOrigin,
                        "--rotate": item.rotate,
                        width: `${item.width}em`,
                        height: `${item.height}em`,
                        opacity: `${item.opacity}`,
                    }}
                />
            ))}
        </div>
    )
}
