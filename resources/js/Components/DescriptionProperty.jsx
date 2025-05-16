import React from "react";

export default function DescriptionProperty({ description }) {
  return (
    <div>
      {/* Leírás rész alul */}
      <div className="mb-8 text-[#114d56]">
        <h3 className="text-xl font-bold mb-3">Részletes leírás:</h3>

        {description.includes("Előnyei:") ? (
          <>
            {/* Előtti rész */}
            <p className="text-m leading-relaxed mb-6">
              {description.split("Előnyei:")[0].trim()}
            </p>

            {/* Előnyök listája */}
            <h4 className="font-bold text-xl mb-2">Előnyök:</h4>
            <ul className="list-none pl-2 mb-4">
              {description
                .split("Előnyei:")[1] // utáni rész
                .split("–") // a gondolatjel mentén szeparálunk
                .map((item) => item.trim()) // whitespace-ek eltüntetése
                .filter((item) => item.length > 0) // üres elemek kiszűrése
                .map((item, idx) => (
                  <li key={idx} className="flex items-start mb-1">
                    <span className="mr-2">–</span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </>
        ) : (
          <p className="text-m leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
