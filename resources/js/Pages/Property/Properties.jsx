import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Properties({ properties, city }) {
  return (
    <div>
      <Head title={city.name} />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {properties.map((property) => (
            <div
              key={property.id}
              //   className="rounded-lg overflow-hidden shadow-md hover:bg-gray-50 transition duration-150"
            >
              <div className="flex flex-col md:flex-row md:gap-6 md:h-80">
                {/* Left side - Image (responsive) */}
                <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md h-64 md:h-full flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={`/storage/${property.featured_image}`}
                    alt={property.street}
                  />
                </div>

                {/* Right side - Property details (responsive) */}
                <div className="md:w-1/2 p-6 flex flex-col items-center justify-center space-y-8 md:h-full ">
                  <h2 className="text-center font-bold text-3xl bg-gradient-to-r from-[#114d56] to-[#1881929d] bg-clip-text text-transparent">
                    {property.street}
                  </h2>
                  <p className="text-[#165862] text-lg">
                    {property.short_description}
                  </p>
                  <Link
                    href={`/properties/${property.id}/property`}
                    className="inline-block  px-4 py-2 bg-gradient-to-r from-[#114d56] to-[#1881929d]  text-[white] rounded hover:bg-opacity-90 transition hover:text-[#85cbd6]"
                  >
                    Részletek megtekintése
                  </Link>
                </div>
              </div>
              <div className="w-full my-12 h-px bg-gradient-to-r from-transparent via-[#114d56]/50 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
