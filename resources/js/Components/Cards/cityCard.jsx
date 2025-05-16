import React from "react";
import { Link } from "@inertiajs/react";

export default function CityCard({ city, onEdit, onDelete, loggedIn }) {
  return (
    <div className=" rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-gradient-to-r from-[#114d56] to-[#1881929d]">
      <Link
        href={`/cities/${city.id}/properties`}
        className="block h-60 overflow-hidden"
      >
        <img
          src={`/storage/${city.img_url}`}
          alt={`${city.name} kép`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <Link
          href={`/cities/${city.id}/properties`}
          className="text-center font-bold text-3xl bg-gradient-to-r from-[#86bbc4fc] to-[#adc7cb29] bg-clip-text text-transparent"
        >
          {city.name}
        </Link>
        {loggedIn && (
          <div className="mt-auto flex space-x-2 pt-3">
            <button
              className="flex-1 bg-[#32a8ba] hover:bg-[#165862] text-white rounded-md p-2 transition-colors duration-200"
              onClick={() => onEdit(city.id)}
            >
              Szerkesztés
            </button>
            <button
              className="flex-1 bg-[#9f2f4fe3] hover:bg-[#165862] text-white rounded-md p-2 transition-colors duration-200"
              onClick={() => onDelete(city.id)}
            >
              Törlés
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
