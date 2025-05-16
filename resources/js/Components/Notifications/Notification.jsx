import React, { useEffect, useState } from "react";

export default function Notification({
    message,
    type = "success",
    duration = 10000,
    onClose,
}) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if (onClose) onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    const bgColor =
        type === "success"
            ? "bg-green-500"
            : type === "error"
            ? "bg-red-500"
            : type === "warning"
            ? "bg-yellow-500"
            : "bg-blue-500";

    return (
        <div
            className={`fixed top-5 right-5 ${bgColor} text-white p-4 rounded-md shadow-lg z-50`}
        >
            <div className="flex items-center">
                <span>{message}</span>
                <button
                    onClick={() => setVisible(false)}
                    className="ml-4 text-white hover:text-gray-200"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
