import React from "react";

export default function FeatureProperty({ property }) {
  // Formázó függvény az ezres elválasztáshoz
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
    <>
      {/* Flexbox a tökéletes középre igazításhoz */}
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-8 text-[#114d56]">
        {/* Első oszlop tulajdonságai */}
        <div className="md:w-1/2 space-y-2 md:pr-8">
          <div className="flex justify-between">
            <span>Eladási ár:</span>
            <span className="font-bold ml-2">
              {formatPrice(property.sale_price)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Minimum bérleti időszak:</span>
            <span className="font-semibold">
              {property.minimum_rental_period}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Építés éve:</span>
            <span className="font-semibold ml-2">{property.year_built}</span>
          </div>
          <div className="flex justify-between">
            <span>Épület emeletei:</span>
            <span className="font-semibold ml-2">
              {property.building_floors}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Emelet:</span>
            <span className="font-semibold ml-2">{property.floor}</span>
          </div>
          <div className="flex justify-between">
            <span>Erkély:</span>
            <span className="font-semibold ml-2">{property.balcony} m²</span>
          </div>
          <div className="flex justify-between">
            <span>Bútorozottság:</span>
            <span className="font-semibold ml-2">{property.furniture}</span>
          </div>
          <div className="flex justify-between">
            <span>Gépesítettség:</span>
            <span className="font-semibold ml-2">{property.appliances}</span>
          </div>
        </div>

        {/* Második oszlop tulajdonságai */}
        <div className="md:w-1/2 space-y-2 md:pl-8 mt-6 md:mt-0">
          <div className="flex justify-between">
            <span>Kilátás:</span>
            <span className="font-semibold ml-2">{property.view}</span>
          </div>
          <div className="flex justify-between">
            <span>Fűtés típusa:</span>
            <span className="font-semibold ml-2">{property.heating_type}</span>
          </div>
          <div className="flex justify-between">
            <span>Parkolás:</span>
            <span className="font-semibold ml-2">{property.parking}</span>
          </div>
          <div className="flex justify-between">
            <span>Légkondicionáló:</span>
            <span className="font-semibold ml-2">
              {property.air_conditioning}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Dohányzás engedélyezett:</span>
            <span className="font-semibold ml-2">{property.smoking}</span>
          </div>
          <div className="flex justify-between">
            <span>Kisállat engedélyezett:</span>
            <span className="font-semibold ml-2">{property.pets}</span>
          </div>
          <div className="flex justify-between">
            <span>Lift:</span>
            <span className="font-semibold ml-2">{property.elevator}</span>
          </div>
          <div className="flex justify-between">
            <span>Alapterület:</span>
            <span className="font-semibold ml-2">{property.floor_area} m²</span>
          </div>
        </div>
      </div>
    </>
  );
}
