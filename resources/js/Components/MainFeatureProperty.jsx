import React from "react";

export default function MainFeatureProperty({ property, city }) {
  const formatPrice = (price) => {
    if (!price) return "";

    // Szám konvertálása és normalizálás
    const numPrice = parseFloat(
      price.toString().replace(/\s+/g, "").replace(/,/g, ".")
    );
    if (isNaN(numPrice)) return price;

    // Ezres tagolás pontokkal
    return numPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " Ft";
  };
  return (
    <div className="">
      <div className="text-transparent mb-6  max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-[#114d56]">
          {property.street}, {city.name}
        </h1>
        <div className="text-[#114d56]">
          Bérleti díj:{" "}
          <span className="font-semibold">
            {formatPrice(property.rental_price)}
          </span>
        </div>
        <div className="text-[#114d56]">
          Méret: <span className="font-semibold">{property.size} m²</span>
        </div>
      </div>
    </div>
  );
}
