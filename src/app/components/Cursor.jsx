import React, { useState, useEffect } from "react";

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="">
            <div
                className="w-8 h-8 border-2 max-lg:hidden border-gray-300 rounded-full fixed pointer-events-none"
                style={{
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    transform: "translate(-50%, -50%)",
                }}
            />
            <div
                className="w-2 h-2 bg-black rounded-full max-lg:hidden fixed pointer-events-none"
                style={{
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    transform: "translate(-50%, -50%)",
                }}
            />
        </div>
    );
};

export default CursorFollower;
